// ==================== Завдання 1 ====================
let user = {};

user.name = "Марк";

user.surname = "Сміт";

user.name = "Тарас";

delete user.name;

console.log("Завдання 1 - user:", user); 


// ==================== Завдання 2 ====================
function isEmpty(obj) {
    for (let key in obj) {
        return false; 
    }
    return true; 
}
let schedule = {};
console.log("Завдання 2 - isEmpty(schedule):", isEmpty(schedule));

schedule["8:30"] = "Вставка";
console.log("Завдання 2 - isEmpty(schedule):", isEmpty(schedule)); 


// ==================== Завдання 3 ====================
let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log("Завдання 3 - sum:", sum);

let emptySalaries = {};
let sumEmpty = 0;
for (let key in emptySalaries) {
    sumEmpty += emptySalaries[key];
}
console.log("Завдання 3 - порожній об'єкт, sum:", sumEmpty); // 0


// ==================== Завдання 4 ====================
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}


let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};

multiplyNumeric(menu);

console.log("Завдання 4 - menu після multiplyNumeric:", menu);
