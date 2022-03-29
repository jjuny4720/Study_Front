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

// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i+= 1){
//   const li = document.createElement('li')
//   li.textContent = `행-${i + 1}`
//   if((i+1) % 2 === 0){
//     li.addEventListener('click', function (){
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

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

/*//setTimeout(함수, 시간)

function timeout(Callback) {
  setTimeout(() => {
    console.log('Heropy!')
    Callback()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})*/
 

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function (){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// function user(first, last){
//   this.firstName = first
//   this.lastName = last
//   }
//   user.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
//   }

// const heropy = new user('Heropy', 'Park')
// const amy = new user('Amy', 'Clarke')
// const neo = new user ('Neo', 'smith')

// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())

// const sunny = {
//   name: 'sunkyu',
//   age : 27,
// }
// sunny.haircolor='black';
// sunny['hobby'] = 'game';
// delete sunny.name;
// console.log(sunny)

//this
// 일반(normal) 함수는 호출 위치에서 따라 this 정의!
//  화살표(Arrow) 함수는 자신이 선언된 함수범위에서 this 정의!

// const heropy={
//   name: 'Heropy',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// heropy.normal()
// heropy.arrow()

// const amy = {
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }

// amy.normal()
// amy.arrow()
 // 파스칼 케이스, 생성자 함수
// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const heropy = new User('Heropy')

// heropy.normal()
// heropy.arrow() 

// const timer = {
//   name: 'Heropy!!',
//   timeout : function () {
//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout()

// const sunny={
//   name: "sunny",
//   age : 30
// };

// for(b in sunny){  
//   console.log(b)
// }

// function user(first, last){
//   this.firstName = first
//   this.lastName = last
//   }
//   user.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
//   }

// class User{
//   constructor(first,last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User ('Neo', 'smith')

// console.log(heropy.getFullName())

// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단, 2')
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// } 
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughterscar = new Car('포르쉐', 4, false)

// console.log(myCar)
// console.log(daughterscar)

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers[1])
// console.log(fruits[2]) //[2] indexing(인덱싱)

// const numbers = [1, 2, 3, 4]
// const fruits  = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.length)
// console.log([1,23,33].length)

// console.log(numbers.concat(fruits)) //forEach 반복적으로 동작하는 method는 callback
// fruits.forEach(function (fruit, i){
//   console.log(fruit, i)
// })

// const a = fruits.forEach((fruit, i) => {
//   console.log(`${fruit}-${i}`)
// })
// console.log(a)

// const b = fruits.map( (fruit, i) => {
//   return {
//     id : i,
//     name : fruit
//   }
// })
// console.log(b)

// const c = fruits.map( (fruit, i) => ({
//   id : i,
//   name : fruit
// }))
// console.log(c)

// const d = numbers.map(number =>   number <3)
// console.log(d)

// const e = numbers.filter(number => number < 3)
// console.log(e)

// const f = fruits.find(fruit =>/^B/.test(fruit))
// console.log(f)

// const g = fruits.findIndex(fruit =>  /^C/.test(fruit))
// console.log(g)

// const h = numbers.includes(3)
// console.log(h)

// const i = fruits.includes('joon')
// console.log(i)

// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

// numbers.reverse()

// console.log(numbers)

// numbers.splice(2,1, 999)
// console.log(numbers)

// fruits.splice(10, 0, 'Orange')
// console.log(fruits)