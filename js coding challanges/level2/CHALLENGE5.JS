// Challenge 10 — Find the first even number
function findFirstEven(arr){
    let result = null;
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i] % 2 === 0)
        {
            result = arr[i];
            break;
        }
    }
    return result;
}