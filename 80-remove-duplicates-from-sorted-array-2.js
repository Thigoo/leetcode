// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

// este desafio lembra o desafio 26, com diferença que pode ocorrer a duplicidade até duas vezes

function removeDuplicates(nums) {
    // iniciamos os ponteiros i e k na posição 2 pois só precisamos verificar a partir desse ponto, se for duplicado antes, sme problema pois seriam duas ocorrências apenas
    let k = 2;
    for (let i = 2; i < nums.length; i ++) {
        if(nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]

// const nums = [1,1,1,2,2,3];
const nums = [0,0,1,1,1,1,2,3,3];
const k = removeDuplicates(nums);
console.log(k, nums);
