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
  setRestaurant(rest) {
    this.restaurant = rest;
  }
  /**
   * 点菜
   *
   * @memberof Customer
   */
  orderDishes() {
    return [this.restaurant.getMenu()[0]]
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