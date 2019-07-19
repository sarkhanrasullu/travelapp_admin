import React from 'react'

export default class CommonUtil {

    static imageFormatter = (data, column) => {
      const url = column.type==="image_base64"?`data:image/png;base64, ${data}`:data;
      return <img src={url} alt="thumbnail" className="img-thumbnail" style={{width:120}}/>;
    }

    static defaultFormatter = (cell, row) => {
        return cell;
    }

    static formatDate = date => { 
      if (!date) return "";
      if(typeof date === "string") date = new Date(date);
  
      let month = date.getMonth()+1;
      month = month<=9? "0"+month:month;
  
      let day = date.getDate();
      day = day<=9?"0"+day:day;
  
      let year = date.getFullYear();
      
      const r = day+"/"+month+"/"+year;
      return r;
    }; 
  
    static formatDateByDash = date => {
        if (!date) return "";
        if(typeof date === "string") date = new Date(date);
        let month = date.getMonth()+1;
        month = month<=9? "0"+month:month;
  
        let day = date.getDate();
        day = day<=9?"0"+day:day;
  
        let year = date.getFullYear();
        const r = year+"-"+month+"-"+ day;
        return r;
      }; 
  }