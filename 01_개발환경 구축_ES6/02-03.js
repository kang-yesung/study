const p1 = { name: "john", age: 20 };

//속성 변경 가능
p1.age = 22;

console.log(p1);

//객체를 재할당하는것은 불가
// p1 = { name: "lee", age: 25 };
// 주소값을 바꾸려고 하기 때문에 오류가 발생한다
