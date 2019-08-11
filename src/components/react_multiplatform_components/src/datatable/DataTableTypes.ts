export enum InputFieldType {
    TEXT="text",
    TEXT_AREA="textarea",
    EDITOR="EDITOR",
    PASSWORD="PASSWORD",
    DATE ="DATE",
    DATE_TIME = "DATE_TIME",
    CHECK_BOX = "CHECK_BOX",
    SELECT_BOX ="SELECT_BOX",
    IMAGE_URL = "IMAGE_URL",
    IMAGE_URL_MULTIPLE = "IMAGE_URL_MULTIPLE",
    IMAGE_BASE64 = "IMAGE_BASE64",
    IMAGE_BASE64_MULTIPLE = "IMAGE_BASE64_MULTIPLE",
    NATIONALITY_PICKER = "CUSTOM",
    BRAND_PICKER = "CUSTOM",
    MODEL_PICKER = "CUSTOM",
}

class AbstractInputField {
   label: string;
   name: string;
   type: InputFieldType;
   optional: boolean;
   
   constructor(  name: string, label: string, type:InputFieldType, optional=false){
       this.label = label===null || label===undefined?name:label;
       this.name = name;
       this.type = type;
       this.optional = optional;
   }
}

export class InputField extends AbstractInputField {
    parent: string;
   constructor(name: string, label: string, type:InputFieldType = InputFieldType.TEXT, optional=false, parent: string){
       super(name, label, type, optional);
       this.parent = parent;
   }
}

export class SelectBox extends AbstractInputField {
   
   endPoint: string;
   valueParam:string;
   displayParam: string;

   constructor(  name: string, label: string = name, endpoint:string, valueParam:string, displayParam:string, optional=false){
       super(name, label, InputFieldType.SELECT_BOX, optional);
       this.endPoint = endpoint;
       this.valueParam = valueParam;
       this.displayParam = displayParam;
   }

}

export enum TableColumnType {
   TEXT,
   IMAGE_URL,
   IMAGE_BASE64,
   DATE,
   DATE_TIME,
}

export class TableColumn { 
   
   name: string;
   label: string;
   type: TableColumnType;

   constructor(name: string, label: string = name, columnType: TableColumnType = TableColumnType.TEXT){
       this.label = label;
       this.name = name;
       this.type = columnType;
   }

}