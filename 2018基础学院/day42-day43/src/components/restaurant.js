// 餐厅类


/**
 * 餐厅类
 *
 * @class Restaurant
 */
class Restaurant {
  /**
   * 构造函数
   * @param {*} arguments
   * @memberof Restaurant
   */
  constructor({cash=0, seats=0, staffs=[]}) {
    this.cash = cash;
    this.seats = seats;
    this.staffs = staffs;
    this.staffId = 100001;
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
    
    return this.staffs.push(staff);
  }
  /**
   * 解雇职员
   *
   * @param {Staff} staff 职员
   * @returns 解雇结果
   * @memberof Restaurant
   */
  fire(staff) {
    let index = this.staffs.findIndex((e)=>{
      return e.id === staff.id;
    })
    return this.staffs.splice(index,1);
  }
  
}

export default Restaurant