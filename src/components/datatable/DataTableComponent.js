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
        const {columns} = this.props; 
        const result= columns.map((column, index)=>{
            if(column.type!=="empty"){
                return <th key={"h"+index}>{column.label}</th>
            }

            return null;
        });
        result.push(
            <th style={{width:60}} key={"edit"}></th>
        )
        result.push(
            <th style={{width:60}} key={"remove"}></th>
        )
         
       return (<tr>{result}</tr>);
    }

    appendEdit(row, rowData){
        row.push(
            <td key={"edit"}>
                <MDBNavLink to={this.props.endpoint+"/"+rowData.id}>
                    <MDBIcon size="lg" far icon="edit" />
                </MDBNavLink>
            </td>
        )
    }

    appendRemove(row, rowData){
        row.push(
            <td key={"remove"}>
                <MDBNavLink to={this.props.endpoint+"/"+rowData.id}>
                    <MDBIcon size="lg" far icon="trash-alt" />
                </MDBNavLink>
            </td>
        )
    }

    renderBody(){
        const {data, columns} = this.props; 
        const result= data.map((row, index)=>{
            const resRow = columns.map((column, index)=>{
                let data = StateUtil.renderData(row, column);
                if(data===null) return null;
                return <td style={{height:10}} key={"btd"+index}>{data}</td>
            });
            this.appendEdit(resRow, row);
            this.appendRemove(resRow, row);
            return (<tr key={"btr"+index}>{resRow}</tr>)
        });
        

       return result;
    }

    renderTable(){
       const result = (
           <React.Fragment>
               <PaginationWrapper/>
                <MDBTable bordered className={"table-sm"}>
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
 
