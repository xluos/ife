function $(id) {
  return document.getElementById(id);
}

const REGION = $('region-radio-wrapper')
const PRODUCT = $('product-radio-wrapper')
const TABLE = $('table')
const TABLEBOX = $('card-main')
const BARBOX = $('bar-box')
const LINEBOX = $('line-box')

function getCheckBox(e, query) {
  return e.querySelectorAll(query);
}