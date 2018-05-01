var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 1) {
            counter += 1;
        } else if (nums[i] === 0) {
            if (max < counter) {
                max = counter;
            }
            counter = 0;
        } 
    }
    if (max < counter) {
        max = counter;
    }
    return max;
};