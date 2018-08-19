function $(id) {
  return document.getElementById(id);
}

const REGION = $('region-radio-wrapper')
const PRODUCT = $('product-radio-wrapper')
const TABLE = $('table')
const TABLEBOX = $('card-main')
const BARBOX = $('bar-box')
const LINEBOX = $('line-box')
// const EDITBOX = $('edit')
// const EDITINPUT = EDITBOX.getElementsByTagName('input')[0]

function getCheckBox(e, query) {
  return e.querySelectorAll(query);
}