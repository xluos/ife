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
      time: 1
    },
    {
      name: '菜品2',
      cost: 5,
      price: 10,
      time: 1.5
    },
    {
      name: '菜品3',
      cost: 5,
      price: 10,
      time: 2
    },
    {
      name: '菜品4',
      cost: 5,
      price: 10,
      time: 2.5
    },
    {
      name: '菜品5',
      cost: 5,
      price: 10,
      time: 1.2
    }
  ]
})


let newCook = new Cook("Cook", 10000);
ifeRestaurant.hire(newCook);
let newWaiter = new Waiter("Tony1", 10000);
ifeRestaurant.hire(newWaiter);
newCook = new Cook("Cook2", 10000);
ifeRestaurant.hire(newCook);
newWaiter = new Waiter("Tony2", 10000);
ifeRestaurant.hire(newWaiter);
newCook = new Cook("Cook3", 10000);
ifeRestaurant.hire(newCook);
newWaiter = new Waiter("Tony3", 10000);
ifeRestaurant.hire(newWaiter);


// ifeRestaurant.run();

export default function() {
  let newcustomer = new Customer()
  ifeRestaurant.customersComing(newcustomer);
}


