class List {
    tasks: string[] = [];

    constructor(){

    }

    add(value: string) : string {
        if(value.length <= 100) {
            this.tasks.push(value);
            return value;
        }
            
        return "";
    }

    remove(value: string) : number {
        if(this.tasks.indexOf(value) !== -1){
            return this.tasks.indexOf(value);
        } else {
            console.error('The task is not found in the list');
            return -1;
        }
    }

    showAll() : void {
        console.log('list of all the tasks');
        
        if(this.tasks.length > 0){
            this.tasks.map((task) => {
                console.log(`task(${task})`)
            })
        }
    }
}

export default List;