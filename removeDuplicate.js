// | index | item | arr.indexOf(item) | indexOf === index? | Keep it? |
// | ----: | ---: | ----------------: | -----------------: | -------- |
// |     0 |    1 |                 0 |             ✅ true | ✅ yes    |
// |     1 |    2 |                 1 |             ✅ true | ✅ yes    |
// |     2 |    3 |                 2 |             ✅ true | ✅ yes    |
// |     3 |    4 |                 3 |             ✅ true | ✅ yes    |
// |     4 |    2 |                 1 |            ❌ false | ❌ no     |
// |     5 |    3 |                 2 |            ❌ false | ❌ no     |
// |     6 |    4 |                 3 |            ❌ false | ❌ no     |
// |     7 |    5 |                 7 |             ✅ true | ✅ yes    |

// Key Insight

// indexOf(item) always returns the first occurrence of that item.

// Only the first time an element appears, its index matches indexOf.

// Duplicates appear later → condition fails → removed.

// So order is preserved, and only duplicates are removed.

function removeDuplicates(arr) {
  const unique = arr.filter(
    (item, index) => arr.indexOf(item) === index
  );
  console.log(unique);
}
