// 餐厅类
import Delay from './delay'
import Chain from './chain'

/**
 * 餐厅类
 *
 * @class Restaurant
 */
class Restaurant {
  static created = false
  static instance = null
  /**
   * 构造函数
   * @param {*} arguments
   * @memberof Restaurant
   */
  constructor({ cash = 0, seats = 10, waiterQueue = [], cookQueue = [], customerQueue = [], menu = [] }) {
    if (!Restaurant.created) {
      // 餐厅余额
      this.cash = cash;

      // 餐厅座位
      this.seats = seats;

      // 餐厅是否正在运行
      this.isRun = false;

      // 空闲队列
      this.waiterQueue = waiterQueue;
      this.cookQueue = cookQueue;
      this.customerQueue = customerQueue;

      // 工作队列
      this.waiterWorkQueue = [];
      this.cookWorkQueue = [];
      this.customerEatQueue = [];
      this.customerWaitQueue = [];

      // 菜单
      this.menu = menu

      // 点菜板
      this.Dishes = []
      this.DishesOK = []

      // 静态变量，判断是否创建过餐厅
      Restaurant.created = true;
      Restaurant.instance = this;

      // 设置责任链

      // this.chainHead = new Chain(this.waiterToCust, this)
      this.chainHead = new Chain(this.custOrderDishes, this)
      this.chainHead
        // .setNextSuccessor(new Chain(this.waiterToDishs, this))
        .setNextSuccessor(new Chain(this.cookToDishs, this))
        .setNextSuccessor(new Chain(this.waiterSendCustDishs, this))
        .setNextSuccessor(new Chain(this.custToWaiter, this))
      // .setNextSuccessor(new Chain(function(){this.isRun = false}, this))

      return this;
    } else {

      return Restaurant.instance;
    }

  }
  //员工起始id
  staffId = 100001

  /**
   * 初始化菜单
   *
   * @param {*} data 菜单数据
   * @memberof Restaurant
   */
  setMenu(data) {
    this.menu = data;
  }
  /**
   * 添加菜品
   *
   * @param {Object} data 菜品对象
   * @memberof Restaurant
   */
  addMenu(data) {
    this.menu.push(data)
  }
  /**
   * 获得菜单
   *
   * @returns 菜单，是一个对象数组
   * @memberof Restaurant
   */
  getMenu() {
    return this.menu
  }
  /**
   * 雇佣职员
   *
   * @param {Staff} staff 职员
   * @returns 雇佣结果
   * @memberof Restaurant
   */
  hire(staff) {
    staff.setId(this.staffId++)
    staff.setRestaurant(this)
    console.log("雇佣了", staff);
    if (staff.profession === 'Waiter') {
      this.waiterQueue.push(staff);
    } else if (staff.profession === 'Cook') {
      this.cookQueue.push(staff);
    }
    return
  }
  /**
   * 解雇职员
   *
   * @param {Staff} staff 职员
   * @returns 解雇结果
   * @memberof Restaurant
   */
  fire(staff) {
    let queue
    if (staff.profession === 'Worker') {
      queue = this.waiterQueue;
    } else if (staff.profession === 'Cook') {
      queue = this.cookQueue;
    }
    let index = queue.findIndex((e) => {
      return e.id === staff.id;
    })
    return queue.splice(index, 1);
  }
  /**
   * 顾客来到，餐厅启动各个成员运作
   *
   * @param {*} cust
   * @memberof Restaurant
   */
  customersComing(cust) {
    if (this.customerQueue.length > 5) {
      return false
    }
    // 设置顾客所在餐厅
    cust.setRestaurant(this);
    // 加入顾客等待队列
    this.customerQueue.push(cust);
    // 餐厅运行
    this.run();
    return true;
  }
  /**
   * 餐厅运行，使用责任链模式 分为：
   * + [x] 服务员为顾客点菜      waiterToCust
   * + [x] 服务员把菜添加到点菜板 waiterToDishs
   * + [x] 厨师从点菜版取菜单    cookToDishs
   * + [x] 做菜完成通知服务员    cookToWaiter
   * + [x] 服务员送菜           waiterSendCustDishs
   * + [x] 顾客吃完服务员结账    custToWaiter
   * 
   * 以下情况触发餐厅运行：
   * + [ ] 顾客到来触发
   * + [ ] 服务员变为空闲状态触发
   * + [ ] 厨师完成工作触发
   * + [ ] 顾客吃完触发
   * + [ ] 结账完成触发
   *
   * @memberof Restaurant
   */
  run() {
    if (!this.isRun) {
      this.isRun = true;
      this.chainHead.passRequest();
      this.isRun = false;
    }

  }
  /**
   * 添加菜品到点菜板
   *  
   * @param {*} dishes 菜品类
   * @memberof Restaurant
   */
  addDishes(dishes) {
    let Dishes = this.Dishes;
    dishes.forEach(element => {
      let index = Dishes.find(x => x.name === element.name)
      // console.log(dishes);

      if (index >= 0) {
        Dishes[index].dishes.push(element);
        Dishes[index].time += element.time;
      } else {
        Dishes.push({
          name: element.name,
          time: element.time,
          dishes: [element]
        })
      }
    });

  }

  /**
   * 顾客自己点餐
   *
   * @memberof Restaurant
   */
  custOrderDishes() {
    if (this.customerQueue.length > 0) {
      let cust
      while (this.customerQueue.length > 0) {
        cust = this.customerQueue.pop();
        console.log(`顾客`, cust, `正在通过app点菜`);
        Delay(3).then(() => {
          console.log(`顾客`, cust, `点餐完成`);
          cust.sendDishes();
          this.customerWaitQueue.push(cust);
          this.run()
        })
      }
    }
    return 'nextSuccessor'
  }

  /**
   * 服务员为顾客点菜
   *
   * @memberof Restaurant
   */
  waiterToCust() {
    // 用空闲服务员和顾客的时候

    if (this.waiterQueue.length > 0
      && this.customerQueue.length > 0) {
      console.log('服务员为顾客点菜');
      let waiter, cust
      while (this.waiterQueue.length > 0
        && this.customerQueue.length > 0) {
        waiter = this.waiterQueue.pop();
        cust = this.customerQueue.pop();
        waiter.orderDishes(cust);
        this.waiterWorkQueue.push(waiter);
        this.customerWaitQueue.push(cust);
      }
    }
    return 'nextSuccessor'
  }
  /**
   * 服务员把菜添加到点菜板
   *
   * @memberof Restaurant
   */
  waiterToDishs() {
    if (this.waiterWorkQueue.length > 0) {
      console.log('服务员把菜添加到点菜板');
      let waiter, len = this.waiterWorkQueue.length
      while (len > 0 && this.waiterWorkQueue[len - 1].status === 'orderDishes') {
        waiter = this.waiterWorkQueue.pop();
        waiter.setDishes();
        this.waiterWorkQueue.length = --len;
      }
    }
    return 'nextSuccessor'
  }
  /**
   * 服务员送菜
   *
   * @memberof Restaurant
   */
  waiterSendCustDishs() {

    if (this.waiterQueue.length > 0
      && this.DishesOK.length > 0) {
      let waiter, dishes
      while (this.waiterQueue.length > 0
        && this.DishesOK.length > 0) {
        waiter = this.waiterQueue.pop();
        dishes = this.DishesOK.pop();
        console.log(`服务员`, waiter, `开始送菜`, dishes);
        this.waiterWorkQueue.push(waiter);
        Delay(0.5).then(() => {
          waiter.sendDishes(dishes);
          console.log(`服务员`, waiter, `送菜完成`);
          let index = this.waiterWorkQueue.indexOf(waiter)
          this.waiterQueue.push(waiter)
          this.waiterWorkQueue.splice(index, 1)
          this.run()
        })
      }
    }
    return 'nextSuccessor'
  }
  /**
   * 厨师从点菜版取菜单
   *
   * @memberof Restaurant
   */
  cookToDishs() {
    if (this.cookQueue.length > 0
      && this.Dishes.length > 0) {
      console.log('厨师从点菜版取菜单');
      console.log([...this.Dishes]);

      let cook, dishes
      while (this.cookQueue.length > 0
        && this.Dishes.length > 0) {
        cook = this.cookQueue.pop();
        dishes = this.Dishes.pop();
        this.cookWorkQueue.push(cook);
        console.log('厨师', cook, '正在做菜', dishes);
        (function (cook,time, self) {
          Delay(time).then(() => {
            cook.setDishesOk(dishes);
            console.log('厨师', cook, '烹饪完成', dishes);
            let index = self.cookWorkQueue.indexOf(cook)
            self.cookQueue.push(cook)
            self.cookWorkQueue.splice(index, 1)
            self.run()
          })
        })(cook,dishes.time, this)
      }
    }
    return 'nextSuccessor'
  }

  /**
   * 顾客吃完服务员结账
   *
   * @memberof Restaurant
   */
  custToWaiter() {
    console.log(this.waiterQueue,this.customerEatQueue);
    
    if (this.waiterQueue.length > 0
      && this.customerEatQueue.length > 0) {
      let waiter, cust
      while (this.waiterQueue.length > 0
        && this.customerEatQueue.length > 0) {
        cust = this.customerEatQueue[this.customerEatQueue.length - 1];
        if (cust.okDishes.length === cust.Dishes.length) {
          console.log('顾客吃完服务员结账');
          this.customerEatQueue.pop();
          waiter = this.waiterQueue.pop();
          this.waiterWorkQueue.push(waiter);
          Delay(0.5).then(() => {
            waiter.pay(cust);
            let index = this.waiterWorkQueue.indexOf(waiter)
            this.waiterQueue.push(waiter)
            this.waiterWorkQueue.splice(index, 1)
            this.run()
          })
        }
      }
    }
    return 'nextSuccessor'
  }

}

export default Restaurant