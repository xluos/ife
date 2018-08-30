// 顾客类
import UUID from 'uuid/v4'
import Dish from './dish'
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
    this.Dishes = []
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
   * 吃菜
   *
   * @memberof Customer
   */
  eat() {

  }
}

export default Customer