
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    //This tree would have no dupes
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(current){
                if(value === current.value) return;
                if(value < current.value){
                    if(current.left == null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    BreathFirstSearch(){
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DepthFirstSearchPreOrder(){
        let data = [];
        //Helper
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DepthFirstSearchPostOrder(){
        let data = [];
        //Helper
        function traverse(node){
         
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
         
        }
        traverse(this.root);
        return data;
    }
    DepthFirstSearchInOrder(){
        let data = [];
        //Helper
        function traverse(node){
         
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);   
               
        }
        traverse(this.root);
        return data;
    }

}

//      10
//   5      13
// 2  7   11  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//console.log(tree.BreathFirstSearch());
console.log(tree.DepthFirstSearchPreOrder());


//Tree Traversal 
//Breadth-First
//Depth-First
// Breadth First Search
// Using a queue 

