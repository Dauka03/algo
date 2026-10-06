/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i = nums.length - 1;
    for (; i >= 1; i--) {
        if (nums[i - 1] <= nums[i]) {
            break
        }
    }

    if (i > 0)
    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[i - 1] <= nums[j]) {
            [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
        }
    }

    let left = i
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
    console.log(nums)
}

console.log(nextPermutation([1, 2, 3]))
console.log(nextPermutation([3, 2, 1]))
console.log(nextPermutation([1, 1, 5]))
console.log(nextPermutation([1, 5, 8, 9, 7, 6, 5, 3]))
