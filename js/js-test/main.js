/*//산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5) //나머지 연산자 % : 나누고 나머지를 출력*/

/*//할당 연산자(assignment operator)

let a = 2
// a = a + 1
a += 1

console.log(a)*/

/*//비교 연산자(comparison operator)

const a = 1
const b = 3

console.log( a === b) //일치연산자

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 2))
console.log(isEqual(2,'2'))

const a = 13
const b = 13

console.log(a !== b)
console.log(a <= b)*/

/*//논리 연산자(logical operator)

const a = 1 ===123
const b = 'AB' === 'ABC'
const c = false

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && c)  // and 그리고
console.log('||: ', a || b || c) // or 또는
console.log('!: ', !a) // not 부정*/

/*//삼항 연산자(ternary operator)

const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')*/


/*// 조건문 (If statement)
import random from './getRandom'

const a = random()

switch (a){
  case 0: 
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
}

if(a === 0) {
  console.log('a is 0')
} else if( a === 2 ){
  console.log('a is 2')
} else if( a === 4 ){
  console.log('a is 4')
} 
else {
  console.log('rest...')
} */


// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

/*const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i+= 1){
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if((i+1) % 2 === 0){
    li.addEventListener('click', function (){
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}*/

/*//변수 유효범위(Variable Scope)
//var, let, const

function scope() {
  if (true){
    const a = 123
    console.log(a) //const, let 블록레벨의 유효범위를 가짐
  }
}
scope()*/


//형 변환(Type convesion)
/*const a = 1
const b = '1'

console.log(a == b)*/

//Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

//Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

/*if ('false') {
  console.log(123)
}*/

// 함수

/*function sum(x, y) { //매개변수
  if (x < 2) {
    return 123
  } 
  return x + y
}

console.log(sum(1,3))*/

/*function sum(){
  console.log(arguments)
  return arguments [0] + arguments
}

console.log(sum(7,3))*/


//화살표 함수
// () => {} vs function () {}
// 일부내용을 생략해 축약형으로 가능

// const double = function (x, y){
//   return x * 2
// }
// console.log('double: ', double(7))

// const doubleArrow = x =>  ({name: 'Heropy'}) /* = {
//   return x*2
// }*/
// console.log('doubleArrow', doubleArrow(7)) 

//즉시실행함수
//IIFE, Immediately-Invoked Function Expression

/*const a = 7
function double() {
  console.log(a*2)
}
double();

(function () {
  console.log(a * 2)
}());

(function () {
  console.log(a * 2)
})();

//호이스팅(Hosting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const b = 8

double()

function double (){
  console.log(b * 2)
}*/

//타이머함수
//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간 ): 시간 간격마다 함수 실행
//clearTimeout() : 설정된 Timeout 함수를 종료
//clearInterval() : 설정된 Interval 함수를 종료

/*const timer = setTimeout( () => {
  console.log('Heropy!')
}, 3000)

const timer = setInterval( () => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})*/

//콜백(Callback)
//함수의 인수로 사용되는 함수

//setTimeout(함수, 시간)

function timeout(Callback) {
  setTimeout(() => {
    console.log('Heropy!')
    Callback()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})