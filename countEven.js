function countEvens(arr) {
  // your solution here
  let count = 0;
  if(!Array.isArray(arr))
  {
    return false;
  }
  for (let i = 0; i < arr.length; i++)
  {
    if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) return false;
  if (Number.isInteger(arr[i])&& arr[i] % 2 == 0)
  {
      count++;
  }
  }
  return count;
}

module.exports = { countEvens };