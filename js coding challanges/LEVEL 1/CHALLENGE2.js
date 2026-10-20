// Challenge 2 — Count the even numbers

// Level 1 · Independent implementation
// Write a function named countEven that accepts an array of integers and returns how many numbers are even.

function countEven(arr)
{
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
        if([arr[i]%2===0])
        {
            count++;
        }
    }
    return count;
}