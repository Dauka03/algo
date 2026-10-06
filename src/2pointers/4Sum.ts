function fourSum(nums: number[], target: number): number[][] {
    let res: number[][] = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    left++
                    right--
                    while (nums[left] === nums[left - 1]) left++
                    while (nums[right] === nums[right + 1]) right--
                } else if (sum < target) {
                    left++
                } else right--
            }
        }
    }
    return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([2, 2, 2, 2, 2], 8))
