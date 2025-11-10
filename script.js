 class person{
    constructor (){
        this.species ="homo sapiens";
    }
    eat() {
    console.log("eat");
    }
   
 }
 class engineer extends person{
    constructor(branch) {
        console.log ("enter child constructor");
        super();
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("solve problems,build something");
    }
  }
  let engObj= new engineer("chemical engineer");
  

