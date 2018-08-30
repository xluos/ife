// 厨师类
// 继承自员工

import Staff from './staff'
import Delay from './delay'

/**
 * 厨师类
 *
 * @class Cook
 * @extends {Staff} 继承自员工
 */
class Cook extends Staff {


  constructor(name,wage) {
    super(name,wage);
  }
  profession = "Cook"
  /**
   * 完成工作
   *
   * @memberof Waiter
   */
  setDishesOk(dishe) {
    this.restaurant.DishesOK.push(dishe)
  }
}

export default Cook