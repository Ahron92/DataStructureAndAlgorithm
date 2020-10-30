// 1. join(separator?: string): string
{
const fruits = ['apple','banana','orange'];
const result1 = fruits.join();
// result1 = apple,banana,orange
const result2 = fruits.join(' and ');
// result2 = apple and banana and orange
}

// 2.split(separator: string | RegExp, limit?: number): string[];
{
const fruits = 'apple,banana,orange'
const result1 = fruits.split();
// result = ['apple,banana,orange']
const result2 = fruits.split(',');
// result2 = ['apple', 'banana', 'orange']
const result3 = fruits.split(',', 2);
// result3 = ['apple', 'banana']
}

//3.reverse(): T[]
{
  const fruits = ['apple','banana','orange'];
  const result1 = fruits.reverse()
  // result1 = ['orange','banana','apple']
  // fruits = ['orange','banana','apple']
}

//4.slice & splice
{
  const array = [1, 2, 3, 4, 5];
  const result1 = array.slice(2, 5);
  // result1 = [3, 4, 5]
  // array = [1, 2, 3, 4, 5]
  const result2 = array.splice(2, 3);
  // result1 = [3, 4, 5]
  // array = [1, 2]
}


class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 90),
  new Student('E', 18, true, 88),
];

//5.find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
// 첫번째로 찾은 트루인 하나의 값만 반환
{
  const result = students.find(function(value, index, obj){
    // value = student, index = index, obj = students
    return value.score === 90;
  })
    // result = Student { name: 'C', age: 30, enrolled: true, score: 90 }
}

//6.filter
// 트루인 값 모두 반환
{
  const result = students.filter(function(value, index, array){
    // value = student, index = index, array = students
    return value.score === 90;
  });
  // result = [
  //   Student { name: 'C', age: 30, enrolled: true, score: 90 },
  //  Student { name: 'D', age: 40, enrolled: false, score: 90 }
  //]
}

//7.map
// 조건을 통한 새로운 배열 생성
{
  const result = students.map(function(value, index, array){
    return value.score * 2
  })
  // result = [ 90, 160, 180, 180, 176 ]
}

//8. some & every
// some : 하나라도 조건이 만족하면 true
// every : 모든 요소가 만족하면 true
{
  const result1 = students.some(function(value, index, array){
    return value.score < 50;
  })
  //result1 = ture
  const result2 = !students.every(function(value, index, array){
    return value.score < 50;
  })
  //result2 = true !(Negation)가 붙었기 때문
}

//9. reduce
// 배열안에 모든 요소를 호출 하는 것은 다른 메서드와 비슷
// 단 리턴되는 값은 함께 누적된 값을 돌려준다.
{
  const result = students.reduce(function(previousValue, currentValue, currentindex, array){
    // previousValue = 이전의 값, currentValue = 현재의 값
    // 처음에는 이전 값은 인덱스의 0, 현재값은 인덱스의 1로 시작한다.
    // currentValue를 리턴 해줘야 다음번 previousValue가 나타난다.
    // initial value 를 설정해주면 처음 previousValue 값에 그 값을 할당한다.
    return previousValue + currentValue.score; 
  }, 0)
  //result = 모든 score값을 더한 값
}

// 10. 모든 점수를 스트링(String)으로 변환해 보기 (methods chaining)
{
  const result = students.map(function(value){
    return value.score;
  })
  .filter(function(score){
    return score >=50;
  })
  .join();
  //result = 80,90,90,88
}

// 11. methods chaining 2 + sort()
{
  const result = students.map(student => student.score)
  .sort((a, b) => a - b) 
  // 이전값과 현재값을 전달 받아 minus값을 리턴 받으면 첫번째가 뒤보다 작다고 간주하여 정렬됨
  .join()
  //result = 45,80,88,90,90
}