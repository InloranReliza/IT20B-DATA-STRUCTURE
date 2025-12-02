class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
    }

    insert_at_beginning(){
        const node = new Node(element);
        node.next = this.head;
        this.head = node;

    }

    traverse(){
        let current = this.head;
        let output ="";

        while (current){
            output += current.value + "";
            current = current.next;
        }  

        return output;
      }

}
 