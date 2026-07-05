// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

// duas possibilidades de resolver esse problema

// 1 - utilizando ponteiros para cada índice de cada array e comparando se naquela posição um é maior do que o outro, se sim então usamos o ponteiro da direita para setar o valor mais alto se não, mantém na posição
function merge(nums1, m, nums2, n) {
    // setamos o índice do array 1 de acordo com o tamanho que terá proposto pelo exercício
    let midx = m - 1; 
    // o mesmo para o array 2
    let nidx = n - 1;
    // posição da direita para ir colocando os valores maiores
    let right = m + n - 1; // índice da direita para nums1

    // enquanto existir índice no array 2
    while(nidx >= 0) {
        // se o array 1 no índice midx existir e o valor for maior que o array
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            // então setamos o valor da direita com o valor maior
            nums1[right] = nums1[midx];
            // decrementa midx para a próxima comparação
            midx--;
        } else {
            // se o valor for menor ocorrerá o contrário
            nums1[right] = nums2[nidx];
            // decrementa nidx
            nidx--;
        }
        // decrementa o valor da direita para ir acomodando os outros valores
        right--;
    }
}

// 2 - usando o método splice para alterarmos o array conforme solicitado
function merge2(nums1, m, nums2, n) {
    // utilizaremos o método splice para manipular de acordo com os valores de entrada do enunciado
    // inicia a contagem na posição m = 3, "corta" o array na posição contrária (- m = - 3), por fim, preenche/mergea os últimos valores com nums2
    nums1.splice(m, nums1.length - m, ...nums2);
    // agora é só ordenar o array
    nums1.sort((a, b) => a - b);
}

// casos de teste descomente/comente para testar
nums1 = [1,2,3,0,0,0], 
m = 3, 
nums2 = [2,5,6], 
n = 3

// nums1 = [1], 
// m = 1, 
// nums2 = [], 
// n = 0

// nums1 = [0], 
// m = 0, 
// nums2 = [1], 
// n = 1

merge(nums1, m, nums2, n)
console.log("merge 1 ->", nums1)
merge2(nums1, m, nums2, n)
console.log("merge 2 ->", nums1)