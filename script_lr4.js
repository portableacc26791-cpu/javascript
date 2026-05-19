// ==================== Завдання 1 ====================
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("василь")); 
console.log(ucFirst(""));       
console.log(ucFirst("а"));      

// ==================== Завдання 2 ====================
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('poci') || lowerStr.includes('xxx');
}

console.log(checkSpam('пойхати до посії'));
console.log(checkSpam('free xxxxx'));      
console.log(checkSpam("innocent rabbit")); 
console.log(checkSpam('XXx'));             

// ==================== Завдання 3 ====================
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 3) + "...";
}

// Перевірка завдання 3
console.log(truncate("що я хотів би розповісти на цю тему:", 20)); 
console.log(truncate("Всім привіт!", 20));
console.log(truncate("Дуже довгий рядок, який треба обрізати", 15));

// ==================== Завдання 4 ====================
function strikeStr(str) {

  const words = str.split(' ');
  const result = [];
  
  for (let i = 0; i < words.length; i += 3) {
    const group = words.slice(i, i + 3);
    result.push(group.join(' '));
  }
  
  return result.join('\n');
}

console.log(strikeStr("що я хотів би розповісти на цю тему:"));

console.log(strikeStr("Всім привіт!"));

console.log(strikeStr("один два три чотири п'ять шість сім"));
