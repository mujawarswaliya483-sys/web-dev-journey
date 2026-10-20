// Challenge 3 — Calculate the sum of positive numbers
// Build sumPositive()

// Write a JavaScript function that accepts an array of numbers and returns the sum of only the positive numbers.

function sumPositive(arr)
{
    let sum = 0;
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            sum = sum + arr[i];
        }
    }
    return sum;
}