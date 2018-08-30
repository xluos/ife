// 菜品类
import Delay from './delay'
/**
 * 菜品类
 *
 * @class Dish
 */
class Dish {
  constructor({name, cost, price, time}) {
    this.name = name;
    this.cost = cost;
    this.price = price;
    this.time = time;
  }
  /**
   * 设置当前这道菜所属的顾客
   *
   * @memberof Dish
   */
  setCustomer(id) {
    this.customerId = id;
  }
}

export default Dish