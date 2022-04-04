const user = {
    name: 'JOON',
    age: 99,
    emails: [
        'jjuny4720@naver.com'
    ]
};
console.log('user', user);
const str = JSON.stringify(user);
console.log('str', str);
console.log(typeof str);
const obj = JSON.parse(str);
console.log('obj', obj);

//# sourceMappingURL=index.c4775257.js.map
