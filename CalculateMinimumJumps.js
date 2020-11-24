function returnMinimumJumps(arr)
{
    array_length = arr.length;
    //if array length is 1
    if(array_length==1)
        return 0
    //if the first value is equal to last value  
    else if(arr[0]==arr[array_length-1])
        return 1
    //other conditions
    else
    {
        var last_value = arr[array_length-1];
        var increment = 0;
        var i=0, count=0, flag=1;
        while(i<(array_length-1))
        {
            if(i!=array_length && arr[i+1]==last_value && i+1!=array_length-1)
            {
                count+=2;
                flag=0;
                break;
            }
            else if(i!=0 && arr[i-1]==last_value)
            {
                count+=2;
                flag=0;
                break;
            }
            else if(i+1!=array_length-1)
            {
                var j;
                for(j=array_length-2;j>=i+1;j--)
                {
                    if(arr[j]==arr[i])
                    {
                        increment = j;
                        break;
                    }
                }
                count+=1;
            }
            if(increment==0)
                i+=1;
            else
                i+=increment;
            increment=0;
        }
        if(flag==1)
            count+=1;
    }
    //returning the number of jumps
    return count;
}

//input array
var arr = [100,-23,-23,404,100,23,23,23,3,404];
//calling the function minimum jumps
console.log(returnMinimumJumps(arr))




