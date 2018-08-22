// 顾客类
import UUID from 'uuid/v4'
/**
 * 顾客类
 *
 * @class Customer
 */
class Customer {
  constructor() {
    // 生成每个顾客独一无二的UUID
    this.id = UUID();
  }
  /**
   * 点菜
   *
   * @memberof Customer
   */
  orderDishes() {

  }
  /**
   * 吃菜
   *
   * @memberof Customer
   */
  eat() {

  }
}

export default Customer