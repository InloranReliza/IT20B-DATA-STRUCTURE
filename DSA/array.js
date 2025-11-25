class Array {

    constructor(initialData =[]){
        this.data = {};
        this.length = 0;

        //Assign element to index
        for (let i=0; i<initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }
    
    traverse(){
        let output = "";

        for(let i=0; i<this.length; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }
    
}
    insert(index, element){
    //correcting index
    if(index <0 || index > this.length){
        console.log("Invalid index");
        return;
    }

    //shifting condition
    for(let i=this.length; i>index; i--){
        this.data[i] = this.data[i-1];
    }

    //after condition
    this.data[index] = element;
    this.length++;
}
    delete(index){

    //correcting statement || must be false
    if(index <0 || index >= this.length){
        console.log("Invalid index");
        return;
    }

    //shifting condition
    for(let i=index; i<this.length-1; i++){
        this.data[i] = this.data[i+1];
    }

    //after condition
    delete this.data[this.length-1];
    this.length--;

}
    update(index, element){
    //correcting statement || must be false
    if(index <0 || index >= this.length){
        console.log("Invalid index");
        return;
    }   

    //after condition
    this.data[index] = element;
    }
     search(element){
    //must be true
    for(let i=0; i<this.length; i++){
        if(this.data[i] === element){
            console.log(element + " is found at index " + i);
            return i;
        }
    }
    //false
    console.log(element + " is not found at any index");   
    return;
    }




//
arr1= new Array([4,2,3]);

arr1.traverse();
arr1.insert(0,9);
arr1.traverse();

arr1.delete(1);
arr1.traverse();

arr1.update(2,5);
arr1.traverse();
    
arr1.search(43);
arr1.search(9);



