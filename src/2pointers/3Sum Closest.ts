function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let res = nums[0] + nums[1] + nums[2]; // стартовое приближение

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            } else if (sum < target) {
                left++;
            } else right--
        }
    }

    return res;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90], 1))