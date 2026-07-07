// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

function majorityElement(nums) {
    // armazena a frequência de cada elemento encontrado
    const hash = {};
    // res armazena o elemento majoritário enquanto majority armazenará sua contagem
    let majority = 0;
    let res = 0;
    console.log(typeof hash)

    // percorre cada elemento da lista
    for(let n of nums) {
        // atualizamos a frequência na hash
        hash[n] = 1 + (hash[n] || 0);
        
    }
}

// const nums = [3,2,3];
const nums = [2,2,1,1,1,2,2];
const res = majorityElement(nums);
console.log(nums, res);