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
  constructor(name, wage) {
    super(name, wage);
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
    this.status = 'orderDishes'
  }
  /**
   * 将顾客点的菜单送到餐厅点餐板
   *
   * @memberof Waiter
   */
  setDishes() {
    this.restaurant.addDishes(this.Dishs);
    this.Dishs = [];
    this.status = 'free'
  }

  /**
   * 送餐方法，得到做好的菜品数组，送到相应顾客手里
   *
   * @memberof Waiter
   */
  sendDishes(dishes) {
    dishes = dishes.dishes
    // console.log('TCL: -------------------------------------------');
    // console.log('TCL: Waiter -> sendDishes -> dishes', dishes);
    // console.log('TCL: -------------------------------------------');
    
    dishes.forEach(ele => {
      let id = ele.customerId
        , index = this.restaurant.customerWaitQueue.findIndex(cust => cust.id === id)
        , cust = this.restaurant.customerWaitQueue[index]
      if (index >= 0) {


        // console.log(cust);

        cust.eatDishes.push(ele)
        console.log(`菜品`,ele,`送到顾客`,cust,`手中`);
        console.log(cust.okDishes.length + cust.eatDishes.length , cust.Dishes.length);
        console.log('TCL: -----------------------------------------------------------------------------------------------------------------------------------------------------------------');
        console.log('TCL: Waiter -> sendDishes -> cust.okDishes.length + cust.eatDishes.length , cust.Dishes.length', cust.okDishes.length + cust.eatDishes.length , cust.Dishes.length);
        console.log('TCL: -----------------------------------------------------------------------------------------------------------------------------------------------------------------');
        
        if (cust.okDishes.length + cust.eatDishes.length === cust.Dishes.length) {
          console.log(`顾客`,cust,`所点菜品全部送完`);
          
          this.restaurant.customerEatQueue.push(cust);
          this.restaurant.customerWaitQueue.splice(index, 1)
        }
        cust.eat()
      }
    })
  }
  /**
   * 结账，从顾客哪里获取价钱
   * 
   * @argument {*} cust 顾客
   * @memberof Waiter
   */
  pay(cust) {
    this.restaurant.cash += cust.pay()
    let index = this.restaurant.customerEatQueue.indexOf(cust)
    this.restaurant.customerEatQueue.splice(index,1)
    this.restaurant.seats ++;
  }
}

export default Waiter