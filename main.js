var tablo = document.getElementById("value");
var sum = document.getElementById("sum");
var minus = document.getElementById("minus");
var div = document.getElementById("division");
var mult = document.getElementById("multiply");
var eql = document.getElementById("equally");
var clr = document.getElementById("clear");
var pnt = document.getElementById("point");
var on_of = document.getElementById("on-of");
var list_btn = document.querySelectorAll("button");
var btn_array = Array.prototype.slice.call(list_btn);
var ext = document.getElementById("extent");

function sort_all_btn(list){
  var sort_list = list;
  for(let i=0;i<sort_list.length; i++){
    if (sort_list[i].id === "on-of" || sort_list[i].id === "null"){
      sort_list.splice(i,1);
    }
  }
  return sort_list;
}
var all_btn = sort_all_btn(btn_array);

var if_first = true;

var b_1 = document.getElementById("1");
var b_2 = document.getElementById("2");
var b_3 = document.getElementById("3");
var b_4 = document.getElementById("4");
var b_5 = document.getElementById("5");
var b_6 = document.getElementById("6");
var b_7 = document.getElementById("7");
var b_8 = document.getElementById("8");
var b_9 = document.getElementById("9");
var b_0 = document.getElementById("0");
function add_to_tablo(e){
  var value = e.target.textContent;
  if (value === "+" || value === "-" || value === "/" || value === "*" || value === "**"){
    value = " " + String(value) + " ";
  }
  if (if_first){
    tablo.textContent = String(value);
    if_first = false;
  }
  else{
    var before_value = tablo.textContent;
    var after_falue = before_value + value;
    tablo.textContent = after_falue;
  }
}
b_1.onclick = add_to_tablo;
b_2.onclick = add_to_tablo;
b_3.onclick = add_to_tablo;
b_4.onclick = add_to_tablo;
b_5.onclick = add_to_tablo;
b_6.onclick = add_to_tablo;
b_7.onclick = add_to_tablo;
b_8.onclick = add_to_tablo;
b_9.onclick = add_to_tablo;
b_0.onclick = add_to_tablo;
sum.onclick = add_to_tablo;
minus.onclick = add_to_tablo;
div.onclick = add_to_tablo;
mult.onclick = add_to_tablo; 
pnt.onclick = add_to_tablo;
ext.onclick = add_to_tablo;
function get_answer(e){
  if_first = true;
  var tablo_string = tablo.textContent;
  tablo.textContent = eval(tablo_string);
}
eql.onclick = get_answer;
on_of.onclick = function(){
  if_first = true;
  if(on_of.textContent === "Off"){
    for(let i=0; i<all_btn.length; i++){
      all_btn[i].setAttribute('disabled', true);
  }
  on_of.textContent = "On";
  tablo.textContent = " ";
}
  else{
    on_of.textContent = "Off";
    for(let i=0; i<all_btn.length; i++){
      all_btn[i].removeAttribute('disabled');
  }
  tablo.textContent = 0;
  }
}
clr.onclick = function(){
  if_first = true;
  tablo.textContent = 0;
}









