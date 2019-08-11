import React from 'react'

export class CommonUtil {

    static imageFormatter = (data) => {
      const url = data;
      return <img src={url} alt="thumbnail" className="img-thumbnail" style={{width:120}}/>;
    }

    static imageFormatterBase64 = (data) => {
      const url = `data:image/png;base64, ${data}`;
      return <img src={url} alt="thumbnail" className="img-thumbnail" style={{width:120}}/>;
    }

    static defaultFormatter = (cell, row) => {
        return cell;
    }

    static formatDate = (date, splitter="/") => { 
      if (!date) return "";
      if(typeof date === "string") date = new Date(date);
  
      let month = date.getMonth()+1;
      month = month<=9? "0"+month:month;
  
      let day = date.getDate();
      day = day<=9?"0"+day:day;
  
      let year = date.getFullYear();
      
      const r = day+splitter+month+splitter+year;
      return r;
    }; 

    static formatTime = (date) => { 
      if (!date) return "";
      if(typeof date === "string") date = new Date(date);
  
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      
      const r = hours+":"+minutes+":"+seconds;
      return r;
    }; 

    static formatDateTime = (date, dateSplitter="/")=>{
      const result = this.formatDate(date)+" "+this.formatTime(date);
      return result;
    }
  
}

