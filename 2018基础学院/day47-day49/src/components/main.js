import Dish from './dish'                //菜品
import Cook from './cook'                //厨师
import Waiter from './waiter'            //服务员
import Customer from './customer'        //顾客
import Restaurant from './restaurant'    //餐厅
import Delay from './delay'

let ifeRestaurant = new Restaurant({
  cash: 10000,
  seats: 20,
  menu: [
    {
      name: '菜品1',
      cost: 5,
      price: 10,
      time: 6
    },
    {
      name: '菜品2',
      cost: 5,
      price: 10,
      time: 6
    },
    {
      name: '菜品3',
      cost: 5,
      price: 10,
      time: 6
    },
    {
      name: '菜品4',
      cost: 5,
      price: 10,
      time: 6
    },
    {
      name: '菜品5',
      cost: 5,
      price: 10,
      time: 6
    }
  ]
})


let newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);
let newWaiter = new Waiter("Tony2", 10000);
ifeRestaurant.hire(newWaiter);

let newcustomer = new Customer()

// ifeRestaurant.customersComing(newcustomer);


