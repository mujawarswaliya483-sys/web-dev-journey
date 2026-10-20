// Challenge 1 — Find the largest number

// Write a JavaScript function named findLargest that takes an array of numbers and returns the largest number in that array.

function findLargest(arr)
{
   let largest = arr[0];
   for(let i =1;i<arr.length;i++)
{
    if(largest<arr[i])
    {
        largest =arr[i];
    }else
    {
        largest = arr[0];
    }
}
return largest;
}
