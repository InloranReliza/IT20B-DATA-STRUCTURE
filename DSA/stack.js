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

    is_empty(){
        return this.topindex === -1;
    }
    size(){
        return this.topindex + 1;
    }

    peek(){
        //correcting statement
        if(this.is_empty()) return null;
        return this.data[this.topindex]; 
    }   
    pop(){
        //correcting statement
        if(this.is_empty()) return null;
        
        let value = this.data[this.topindex];
        delete this.data[this.topindex];
        this.topindex--;
        return value;
    }
//
Stack1 = new Stack();

console.log(Stack1.is_empty());
Stack1.push(4);
Stack1.push(2);
Stack1.push(3); 
Stack1.push(5);
Stack1.push(8);
console.log("the current size is"+stack1.size());
console.log("the top element is "+stack1.peek());
console.log("The top element" + stack1.pop() + " is popped, the new top elememnt is " + stack1.peek());
console.log("The new stack size is " + Stack1.size());




