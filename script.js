// let b1=document.querySelector(".b1");
// let b2=document.querySelector(".b2");
// let b3=document.querySelector(".b3");
// let b4=document.querySelector(".b4");
// let t=document.querySelector("#txt")
// let t1=document.querySelector("#txt1");
// let submit = document.querySelector(".submit");
// let output = document.querySelector("#output");

// submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     output.textContent = "Product name: " + t.value;
//     out.textContent="Amount: "+t1.value;
// });

// b1.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "red";
// });
// b2.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "blue";
// });
// b3.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "green";
// });
// b4.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "yellow";
// });

// // let r=document.querySelector(".random");
// // r.addEventListener("click",()=>{
// //     document.body.style.backgroundColor= ;
// // })
// // function changeColor() {
// //     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// //     document.body.style.backgroundColor = randomColor;
// // }

// const btn=document.querySelector(".magic");
// btn.addEventListener("click",function(){
//   changecolor();
//   setInterval(changecolor,100);
// });
// function changecolor(){
//     const r=Math.floor(Math.random()*256);
//     const g=Math.floor(Math.random()*256);
//     const b=Math.floor(Math.random()*256);
//     document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
// };

// let total = 0;
// function addExpense() {
//     const desc = document.getElementById("desc").value;
//     const amount = parseFloat(document.getElementById("amount").value);
//     if (!desc || isNaN(amount)) {
//         alert("Please enter valid description and amount");
//         return;
//     }
//     const table = document.getElementById("expenseTable");
//     const row = table.insertRow();
//     row.insertCell(0).innerText = desc;
//     row.insertCell(1).innerText = "₹" + amount.toFixed(2);
//     total += amount;
//     document.getElementById("desc").value = "";
//     document.getElementById("amount").value = "";

// }
const nameInput=document.getElementById("name");
const amountInput=document.getElementById("amount");
const addBtn=document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total=document.getElementById("total");
let totalAmount=0;
addBtn.addEventListener("click",addExpense);
  function addExpense(){
    const expenseName = nameInput.value;
    const expenseAmount = Number(amountInput.value);

    if(expenseName==="" || expenseAmount<=0){
        alert("Please enter valid data");
        return;
    }
    totalAmount += expenseAmount;
    total.textContent = totalAmount;
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${expenseName}</span>
        <span>₹${expenseAmount}</span>
      
    `;
    expenseList.appendChild(li);
    nameInput.value=" ";
    amountInput.value=" ";
}