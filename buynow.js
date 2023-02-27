const buy = document.getElementById("buy");
const oz = document.getElementById("oz").innerText;
const price = document.getElementById("price").innerText;
// const num= document.querySelector('.number');


buy.addEventListener("click", function(e){
    num.textContent= 1;
    e.preventDefault()

    localStorage.setItem("menu", oz)
    localStorage.setItem("money", price)

     window.location.href = "information.html"

    
})