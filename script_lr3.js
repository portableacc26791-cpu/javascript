// ==================== Завдання 1 ====================

function random(min, max) {
    return min + Math.random() * (max - min);
}


// ==================== Завдання 2 ====================

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}


// ==================== Завдання 3 ====================

function recursiveSum(n) {
    if (n === 0) return 0;
    if (n < 0) return n + recursiveSum(n + 1);
    return n + recursiveSum(n - 1);
}
