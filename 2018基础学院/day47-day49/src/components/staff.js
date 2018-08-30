// 员工类

/**
 * 员工类
 *
 * @class Staff
 */
class Staff {
  /**
   * 员工类 构造函数
   * @param {*} name 员工姓名
   * @param {*} wage 员工工资
   * @memberof Staff
   */
  constructor(name,wage) {
    this.name = name;
    this.wage = wage;
    this.status = 'free'
  }
  /**
   * 设置员工id
   *
   * @param {*} uuid
   * @memberof Staff
   */
  setId(uuid) {
    this.id = uuid;
  }
  /**
   * 设置工作人员对应的餐厅
   *
   * @param {*} rest 餐厅实例
   * @memberof Staff
   */
  setRestaurant(rest) {
    this.restaurant = rest;
  }
  /**
   * 完成工作
   *
   * @memberof Staff
   */
  finishWork() {

  }
}

export default Staff