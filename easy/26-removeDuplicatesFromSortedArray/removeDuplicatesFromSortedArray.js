// Naive solution
// constraint: do not make a new array; instead mutate the input array
var removeDuplicates = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

// Optimizations
// constraint: do not make a new array; instead mutate the input array

// var removeDuplicates = function (nums) {
//   const len = nums.length;
//   for (var i = 0; i < len; i++) {
//     if (i === 0) {
//       if (nums[i] !== nums[i + 1]) {
//         nums.push(nums[i]);
//       }
//     } else if (i === len - 1) {
//       if (nums[i] !== nums[i - 1]) {
//         nums.push(nums[i]);
//       }
//     } else {
//       if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
//         nums.push(nums[i]);
//       }
//     }
//   }
//   return nums.slice(len).length; // this makes a new array, making this a non-solution
// };


var removeDuplicates = function (nums) {
  const len = nums.length;
  if (nums[0] !== undefined) {
    nums.push(nums[0]);
  }
  for (var i = 1; i < len; i += 1) {
    if (i === 1) {
      if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
        nums.push(nums[i]);
      }
    } else if (i < len - 1) {
      if (nums[i] !== nums[i + 1]) {
        nums.push(nums[i]);
      }
    } else {
      if (nums[i] !== nums[i - 1]) {
        nums.push(nums[i]);
      }
    }
  }
  for (var i = 0; i < len; i += 1) {
    nums.shift();
  }
  return nums.length;
};