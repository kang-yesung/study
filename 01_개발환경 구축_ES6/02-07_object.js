const user = {
  name: "Alice",
  age: 25,
  job: "Developer",
};

//1. 객체 구조분해할당
//key값 할당
// const { age, name } = user;
// console.log(name);
// console.log(age);

// 2. 변수이름 변경 (별칭 지정)
const { name: userName, job: profession } = user;

console.log(userName);
console.log(profession);

//기본값 설정
const { salary = 5000, age: userAge = 30 } = user;
console.log(salary);
console.log(userAge);

//4. 중첩된 객체 구조 분해
const person = {
  name: "Bob",
  info: {
    address: "seoul",
    hobbise: ["reading", "coding"],
  },
};
const {
  name,
  info: {
    address,
    hobbise: [firstHobby, secondHobby],
  },
} = person;

//구조분해 할당을 통해 이름과 첫번쨰 취미를입력하세요
console.log(`이름 : ${name}, 첫번쨰 취미 : ${firstHobby} `);
