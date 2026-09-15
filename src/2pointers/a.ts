let nums = [2, 1, 5, 1, 3, 2]
let k = 3

function maxSumSubarray(nums: number[], k: number) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += nums[i];
    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumSubarray(nums, k))