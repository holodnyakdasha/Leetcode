const twoSum = (nums, target) => {
    const obj = {}
    for(let i = 0; i < nums.length; i++){
            if(obj[nums[i]] >= 0){
                return [obj[nums[i]], i]
            }
        obj[target-nums[i]] = i
    }
};
console.log(twoSum([2, 7, 11, 15], 18));