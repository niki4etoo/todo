class List {
    tasks: string[];

    constructor(){
        this.tasks = [];
    }
    
    add(value: string) : void {
        if(value.length <= 100) {
            this.tasks.push(value);
        }
    }

    remove() : void {
        if(this.tasks.length > 0){
            this.tasks.shift();
        }
    }

    get() : string[] {
        return this.tasks;
    }
}

export default List;