// 顾客类
import UUID from 'uuid/v4'
import Dish from './dish'
import Delay from './delay'
/**
 * 顾客类
 *
 * @class Customer
 */
class Customer {
  constructor() {
    // 生成每个顾客独一无二的UUID
    this.id = UUID();
    this.eatDishes = []
    this.okDishes = []
    this.Dishes = []
    this.states = true
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
    let menu = this.restaurant.getMenu()
      , menuLen = menu.length
      , len = Math.floor(Math.random() * menuLen / 2) + 1
      , dishes = []
      , index
      , dish
    for(let i = 0; i < len; i++) {
      index = Math.floor(Math.random() * menuLen)
      // console.log(menu[index]);
      
      dish = new Dish(menu[index])
      dish.setCustomer(this.id)
      dishes.push(dish)
    }
    this.Dishes = dishes
    return dishes
  }
  /**
   * 顾客通过app自己点餐
   *
   * @memberof Customer
   */
  sendDishes() {

    this.restaurant.addDishes(this.orderDishes())
  }
  /**
   * 吃菜
   *
   * @memberof Customer
   */
  eat() {
    if(this.states && this.eatDishes.length > 0) {
      this.states = false
      let eatDishe = this.eatDishes.pop()
      console.log(this,'正在吃',eatDishe);
      
      Delay(3).then(()=>{
        this.okDishes.push(eatDishe)
        this.states = true
        console.log(this,'吃完了',eatDishe);        
        this.restaurant.run();
        this.eat()
      })
    }
  }
  /**
   * 付款
   *
   * @memberof Customer
   */
  pay() {
    let sum = 0
    this.Dishes.forEach(x=>sum += x.price);
    return sum;
  }
}

export default Customer