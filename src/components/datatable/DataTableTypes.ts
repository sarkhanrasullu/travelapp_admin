export class TableColumn { 

    label: string;
    name: string;
    type: string;
    parent: string;
    optional: boolean;
    
    constructor(  name: string, label: string, type:string="text", parent: string="", optional=false){
        this.label = label===null || label===undefined?name:label;
        this.name = name;
        this.type = type;
        this.parent = parent;
        this.optional = optional;
    }

}

export class TableData{
    columns: TableColumn[] = [];
    rows: [] = []
}