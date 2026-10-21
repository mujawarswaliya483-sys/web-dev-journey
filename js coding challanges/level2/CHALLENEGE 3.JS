// Count the frequency of each number
// Build countFrequency()

// Write a JavaScript function that counts how many times each number appears in an array and returns an object containing the counts

function countFrequency(arr)
{
    let frequency = {};
    for(let i=0;i<arr.length;i++)
    {
        if(frequency[arr[i]])
        {
            frequency[arr[i]]++;
        }
        else
        {
            frequency[arr[i]] = 1;
        }
    }
    return frequency;
}