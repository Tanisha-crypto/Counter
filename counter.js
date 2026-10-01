const count = document.querySelector('.count')
const decreaseButton = document.querySelector('.decrease')
const resetButton = document.querySelector('.Reset')
const increaseButton = document.querySelector('.increase')

let a =0;
decreaseButton.addEventListener('click',function(){
    a--;
    count.textContent = a
})
resetButton.addEventListener('click',function(){
    a=0;
    count.textContent = a
})
increaseButton.addEventListener('click',function(){
    a++;
    count.textContent = a
})