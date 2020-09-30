window.addEventListener('keydown', function (e) {
   const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
   key.classList.add('animate');
    if (!audio) return;
   audio.currentTime = 0;
   audio.play();
});


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('animate');
}













// const bmi = function(height, weight){
//     return weight / height**2;
// }

// const result = bmi(4, 7);

// console.log(result);

// const total = function(result, age){
//     return result * age
// }

// const final = total(result, 25)
// console.log(final)


// const bill = function (product, tax){
//     let total =  0;
//     for(let i = 0; i < product.length; i++){
//         total += product[i] + product[i] * tax;
//     }
//     return total
// }

// console.log(bill([10, 15, 30], 0.2));


// const name = "samuel";

// const show = name.toUpperCase('jj')
// console.log(show)

// const myFunc = (call) => {
//     let val = 40;
//     call(val);
// }

// myFunc( function(value){
//     console.log(value)
// })

// const people = ['matt', 'thomas', 'james', 'peter', 'angella'];

// people.forEach((person, apex) =>{
//     console.log(person, apex)
// })
 
// const calc = (first, second) => {
//     return Math.min(first, second);
// }

// let total = calc(220, 55);

// console.log(total)


// const recurse = (N) =>{
//     if(N % 2 === 0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// recurse(4) 
// const recurse = (N) =>{
//     let even = ''
//     if(0 === even){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// recurse(4)
// class App extends React.component {
//     render() {
//         return(
//             <div className="app-content">
//                 <h1>Hello, i'm learning to code</h1>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App />, document.getElementById('react'))

// let score1 = 200;
// let score2 = score1;

// score1 = 230

// console.log(score2)













































































// let arrayExample = [, ];
// for (let i = 0; i <= 8; i++){
//     let hash = "#"
//     arrayExample.push(i)
//     console.log(arrayExample)
// }

// var setColor = document.getElementsByTagName('h1');

// console.log(setColor)

// const sam = (height, weight, age)=>{
//     let power = height * height;
//      Math.sqrt(power)
//     let result = (power / weight) + age;
//     return result
// }

// console.log(sam(22, 14, 52));

// function randomPointOnCircle(radius) { 
//     let angle = Math.random() * 2 * Math.PI;
//     return {x: radius * Math.cos(angle),
//     y: radius * Math.sin(angle)};
//     }
//     console.log(randomPointOnCircle(2)); 

// const btn_blue = document.querySelector('#white');

// btn_blue.addEventListener('click', blueChange);

// function blueChange (e){
//     document.querySelector(':root').style.backgroundColor = 'rgb(255, 255, 255)'
//     document.querySelectorAll('body').style.color = 'black'
// }


// const btn_teal = document.querySelector('#teal');

// btn_teal.addEventListener('click', tealChange);

// function tealChange (e){
//     document.querySelector(':root').style.backgroundColor = 'rgb(1, 80, 80)'
// }

// const menu = document.querySelector('.nav-menu')

// menu.addEventListener('click', whenClicked)

// function whenClicked (e){

//     if(whenClicked = true){
//     document.querySelector('.line-1').style.transform = 'translateY(10px) rotate(-45deg)'
//     document.querySelector('.line-2').style.opacity = '0'
//     document.querySelector('.line-3').style.transform = 'translateY(-7px) rotate(45deg)'
//     document.querySelector(':root').style.backgroundColor = 'rgb(65, 64, 64)'
//     document.querySelector('body').style.opacity = '0.4'
//     }else{
        
//     }
// }