// 服务员 类
// 继承自员工

import Staff from './staff'
import Delay from './delay'
/**
 * 服务员类
 *
 * @class Waiter
 * @extends {Staff} 继承员工类
 */
class Waiter extends Staff {
  constructor(name,wage) {
    super(name,wage);
    this.Dishs = []
  }
  profession = 'Waiter'
  /**
   * 点餐方法，从顾客对象获取顾客的点餐
   * @argument {Constructor} constructor 顾客
   * @memberof Waiter
   */
  orderDishes(constructor) {
    this.Dishs = constructor.orderDishes();
  }
  /**
   * 将顾客点的菜单送到餐厅点餐板
   *
   * @memberof Waiter
   */
  setDishes() {
    this.restaurant.addDishes(this.Dishs);
  }

  /**
   * 送餐方法，得到做好的菜品数组，送到相应顾客手里
   *
   * @memberof Waiter
   */
  sendDishes(dishes) {
    dishes.forEach(element => {

    });
  }
}

export default Waiter