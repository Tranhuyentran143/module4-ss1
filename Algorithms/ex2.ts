//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Giải thích: Vì nums[0] + nums[1] == 9, nên ta trả về [0, 1]

const nums = [2,8,11,3,15,10];
const res: number[] = []
const sumTarget = (a: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i]+ nums[j] == a) {
                res.push(i,j)
                break;
            }
        }
        if(res.length){
            break;
        }
    }
    return res;
}
console.log(sumTarget(13));
