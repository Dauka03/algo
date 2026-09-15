function threeSum(nums: number[]): number[][] {
    let res = []

    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let right = nums.length - 1
        let left = i + 1
        const target = -nums[i]

        while (left < right) {
            const sum = nums[left] + nums[right]
            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while (nums[left] === nums[left - 1]) left++
                while (nums[right] === nums[right + 1]) right--

            }
        }

    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))