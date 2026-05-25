// ==================== Задание 1 ====================
function unique(arr) {
    const result = [];
    
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    
    return result;
}

function uniqueSet(arr) {
    return [...new Set(arr)];
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", "-0"];
console.log(unique(values));

// ==================== Задание 2 ====================
function aclean(arr) {
    const map = new Map();
    
    for (let word of arr) {
        const sorted = word.toLowerCase().split('').sort().join('');
        
        if (!map.has(sorted)) {
            map.set(sorted, word);
        }
    }
    
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

// ==================== Задание 3 ====================
function countOccurrences(arr) {
    const map = new Map();
    
    for (let element of arr) {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }
    
    return map;
}

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];
const result = countOccurrences(numbers);
console.log(result);

console.log(Array.from(result.entries()));

// ==================== Задание 4 ====================
function areAllUnique(arr) {
    const seen = new Set();
    
    for (let element of arr) {
        if (seen.has(element)) {
            return false;
        }
        seen.add(element);
    }
    
    return true;
}

// или

function areAllUniqueShort(arr) {
    return arr.length === new Set(arr).size;
}

const uniqueArray = [1, 2, 3, 4, 5];
const hasDuplicates = areAllUnique(uniqueArray);
console.log(hasDuplicates);

const arrayWithDuplicates = [1, 2, 3, 2, 4, 5];
const hasDuplicates2 = areAllUnique(arrayWithDuplicates);
console.log(hasDuplicates2);