export class TableColumn { 

    label: string;
    name: string;
    type: string;
    sort?: string;
    width?: number;
    
    constructor(  name: string, label: string,type:string,  sort?: string, width?: number){
        this.label = label===null || label===undefined?name:label;
        this.name = name;
        this.type = type;
        this.sort = sort;
        this.width = width;
    }

    

}

export class TableData{
    columns: TableColumn[] = [];
    rows: [] = []
}