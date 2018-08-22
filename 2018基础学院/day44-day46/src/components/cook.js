// 厨师类
// 继承自员工

import Staff from './staff.js'

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
  /**
   * 完成工作
   *
   * @memberof Waiter
   */
  finishWork(dish) {
    console.log(`完成${JSON.stringify(dish)}`);
    
  }
}

export default Cook