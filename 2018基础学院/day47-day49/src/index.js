import './index.css'
import main from './components/main'

let DF = document.createDocumentFragment()

let title = document.createElement('h1');
title.innerText = '一家餐厅-命令行版';
DF.appendChild(title)
let canvasBox = document.createElement('div');
canvasBox.id = 'canvas-box';
DF.appendChild(canvasBox)
let btn = document.createElement('button')
btn.addEventListener('click',main)
btn.innerText = '顾客到来'
DF.appendChild(btn)
document.body.appendChild(DF);

if (module.hot) {
  // module.hot.accept();
  module.hot.accept('./components/main.js', function () {
    console.log('Accepting the updated printMe module!');
  })
  
}