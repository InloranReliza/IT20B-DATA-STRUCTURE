/*
for(i=1 ;i<=5 ;i++){
    console.log(i);
}


output = "";

for(i=1 ;i<=5 ;i++){
    output += i + " ";
}
    console.log(output);
    
    

    output ="";

    for(i=5 ;i>=1 ;i--){
        output += i + " ";
    }
        console.log(output);


reverse = "";
str = "Cliff";

for(i=str.length-1 ; i>=0 ; i--){
    reverse += str[i];
}


console.log(reverse);
*/



arr1 = [4,2,3];
arr2 = [6,7,4,2,0];
arr3 = [6,7,4,2,0];

function arrayTraverse(arr){

output = "";
for(i=0; i<arr.lenght; i++){
    output += arr[i] + " ";
}
console.log("output");
}
arrayTraverse(arr1);
arrayTraverse(arr2);
arrayTraverse(arr3);

