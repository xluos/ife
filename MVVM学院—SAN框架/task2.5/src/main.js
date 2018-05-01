import san from "san";
import { router } from "san-router";
import INPUT from "./view/input.san";
import App from "./view/App.san";


router.add({ rule: '/', Component: App, target: '#app' });
router.start();
console.log('Server starts.');

// if (module.hot) {
//     module.hot.accept()
// }