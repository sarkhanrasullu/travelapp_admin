export class TableColumn { 

    label: string;
    name: string;
    type: string;
    disabled: boolean;
    
    constructor(  name: string, label: string, type:string="text", disabled: boolean=false){
        this.label = label===null || label===undefined?name:label;
        this.name = name;
        this.type = type;
        this.disabled = disabled;
    }

}

export class TableData{
    columns: TableColumn[] = [];
    rows: [] = []
}