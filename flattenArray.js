//1️⃣ Using flat() (modern & clean)
const arr = [1, [2, [3, 4]], 5];

const flattened = arr.flat(Infinity);

console.log(flattened);
// [1, 2, 3, 4, 5]


//2️⃣ Recursive approach (classic interview answer)
function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]


//3️⃣ Using reduce() (functional style)
function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flattenArray(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(flattenArray([1, [2, [3, 4]], 5]));

const arr = [1, [2, 3], [4, 5]];

const flattened = arr.flat();

console.log(flattened);
// [1, 2, 3, 4, 5]

//5️⃣ Iterative (no recursion, stack-based)

function flattenArray(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}

console.log(flattenArray([1, [2, [3, 4]], 5]));