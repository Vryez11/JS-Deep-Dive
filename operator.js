var a, b, c;

a = b = c = 0;

/*
연쇄 할당 : 오른쪽에서 왼쪽으로 진행.
할당문은 표현식이기 때문에 가능하다.
*/

console.log(a, b, c);

console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1 + undefined));