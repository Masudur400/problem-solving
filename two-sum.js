function findIndicesForTarget(nums, target) {
    const indexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (indexMap[complement] !== undefined) {
            return [indexMap[complement], i];
        }
        
        indexMap[nums[i]] = i;
    }

    return null;  
}
 
console.log(findIndicesForTarget([5, 4, 2, 1], 9));  
