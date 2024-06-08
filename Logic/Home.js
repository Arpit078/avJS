console.log("logic file of home js")
const increaseBtn = document.getElementById("increaseBtn")
let count = 0
const countDiv  = document.getElementById("counter")
increaseBtn.addEventListener('click',()=>{
    count++;
    countDiv.innerText = count;
})