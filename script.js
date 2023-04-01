const totalTag = document.querySelector("#total");
const btnPlus = document.querySelectorAll(".plus");
const btnMinus = document.querySelectorAll(".minus");
const btnPrice = document.querySelectorAll(".price");
const btnDelete = document.querySelectorAll(".delete");
const btnLike = document.querySelectorAll(".like");
const btnCheck = document.querySelectorAll(".check");
for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
  btnMinus[i].addEventListener("click", decrement);
  btnLike[i].addEventListener("click", like);
  btnDelete[i].addEventListener("click", del);
  btnCheck[i].addEventListener("click", check);
}
function increment(e) {
  const btn = e.target;
  const divElt = btn.parentElement;
  var quntityTag = divElt.querySelector("p");
  var quntityValue = Number(quntityTag.innerHTML);
  quntityValue++;
  quntityTag.innerHTML = quntityValue;
  const unitePrice = Number(
    divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML
  );
  const tdElt = divElt.parentElement;
  const trElt = tdElt.parentElement;
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue += unitePrice;
  priceTag.innerHTML = priceValue;
}
function decrement(e) {
  const btn = e.target;
  const divElt = btn.parentElement;
  var quntityTag = divElt.querySelector("p");
  var quntityValue = Number(quntityTag.innerHTML);
  if (quntityValue > 0) quntityValue--;
  quntityTag.innerHTML = quntityValue;
  const unitePrice = Number(
    divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML
  );
  const tdElt = divElt.parentElement;
  const trElt = tdElt.parentElement;
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = quntityValue * unitePrice;
  priceTag.innerHTML = priceValue;
}
function like(e) {
  const btn = e.target;
  if (btn.style.color == "red") {
    btn.style.color = "black";
  } else {
    btn.style.color = "red";
  }
}
function del(e) {
  const btn = e.target;
  btn.parentElement.parentElement.parentElement.remove();
  totalTag.innerHTML =
    totalTag.innerHTML -
    btn.parentElement.parentElement.parentElement.querySelector(".price")
      .innerHTML;
}
function check(e) {
  const btn = e.target;
  const tdElt = btn.parentElement;
  const trElt = tdElt.parentElement;
  var minus = trElt.querySelector(".minus");
  var plus = trElt.querySelector(".plus");
  var priceTag = trElt.querySelector(".price");
  const unitePrice = Number(trElt.querySelector(".unitPrice").innerHTML);
  var quntityTag = trElt.querySelector("p");
  var quntityValue = Number(quntityTag.innerHTML);
  var priceValue = Number(priceTag.innerHTML);
  var totalValue = Number(totalTag.innerHTML);
  if (btn.checked) {
    totalValue += priceValue;
    totalTag.innerHTML = totalValue;
    minus.setAttribute("disabled", "");
    plus.setAttribute("disabled", "");
  } else {
    totalValue -= priceValue;
    totalTag.innerHTML = totalValue;
    minus.removeAttribute("disabled");
    plus.removeAttribute("disabled");
  }
}
