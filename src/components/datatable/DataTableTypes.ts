export class TableColumn { 

    label: string;
    field: string;
    sort?: string;
    width?: number;

    
    constructor( field: string, label: string,  sort?: string, width?: number){
        this.label = label===null || label===undefined?field:label;
        this.field = field;
        this.sort = sort;
        this.width = width;
    }

    

}

export class TableData{
    columns: TableColumn[] = [];
    rows: [] = []
}