const navmenu=document.querySelector('.navbar');
const hamburgerIcon=document.getElementById("hamburger");
hamburgerIcon.addEventListener('click',()=>{
navmenu.classList.toggle('show');
});

const products=[
    { 
       id:1, 
       name:"Bacon Kota",
       price:"40",
       picture:"Order3.png",
       qty:"0" 
    },

    { 
       id:2, 
       name:"City Kota",
       price:"55",
       picture:"Kota-cover.png",
       qty:"0" 
    },

    { 
       id:3, 
       name:"Bunny Kota",
       price:"60",
       picture:"Order1.png",
       qty:"0" 
    },

    { 
       id:4, 
       name:"Town Kota",
       price:"40",
       picture:"Order2.png",
       qty:"0" 
    },

    { 
       id:5, 
       name:"Fancy Kota",
       price:"55",
       picture:"Order5.png",
       qty:"0" 
    },

    { 
       id:6, 
       name:"Standard Kota",
       price:"65",
       picture:"order6.png",
       qty:"0" 
    },
];

const productsCard=document.querySelectorAll('.order');
productsCard.forEach(card=>{
    const id =parseInt(card.dataset.id);
    const product=products.find(p=>p.id===id);

    const qtydecrease=card.querySelector('.decrease');
    const qtyincrease=card.querySelector('.increase');
    const qtyspan=card.querySelector('.qty');

    qtydecrease.addEventListener('click',()=>{
    if(product.qty>1)
    {
     product.qty--;
     qtyspan.textContent=product.qty;   
    }        
    });

    qtyincrease.addEventListener('click',()=>{
     product.qty++;
     qtyspan.textContent=product.qty;
    });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderButtons = document.querySelectorAll('.addToCart-btn');

orderButtons.forEach(button => {
  button.addEventListener('click', () => {

    // 1. Find the kota card
    const card = button.closest('.order');

    // 2. Get product ID and product object
    const id = parseInt(card.dataset.id);
    const product = products.find(p => p.id === id);

    // 3. Read quantity
    const qtySpan = card.querySelector('.qty');
    const quantity = parseInt(qtySpan.textContent);

    // 4. Prevent empty order
    if (quantity === 0) {
      alert("Please add quantity first.");
      return;
    }

    // 5. Add to cart (update or create)
    const existing = cart.find(item => item.id === id);

    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: quantity
      });
    }

    // 6. Reset quantity after adding
    product.qty = 0;
    qtySpan.textContent = 0;

    // 7. Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
  });
});
