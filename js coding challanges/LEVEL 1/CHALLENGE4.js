// **Challenge 4 · Arrays and conditions**
// Create getPositiveNumbers()
// Write a function that returns a new array containing only positive numbers from the input array.

function getPositiveNumbers(arr)
{ 
    let getpositiveNumbers = [];
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            getPositiveNumbers.push(arr[i]);
        }
    }
    return getPositiveNumbers;
}