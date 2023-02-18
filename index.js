// const review = document.getElementById("rev")
// const tog = document.getElementById("tog")
// const buyFlex = document.getElementById("buy")

// review.addEventListener("click", function(){
//     buyFlex.innerHTML = "I made it";
// })

function buyNow(itemDetails) {
  const itemsInCart = JSON.parse?.(localStorage.getItem("itemsInCart")) || [];
  itemsInCart.push(itemDetails);
  localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
}

function viewCart() {
  const itemsInCart = JSON.parse?.(localStorage.getItem("itemsInCart")) || [];
  console.log(itemsInCart);
}
