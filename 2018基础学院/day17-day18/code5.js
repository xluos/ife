let h = new Date().getHours();

if(h>=5&&h<12) {
  alert("早上好");
} else if(h>=12&&h<14) {
  alert("中午好")
} else if(h>=14&&h<19) {
  alert("下上好")
} else if(h>=19&&h<5) {
  alert("晚上好")
}