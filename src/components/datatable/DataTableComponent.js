import React, { Component } from 'react'
import { MDBTable,MDBBtn,MDBIcon, MDBTableHead, MDBTableBody, MDBNavLink } from 'mdbreact';
import PaginationWrapper from '../UI/PaginationWrapper';
import StateUtil from '../../utils/StateUtil';

export default class DataTableComponent extends Component {

    render() {
        const {data, columns} = this.props; 
        if(!data || data.length===0||!columns || columns.length===0) return null;
        return this.renderTable()
    }

    renderHeader(){
        const {columns, ignoreDataFields} = this.props; 
        const result= columns.map((column, index)=>{
            if(ignoreDataFields.indexOf(column.field)===-1){
                return <th key={"h"+index}>{column.label}</th>
            }

            return null;
        });
        result.push(
            <th key={"hActions"}>Actions</th>
        )
         
       return (<tr>{result}</tr>);
    }

    pushActions(row, rowData, key){
        row.push(
            <td key={key}>
                <MDBNavLink to={this.props.endpoint+"/"+rowData.id}>
                    <MDBBtn color="primary">
                        <MDBIcon far icon="edit" />
                    </MDBBtn>
                </MDBNavLink>
            </td>
        )
    }

    renderBody(){
        const {data, columns} = this.props; 
        const {ignoreDataFields, photoDataFields, dateDataFields} = this.props; 
        const result= data.map((row, index)=>{
            const resRow = columns.map((column, index)=>{
                let data = StateUtil.renderData(row, column.field, ignoreDataFields, photoDataFields, dateDataFields);
                if(data===null) return;
                return <td key={"btd"+index}>{data}</td>
            });
            this.pushActions(resRow, row, "btdActions");
            return (<tr key={"btr"+index}>{resRow}</tr>)
        });
        

       return result;
    }

    renderTable(){
       const result = (
           <React.Fragment>
               <PaginationWrapper/>
                <MDBTable bordered>
                        <MDBTableHead>
                            {this.renderHeader()}
                        </MDBTableHead>
                        <MDBTableBody>
                        {this.renderBody()}
                        </MDBTableBody>
                </MDBTable>
                <PaginationWrapper/>
            </React.Fragment>
       )

       return result;
    }
}
 
