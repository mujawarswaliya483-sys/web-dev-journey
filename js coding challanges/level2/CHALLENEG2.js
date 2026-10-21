function secondLargest(arr)
{
    let secondLargest = arr[0];
    for(let i=0;i<arr.length;i++)
        if(arr[i]>arr[i+1])
            secondLargest = arr[i];
    return secondLargest;
}