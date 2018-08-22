import './index.css'
import main from './components/main.js'

let DF = document.createDocumentFragment()

let title = document.createElement('h1');
title.innerText = '一家餐厅';
DF.appendChild(title)
let canvasBox = document.createElement('div');
canvasBox.id = 'canvas-box';
DF.appendChild(canvasBox)

document.body.appendChild(DF);

if (module.hot) {
  
  module.hot.accept('./components/main.js', function () {
    console.log('Accepting the updated printMe module!');

  })
  
}