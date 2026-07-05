function removeElement(nums, val) {
    // inicio um ponteiro k para setar e retornar o valor correto na posição correta
    let k = 0;
    // ponteiro i para percorrer o array
    for (let i = 0; i < nums.length; i++) {
        // se for diferente do valor da ocorrência
        if(nums[i] !== val) {
            // seta o array com o valor diferente (queremos remover as ocorrências)
            nums[k] = nums[i];
            // incrementa k para a próxima posição a ser preenchida;
            k++;
        }
    }
    // retorna 
    return k;
}

// let nums = [3,2,2,3];
// let val = 3;
let nums = [0,1,2,2,3,0,4,2];
let val = 2;

const k = removeElement(nums, val);
console.log(nums);
console.log(k);