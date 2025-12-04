let cart=JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer=document.getElementById('cart-container');
const showGrandTotal=document.getElementById("grandTotal");

// when cart is empty
if(cart.length===0){
cartContainer.innerHTML="<p>Cart is empty.</p>";
showGrandTotal.textContent="R0";
}

// function to display car items
 function displayCart(){
 cartContainer.innerHTML="";
 let grandTotal=0;
cart.forEach(item=>{
const total=item.price*item.qty;
grandTotal+=total;

//create card item
let div=document.createElement("div");
div.classList.add("cart-item");
div.innerHTML=`
<img src="${item.image} alt="${item.name}"/>
<h3>${item.name}</h3>
<p>price:${item.price}</p>
<p>qty:${item.qty}</p>
<p>Total:R${total}</p>
<button class="remove-btn" data-id=${item.id}>Remove</button>
`;
cartContainer.appendChild(div);
});
showGrandTotal.textContent="R"+grandTotal;

setupRemoveButtons();
}

function setupRemoveButtons(){
let removeBtns=document.querySelectorAll('.remove-btn');
removeBtns.forEach(btn=>{
btn.addEventListener('click',()=>{
const id=parseInt(btn.dataset.id);

cart=cart.filter(item=>item.id !== id);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();
});    
});
}
displayCart();