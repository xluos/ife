import './index.css'
import main from './components/main'

import { Scene, Sprite } from 'spritejs'


let DF = document.createDocumentFragment()

let title = document.createElement('h1');
title.innerText = '一家餐厅-命令行版';
DF.appendChild(title)
let canvasBox = document.createElement('div');
canvasBox.id = 'canvas-box';
DF.appendChild(canvasBox)
let btn = document.createElement('button')
btn.addEventListener('click', main)
btn.innerText = '顾客到来'
DF.appendChild(btn)
document.body.appendChild(DF);

const scene = new Scene('#canvas-box', {
  viewport: ['auto', 'auto'],
  resolution: [1920, 1280],
});
const layer = scene.layer();

const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png');

robot.attr({
  anchor: [0, 0.5],
  pos: [0, 0],
});

robot.animate([
  { pos: [0, 0] },
  { pos: [0, 300] },
  { pos: [1280, 300] },
  { pos: [1280, 100] },
], {
    duration: 5000,
    iterations: Infinity,
    direction: 'alternate',
  });

layer.append(robot);
const box1 = new Sprite({
  size: [100, 100],
  pos: [100, 100],
  border: [2, '#f77'],
});
const box2 = new Sprite({
  size: [200, 200],
  pos: [300, 100],
  border: [4, '#7c7'],
  borderRadius: 20,
});
const box3 = new Sprite({
  size: [300, 300],
  pos: [600, 100],
  border: [6, '#77c'],
  borderRadius: 50,
});
const box4 = new Sprite({
  size: [400, 400],
  pos: [1000, 100],
  border: [8, '#c7c'],
  borderRadius: 200,
});
layer.append(box1, box2, box3, box4);
if (module.hot) {
  // module.hot.accept();
  module.hot.accept('./components/main.js', function () {
    console.log('Accepting the updated printMe module!');
  })

}