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
 */

output = "";
i=1;

while (i<=5){
    output += output;
    console.log(output);
    i++;
}

console.log(output);
