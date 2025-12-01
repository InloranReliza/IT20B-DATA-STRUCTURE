class Queue{

    constructor(){
        this.data = {};
        this.frontIndex = 0;
        this.rearIndex = -1;
    }

    enqueue(element){
        this.rearIndex++;
        this.data[this.rearIndex] = element;
        }

        traverse(){
            let output = "";
            for (let i = this.frontIndex; i<=  this.rearIndex; i++){
                output += this.data[i] + "";

            }
            return output;
        }
        
}

let queue1 = new Queue();
