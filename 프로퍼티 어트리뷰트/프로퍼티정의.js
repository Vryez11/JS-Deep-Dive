const person = {};

// 데이터 프로퍼티 정의

Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Lee'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');

console.log(descriptor);

// 접근자 프로퍼티 정의

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }, 
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);