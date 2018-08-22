// 服务员 类
// 继承自员工

import Staff from './staff.js'

/**
 * 服务员类
 *
 * @class Waiter
 * @extends {Staff} 继承员工类
 */
class Waiter extends Staff {
  constructor(name,wage) {
    super(name,wage);
  }
  /**
   * 完成工作
   *
   * @memberof Waiter
   */
  finishWork() {
    if(Array.isArray(arguments[0])) {
      console.log('点菜');
      
    } else {
      console.log(`给${arguments[0]}顾客送菜`);
    }
  }
}

export default Waiter