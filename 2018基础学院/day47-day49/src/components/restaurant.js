// 餐厅类


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
      
      // 空闲队列
      this.waiterQueue = waiterQueue;
      this.cookQueue = cookQueue;
      this.customerQueue = customerQueue;
      
      // 工作队列
      this.waiterWorkQueue = [];
      this.cookWorkQueue = [];
      this.customerEatQueue = [];
      
      // 菜单
      this.menu = menu
      
      // 点菜板
      this.Dishes = []

      // 静态变量，判断是否创建过餐厅
      Restaurant.created = true;
      Restaurant.instance = this;
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
  setMenu (data) {
    this.menu = data;
  }
  /**
   * 添加菜品
   *
   * @param {Object} data 菜品对象
   * @memberof Restaurant
   */
  addMenu (data) {
    this.menu.push(data)
  }
  /**
   * 获得菜单
   *
   * @returns 菜单，是一个对象数组
   * @memberof Restaurant
   */
  getMenu () {
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
    if (staff.profession === 'Worker') {
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
    // 设置顾客所在餐厅
    cust.setRestaurant(this);
    // 加入顾客等待队列
    this.customerQueue.push(cust);
    // 餐厅运行
    this.run();
  }

  /**
   * 添加菜品到点菜板
   *  
   * @param {*} dishes 菜品类
   * @memberof Restaurant
   */
  addDishes(dishes) {
    let Dishes = this.Dishes;
    let index = Dishes.find(x=>{
      x.name = dishes.name;
    })
    if(index>=0) {
      Dishes[index].dishes.push(dishes);
      Dishes[index].time += dishes.time;
    } else {
      Dishes.push({
        name: dishes.name,
        time: dishes.time,
        dishes: [dishes]
      })
    }
  }
  /**
   * 餐厅运行，使用责任链模式 分为：
   *    [x] 服务员为顾客点菜  
   *    [x] 服务员把菜添加到点菜板
   *    [ ] 厨师从点菜版取菜单
   *    [ ] 做菜完成通知服务员
   *    [-] 服务员送菜
   *    [ ] 顾客吃完服务员结账
   * 以下情况触发餐厅运行：
   *    [ ] 顾客到来触发
   *    [ ] 服务员变为空闲状态触发
   *    [ ] 厨师完成工作触发
   *    [ ] 顾客吃完触发
   *    [ ] 结账完成触发
   *
   * @memberof Restaurant
   */
  run() {

    
  }
}

export default Restaurant