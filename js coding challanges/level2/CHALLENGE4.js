// Build findFirstDuplicate()
// Write a JavaScript function that returns the first number you encounter that has already appeared earlier in the array.
function findFirstDuplicate(arr) {
    const seen = [];
    for(let i=0;i<arr.length;i++)
    {
    if(seen.includes(arr[i]))
    {
        return arr[i];
    }
    seen.push(arr[i]);
}
return null;
}