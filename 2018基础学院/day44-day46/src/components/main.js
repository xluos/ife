import Dish from './dish.js'                //菜品
import Cook from './cook.js'                //厨师
import Waiter from './waiter.js'            //服务员
import Customer from './customer.js'        //顾客
import Restaurant from './restaurant.js'    //餐厅

let ifeRestaurant = new Restaurant({
  cash: 10000,
  seats: 20,
  menu: [
    {
      name: '菜品1',
      cost: 5,
      price: 10
    }
  ]
})


let newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);
let newWaiter = new Waiter("Tony2", 10000);
ifeRestaurant.hire(newWaiter);

let newcustomer = new Customer()

ifeRestaurant.customersComing(newcustomer);
