// ==================== Задание 1 ====================

// 1. 
let styles = ["Jazz", "Blues"];
console.log("1.", styles);

// 2. 
styles.push("Rock-n-Roll");
console.log("2.", styles);

// 3. 
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
console.log("3.", styles);

// 4. 
let removedElement = styles.shift();
console.log("Удален элемент:", removedElement);
console.log("4.", styles);

// 5. 
styles.unshift("Rap", "Reggae");
console.log("5.", styles);

console.log("\n");

// ==================== Задание 2 ====================
function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введіть число:", "");

        if (value === "" || value === null || !isFinite(value)) {
            break;
        }

        numbers.push(+value);
    }

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(sumInput());

// ==================== Задание 3 ====================
function getMaxSubSum(arr) {
    let maxSum = -Infinity;  
    let currentSum = 0;      
    
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

let testArray = [1, -2, 3, 4, -9, 6];
console.log("Задание 3 - Тестирование:");
console.log("Исходный массив:", testArray);
console.log("Максимальная сумма подмассива:", getMaxSubSum(testArray));

console.log("getMaxSubSum([-1, 2, 3, -9]) =", getMaxSubSum([-1, 2, 3, -9])); 
console.log("getMaxSubSum([2, -1, 2, 3, -9]) =", getMaxSubSum([2, -1, 2, 3, -9])); 
console.log("getMaxSubSum([-1, 2, 3, -9, 11]) =", getMaxSubSum([-1, 2, 3, -9, 11])); 
console.log("getMaxSubSum([-2, -1, 1, 2]) =", getMaxSubSum([-2, -1, 1, 2]));
console.log("getMaxSubSum([100, -9, 2, -3, 5]) =", getMaxSubSum([100, -9, 2, -3, 5]));
console.log("getMaxSubSum([1, 2, 3]) =", getMaxSubSum([1, 2, 3]));
console.log("getMaxSubSum([-1, -2, -3]) =", getMaxSubSum([-1, -2, -3]));