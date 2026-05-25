// ==================== Задание 1 ====================
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  "Ivan": 100,
  "Петро": 300,
  "Марія": 250
};

console.log(sumSalaries(salaries)); 
console.log(sumSalaries({})); 

// ==================== Задание 2 ====================
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: 'Ivan',
  age: 30
};

console.log(count(user));

// ==================== Задание 3 ====================
let user = {
  name: "Ivan",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name);   
console.log(age);    
console.log(isAdmin);