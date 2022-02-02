// 자바스크립트 : 데이터를 기준으로 사고 해야함
// 한 줄 메모
/*
여러 줄
*/
/*
// String(문자 데이터)
// 따옴표를 사용합니다.
let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!`;

console. log(myName); //Hello
console. log(email); //thesecon@gmail.com
console. log(hello); // Hello HEROPY

//Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.
let number =123;
let opacity = 1.57;

console.log(number); // 123
console.log(opacity); // 1.57;

//Boolean(불린 데이터)
// true, false 두가지 값 밖에 없는 논리 데이터입니다.
let checked = true;
let isShow= false;

console.log(checked); //true
console.log(isShow); //false

//Undefined
//값이 할당되지 않은 상태를 나타냄
let undef;
let obj = {abc:123};

console.log(undef); //undefined
console.log(obj.abc) // 123
console.log(obj.xyz); //undefined

// Null
// 어떤 값이 의도적으로 비어있음을 의미함.
let empty = null;

console.log(empty); // null

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. {}
let user ={
  //Key: Value,
  name:'HEROPY',
  age : 85,
  isValid : true
};

console.log(user.name); //HEROPY
console.log(user.age); // 85
console.log(user.isValid); //true

//Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다 []
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[1]); 
console.log(fruits[2]);
console.log(fruits[3]);

// 변수 : 데이터를 저장하고 참조(사용)하는 데이터의 이름
// let, const

//재사용이 가능!
//변수 선언!
let a = 2;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//재사용이 가능
let c = 12;
console.log(c);

c = 999;
console.log(c);

//값(데이터)의 재할당 불가! 
// const d = 12;
// console.log(d);

// d = 999;
// console.log(d);

// 예약어 : 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
// 함 수 : 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

// 함수 선언
function helloFunc(){
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc();

function returnFunc(){
  return 123;
}

let d = returnFunc();

console.log(d);

// 함수 선언!
function sum(e, f) { //a와 b는 매개변수(parameters)
  return e+f;
}

// 재사용!
let e = sum(1, 2); //1과 2는 인수
let f = sum(7,12);
let g = sum(2,4);

console.log(e, f, g);

// HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector('.box');
/*
//HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

//인수(Arguments)를 추가 가능!
boxEl.addEventListener(1,2);

// 1-이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

//2-핸들러(Handler, 실행할 함수)


// HTML 요소(Element) 검색/찾기
boxEl.addEventListener('click', function(){
  console.log('Click~!');
});


// 요소의 클래스 정보 객체 활용! 
const boxEl = document.querySelector('.box');

boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);//True

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);


let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function(){
  console.log('Click!!');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
    );
    boxEl.classList.remove('active');
    console.log(
      boxEl.classList.contains('active')
    )
});

//HTML 요소(Element)모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

//찾은 요소들 반복해서 함수 실행!
//익명 함수를 인수로 추가! 
boxEls.forEach(function () {});

// 첫 번째 매개변수(boxEl) : 반복 중인 요소.
// 두 번째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

//출력!
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index +1}`);
  console.log(index, boxEl);
});


const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index){
  boxEl.classList.add(`order-${index +1}`);
  console.log(index, boxEl);
});


const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 지정하는 용도
boxEl.textContent = 'HEROPY?!';
console.log(boxEl.textContent);


const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'HEROPY!!';
console.log(boxEl.textContent); 
*/

//메소드 체이닝
const a = 'Hello~';
//split: 문자를 인수 기준으로 쪼개서 배열로 전환
//reverse: 배열을 뒤집기
//join : 배열을 인수 기준으로 문자로 병합해 반환.
const b = a.split('').reverse().join(''); //메소드 체이닝..

console.log(a);
console.log(b);

const boxEl=document.querySelector('.box');
console.log(boxEl.textContent);