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
  constructor({cash=0, seats=0, waiterQueue=[], cookQueue=[], customerQueue=[], menu }) {
    if(!Restaurant.created) {
      
      this.cash = cash;
      this.seats = seats;
      this.waiterQueue = waiterQueue;
      this.cookQueue = cookQueue;
      this.customerQueue = customerQueue;
      this.menu = menu
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
   * 设置菜单
   *
   * @param {*} data 菜单数据
   * @memberof Restaurant
   */
  setMenu(data) {
    this.menu = data;
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
    console.log(staff);
    
    return this.waiterQueue.push(staff);
  }
  /**
   * 解雇职员
   *
   * @param {Staff} staff 职员
   * @returns 解雇结果
   * @memberof Restaurant
   */
  fire(staff) {
    let index = this.waiterQueue.findIndex((e)=>{
      return e.id === staff.id;
    })
    return this.staffs.splice(index,1);
  }
  /**
   * 顾客来到，餐厅启动各个成员运作
   *
   * @param {*} cust
   * @memberof Restaurant
   */
  customersComing(cust) {
    cust.setRestaurant(this);
    this.customerQueue.push(cust);
    this.run();
  }

  /**
   * 餐厅运行
   *
   * @memberof Restaurant
   */
  run() {
    let cust
    while(this.customerQueue.length > 0) {
      cust = this.customerQueue.pop();
      let waiter = this.waiterQueue.pop();
      waiter.finishWork(cust.orderDishes())
      let cook = this.waiterQueue.pop();
      waiter.toCook(cook);

    }
  }
}

export default Restaurant