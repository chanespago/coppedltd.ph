const showCartMenu = (toggleId, navId) => {
  const toggleCart = document.getElementById(toggleId),
      navCart = document.getElementById(navId)

  if (toggleId && navId) {
    toggleCart.addEventListener('click', () => { 
      navCart.classList.toggle('show')
      });
  }
}

showCartMenu('cart-nav-toggle', 'cart-nav-menu')

const navCartLink = document.querySelectorAll('.nav__link'),
navCartMenu = document.getElementById('cart-nav-menu');

function linkAction() {
navCartMenu.classList.remove('show')
};
navCartLink.forEach(n => n.addEventListener('click', linkAction));


// ADD TO CART FUNCTION

var int_NewItemID = 0;
var tmp_newStr = "";
var totalAmount = 0;
var tmp_newAmount = "";
function addToCart (item) {
  int_NewItemID +=1;

  // CREATE DIV
  var selectDivItem = document.createElement('div');
  selectDivItem.classList.add('cart__box');
  selectDivItem.setAttribute('id',int_NewItemID);

  // CREATE REMOVE BUTTON
  var selectSpanItem = document.createElement('span');
  selectSpanItem.classList.add('txt-dark');
  selectSpanItem.classList.add('remove');
  selectSpanItem.innerHTML = "&times;";
  selectSpanItem.setAttribute('onclick','removeToCart('+int_NewItemID+')');

  // CREATE CART ITEM
  var selectCartDivItem = document.createElement('div');
  selectCartDivItem.classList.add('cart__item');

  // CREATE CART DIV
  var selectImgDivItem = document.createElement('div');
  selectImgDivItem.classList.add('cart__img');

  // CREATE CART IMAGE
  var selectImgItem = document.createElement('img');
  selectImgItem.setAttribute('src',item.children[0].currentSrc);

  // CREATE CART DETAILS
  var selectCartDiv = document.createElement('div');
  selectCartDiv.classList.add('cart__details');

  // CREATE SPAN ITEM NAME
  var selectItemName = document.createElement('span');
  selectItemName.classList.add('txt-dark');
  tmp_newStr = item.children[1].innerText;
  selectItemName.innerHTML = tmp_newStr.replace(/\n/g, ' ');

  // CREATE SPAN SIZE
  var selectItemSize = document.createElement('span');
  selectItemSize.classList.add('txt-dark');
  tmp_newStr = document.getElementById('category_2').value;
  selectItemSize.innerHTML = "SIZE : " + tmp_newStr;

  // CREATE BR
  var selectBR = document.createElement('br');

  // CREATE SPAN ITEM PRICE
  var selectItemPrice = document.createElement('span');
  selectItemPrice.classList.add('txt-dark');
  tmp_newAmount = item.children[2].innerText;
  selectItemPrice.innerHTML = tmp_newAmount;
  tmp_newAmount = parseFloat(tmp_newAmount.replace(/\$/g, ''));
  selectItemPrice.setAttribute('id','itm'+int_NewItemID);
  totalAmount = totalAmount + tmp_newAmount;

  // CREATE SPAN ITEM QTY
  var selectItemQTY = document.createElement('span');
  selectItemQTY.classList.add('txt-dark');
  selectItemQTY.innerHTML = "QTY : 1";


  var cartItems = document.getElementById('cart__side');
  selectCartDiv.append(selectItemName);
  selectCartDiv.append(selectItemSize);
  selectCartDiv.append(selectBR);
  selectCartDiv.append(selectItemPrice);
  selectCartDiv.append(selectItemQTY);

  selectImgDivItem.append(selectImgItem);

  selectCartDivItem.append(selectImgDivItem);
  selectCartDivItem.append(selectCartDiv);

  selectDivItem.append(selectSpanItem);
  selectDivItem.append(selectCartDivItem);

  cartItems.append(selectDivItem);

  document.getElementById('total__items').innerHTML = int_NewItemID;
  document.getElementById('total__amount').innerHTML = parseFloat(totalAmount).toFixed(2);
  document.getElementById('order__total__items').innerHTML = int_NewItemID;
  document.getElementById('order__sub__total').innerHTML = parseFloat(totalAmount).toFixed(2);
  document.getElementById('order__total__amount').innerHTML = parseFloat(totalAmount).toFixed(2);
  
  toggleBag();

}

function removeToCart(item) {
  int_NewItemID -=1;
  toggleBag();
  var newName = 'itm'+item;
  var newPrice = document.getElementById(newName).innerText;
  tmp_newAmount = parseFloat(newPrice.replace(/\$/g, ''));

  totalAmount = totalAmount - tmp_newAmount;

  document.getElementById('total__items').innerHTML = int_NewItemID;
  document.getElementById('total__amount').innerHTML = parseFloat(totalAmount).toFixed(2);
  document.getElementById('order__total__items').innerHTML = int_NewItemID;
  document.getElementById('order__sub__total').innerHTML = parseFloat(totalAmount).toFixed(2);
  document.getElementById('order__total__amount').innerHTML = parseFloat(totalAmount).toFixed(2);
  document.getElementById(item).remove();

  
}

function toggleBag() {

  var baggage = document.getElementById('empty__bag');
  var baggage__info = document.getElementById('occupied__bag');
  var row1 = document.getElementById('row__one');
  var row2 = document.getElementById('row__two');

  if (int_NewItemID === 0) {
    baggage.style.display = 'block';
    baggage__info.style.display = 'none';
    row1.style.display = 'none';
    row2.style.display = 'none';
  }else {
    baggage.style.display = 'none';
    baggage__info.style.display = 'block';
    row1.style.display = 'block';
    row2.style.display = 'block';
  }

}

function testCart(item){
  console.log(item);
}
