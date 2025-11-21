/*

i=5

while   (i>=1){
    console.log(i);
    i--;
}


i=1;

while (i<=5){
    console.log(i);
    i++;
}
 

output = "";
i=1;

while (i<=5){
    output += output;
    console.log(output);
    i++;
}

console.log(output);



//Oneline desc
output = "";
i=5;

while (i>=1){
    output += i + " ";
    i--;
}
console.log(output);
*/

arr= [4,2,3];
output = "";
i=0;

while(i<=arr.length-1){
    output += arr[i] + " ";
    i++;
}

console.log(output);
