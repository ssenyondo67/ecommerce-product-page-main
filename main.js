let menu =document.getElementById('menu');
let menuClose =document.getElementById('menuClose');
let navMenu =document.getElementById('navMenu');
let cartIcon =document.getElementById('cartIcon');
let cart =document.getElementById('cart');
let close =document.getElementById('displayClose');
let displayImage=document.getElementById('imageDisplay2');
let imageShow =document.getElementById('imageShow1');
let imageShow2 =document.getElementById('imageShow2');
let add=document.getElementById('plus');
let subtract =document.getElementById('minus');
let amount =document.getElementById('number');
let itemHolder=document.getElementById('ItemHolder');
let checkout=document.getElementById('checkout');
let itemNumber=document.getElementById('itemNumber');

// -------------initial assignment----------
itemHolder.innerHTML='Your card is empty';
checkout.style.display='none';
amount.value=0




menuClose.addEventListener('click',()=>{
    navMenu.style.display='none';
})


menu.addEventListener('click',()=>{
     navMenu.style.display='flex';
})

cartIcon.addEventListener('click',()=>{
    cart.classList.toggle('show__cart');

})
close.addEventListener('click',()=>{
    
   displayImage.classList.toggle('image__hide')
});

imageShow.addEventListener('click',()=>{
    displayImage.classList.toggle('image__hide')
 });

add.addEventListener('click',()=>{

   
    if(amount.value){
     amount.value = parseInt(amount.value) +1
    }else{
        amount.value = 1
    }
 });
 subtract.addEventListener('click',()=>{
    if(amount.value >= 1){
     amount.value = parseInt(amount.value) -1
    }else{
        amount.value = 0
    }
 });
function showThis(id){
    let smallImages =document.getElementsByClassName('image--small1');
    removeClass(smallImages,'image__gray')
    let img =document.getElementById(id);
    
    if(id=='imageProduct1'){
        imageShow.src='./images/image-product-1.jpg';
        img.classList.add('image__gray');
        
    }
    if(id=='imageProduct2'){
        imageShow.src='./images/image-product-2.jpg'
        img.classList.add('image__gray');
        
    }
    if(id=='imageProduct3'){
        imageShow.src='./images/image-product-3.jpg';
        img.classList.add('image__gray');
       
    }
    if(id=='imageProduct4'){
        imageShow.src='./images/image-product-4.jpg';
        img.classList.add('image__gray');
        
    }
}


function displayThis(id){
    let smallImages =document.getElementsByClassName('image--small2');
    removeClass(smallImages,'image__gray')
    let img =document.getElementById(id);
    if(id=='imgProduct1'){
       
        imageShow2.src='./images/image-product-1.jpg';
        img.classList.add('image__gray');

    }
    if(id=='imgProduct2'){
        
        imageShow2.src='./images/image-product-2.jpg';
        img.classList.add('image__gray');
    }
    if(id=='imgProduct3'){
       
        imageShow2.src='./images/image-product-3.jpg';
        img.classList.add('image__gray');
    }
    if(id=='imgProduct4'){
        
        imageShow2.src='./images/image-product-4.jpg';
        img.classList.add('image__gray');
    }
}

function removeClass(elements,className){
    for(var i=0;i < elements.length;i++){
      if( elements[i].classList.contains(className)){
        elements[i].classList.remove(className);
      }
    }
}

function previous(){
   
    var img;
    let smallImages =document.getElementsByClassName('image--small2');
    for(var i=0;i<smallImages.length;i++){
        if(smallImages[i].classList.contains('image__gray')){
            img=smallImages[i];
           img.classList.remove('image__gray');
        }
    }
    if(img.id=='imgProduct1'){
        let previous=document.getElementById('imgProduct4');
        imageShow2.src='./images/image-product-4.jpg';
        previous.classList.add('image__gray');

    }
    if(img.id=='imgProduct2'){
        let previous=document.getElementById('imgProduct1');
        imageShow2.src='./images/image-product-1.jpg';
        previous.classList.add('image__gray');

    }
    if(img.id=='imgProduct3'){
        let previous=document.getElementById('imgProduct2');
        imageShow2.src='./images/image-product-2.jpg';
        previous.classList.add('image__gray');

    }
    if(img.id=='imgProduct4'){
        let previous=document.getElementById('imgProduct3');
        imageShow2.src='./images/image-product-3.jpg';
        previous.classList.add('image__gray');

    }
}


function next(){
   
    var img;
    let smallImages =document.getElementsByClassName('image--small2');
    for(var i=0;i<smallImages.length;i++){
        if(smallImages[i].classList.contains('image__gray')){
            img=smallImages[i];
           img.classList.remove('image__gray');
        }
    }
    if(img.id=='imgProduct1'){
        let previous=document.getElementById('imgProduct2');
        imageShow2.src='./images/image-product-2.jpg';
        previous.classList.add('image__gray');

    }
    if(img.id=='imgProduct2'){
        let previous=document.getElementById('imgProduct3');
        imageShow2.src='./images/image-product-3.jpg';
        previous.classList.add('image__gray');

    }
    if(img.id=='imgProduct3'){
        let previous=document.getElementById('imgProduct4');
        imageShow2.src='./images/image-product-4.jpg';
        previous.classList.add('image__gray');

    }
    if(img.id=='imgProduct4'){
        let previous=document.getElementById('imgProduct1');
        imageShow2.src='./images/image-product-1.jpg';
        previous.classList.add('image__gray');

    }
}

function newElement(element) {
    object=document.createElement(element);
    return object;
}

function addToCart(){
   
    var item =newElement('div')
    
    item.classList.add('cart-item','flex__item','item1');
    var col2=newElement('div');
    col2.classList.add('col-2')
    var img=newElement('img');
    img.src=imageShow2.src;
    img.classList.add('item--image');
    col2.insertAdjacentElement('beforeend',img);
    item.insertAdjacentElement('beforeend',col2);
    var col7=newElement('div');
    col7.classList.add('item--text','col-7')
    var par=newElement('p');
    par.classList.add('item-name');
    par.innerHTML=document.getElementById('productName').innerHTML;
    col7.insertAdjacentElement('beforeend',par);
    var par2=newElement('p');
    var span1=newElement('span')
    span1.classList.add('item-price');
    span1.innerHTML=document.getElementById('newprice').innerHTML + 'X ';
    par2.insertAdjacentElement('beforeend',span1);
    var span2=newElement('span');
    span2.classList.add('item-quantity');
    span2.innerHTML=amount.value;
    itemNumber.innerHTML=amount.value;
    itemNumber.classList.add('number')
    par2.insertAdjacentElement('beforeend',span2);
    var span3=newElement('span');
    span3.classList.add('total','text__large');
    span3.id='total';
    span3.innerHTML=' $'+ parseInt(document.getElementById('newprice').innerHTML.match(/\d+/)[0])*parseInt(amount.value);
    par2.insertAdjacentElement('beforeend', span3);
    col7.insertAdjacentElement('beforeend',par2);
    item.insertAdjacentElement('beforeend',col7);
    var col3=newElement('div');
    col3.classList.add('col-2')
    var img2=newElement('img');
    img2.src="./images/icon-delete.svg";
    img2.classList.add('delete-image');
    img2.id='item1';
    img2.setAttribute('onClick','deleteFrom(this.id)')
    col3.insertAdjacentElement('beforeend',img2);
    item.insertAdjacentElement('beforeend',col3);
    itemHolder.appendChild(item);
    
    checkout.style.display='flex';

}

function deleteFrom(id){
    let element =document.getElementsByClassName(id);
    element[0].style.display='none'
    checkout.style.display='none';
    itemNumber.innerHTML='';
    itemNumber.classList.remove('number')
    
}

function select(id){
    let select =document.getElementById(id);
    let selected =document.getElementsByClassName('selected');
    selected.classList.remove('selected');
    select.classList.add('selected');
}

if(itemHolder.hasChildNodes){
    // itemHolder.childNodes.
}