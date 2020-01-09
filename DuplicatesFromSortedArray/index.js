const removeDuplicates = (nums) => {
    let set = new Set()
    nums.forEach(item => {
        set.add(item)
    })
    return [...set];
};

console.log(removeDuplicates([1,2,3,1,4,5,5]))