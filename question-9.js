const arr = [1, 23,43,54,"viral",78 ,"cxnbmxcn"];
let h=0



while(h<=arr.length){
    if(typeof(arr[h]) === "string")
    {
        console.log("Found The First string: " + arr[h])
         break;
    }
   
   
    
    h++;
}