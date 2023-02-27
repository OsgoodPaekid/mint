const oze = localStorage.getItem("detail");
const pricee = localStorage.getItem("amount");

console.log(oze)
// function render(name,prize){
//     document.getElementById("descript").textContent = oze
//     document.getElementById("price").textContent = pricee
// }


function render(name, prize){
    document.getElementById("descript").textContent = name
    document.getElementById("price").textContent = prize
    document.getElementById("subtotal").textContent = prize

}

render(oze, pricee)

const flatRate = document.getElementById("flat-rate").textContent;
const subTotal = document.getElementById("subtotal").textContent;
const sumTotal = document.getElementById("sum-total");


function totalPrice(sub, flat){
    const total = parseFloat(sub) + parseFloat(flat);
    sumTotal.textContent = total;
}

totalPrice(parseFloat(flatRate), parseFloat(subTotal))
