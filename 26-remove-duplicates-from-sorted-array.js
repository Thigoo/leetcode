// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150

// input recebido
// nums = [1,1,2]
// nums = [0,0,1,1,1,2,2,3,3,4]

// saída esperada
// k = 2, 
// nums = [1,2,_]
// k = 5, 
// nums = [0,1,2,3,4,_,_,_,_,_]

// queremos remover os duplicados dentro de um array ordenado crescente
function removeDuplicates(nums) {
    // vamos ajustar o primeiro ponteiro k que será usado para setar o valor correto na posição correta e retorna a quantidade de items do array final
    let k = 0;
    // varrer o array observando cada posição e valor no ponteiro i 
    for (let i = 1; i < nums.length; i++) {
        // se um número na posição posterior é diferente da posição anterior
        if(nums[k] !== nums[i]) {
            // mantenha o valor e incremente o anterior para nova comparação
            k++;
            // recebe o novo valor não duplicado
            nums[k] = nums[i];
        }
    }
    // retorna a quantidade de elementos em nums
    return k + 1;
}

// const nums = [1,1,2]
const nums = [0,0,1,1,1,2,2,3,3,4]

const k = removeDuplicates(nums);
console.log(k, nums)
