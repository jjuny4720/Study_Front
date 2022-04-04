// import myData from './myData.json'

// console.log(myData)

// const user = {
//   name: 'JOON',
//   age : 99,
//   emails: [
//     'jjuny4720@naver.com'
//   ]
// }
// console.log('user', user)

// const str = JSON.stringify(user)
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)

// const stt = JSON.stringify(obj)
// console.log('stt', stt)
// console.log(typeof stt)

const user = {
  name : 'Joon',
  age : 25,
  emails:[
    'jjuny4720@naver.com'
  ]
}

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)

localStorage.setItem('user', JSON.stringify(obj))