function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return new Array(i, j);
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 18));