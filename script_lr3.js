// ==================== ЗАДАНИЕ 1 ====================
// Випадкове число від min до max (не враховуючи max)

function random(min, max) {
    return min + Math.random() * (max - min);
}


// ==================== ЗАДАНИЕ 2 ====================
// Перевірка простого числа

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}


// ==================== ЗАДАНИЕ 3 ====================
// Сума послідовності чисел від 1 до n

function recursiveSum(n) {
    if (n === 0) return 0;
    if (n < 0) return n + recursiveSum(n + 1);
    return n + recursiveSum(n - 1);
}