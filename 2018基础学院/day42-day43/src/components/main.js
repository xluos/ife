import Dish from './dish.js'                //菜品
import Cook from './cook.js'                //厨师
import Waiter from './waiter.js'            //服务员
import Customer from './customer.js'        //顾客
import Restaurant from './restaurant.js'    //餐厅

let ifeRestaurant = new Restaurant({
  cash: 10000,
  seats: 20,
  staff: []
})

console.log(ifeRestaurant);

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);


console.log(ifeRestaurant.staffs);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staffs);