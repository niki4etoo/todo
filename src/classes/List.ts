class List {
    static i = 0;
    taskKeys: string[] = [];
    taskValues: string[] = [];

    constructor(){

    }
    
    add(value: string) : string {
        if(value.length <= 100) {
            let key = (List.i++).toString();
            localStorage.setItem(key, value)
            this.taskKeys.push(key)
        }
            
        return "";
    }

    getKeys() : any {

        if(this.taskKeys.length === 0){
            for(let i = 0; i < 10; i++){
                this.taskKeys.push(i.toString());
                this.taskValues.push(localStorage.getItem(i.toString()) || "");
            }
        }

        return this.taskKeys;
    }

    getList() : string[] {
        return this.taskValues;
    }

}

export default List;