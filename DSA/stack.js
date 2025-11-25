class Stack{

    constructor(){
        this.data = {};
        this.topindex = -1;
    }

    push(element){
        this.topindex++;
        this.data[this.topindex] = element;
    }
}
    traverse(){
        let output = "";

        for(let i=0; i<=this.topindex; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }

//
Stack1 = new Stack();

Stack1.push(4);
Stack1.push(2);
Stack1.push(3); 
Stack1.traverse();