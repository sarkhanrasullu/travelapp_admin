import React, { Component } from 'react'
import { MDBTable,MDBIcon, MDBTableHead, MDBTableBody, MDBNavLink, MDBBtn} from 'mdbreact';
import {PaginationWrapper} from '../pagination/PaginationWrapper';
import {StateUtil} from '../utils/StateUtil';
import {ModalYesNo} from '../modalyesno/ModalYesNo';

export class DataTableComponent extends Component {
 
    state = {
        selectedRowData:null,
        modalState:{
            show:false
        }
    }

    render() {
        return this.renderTable();
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

    appendEdit(row, data){
        row.push(
            <td key={"edit"}>
                <MDBNavLink to={""}>
                    <MDBIcon size="lg" far icon="edit" onClick={()=>{this.props.handleEdit(data.id)}}/>
                </MDBNavLink>
            </td>
        )
    }

    appendRemove(row, data){
        row.push(
            <td key={"remove"}>
                <MDBNavLink to={"#"}>
                    <MDBIcon onClick={()=>{this.toggle(data)}} size="lg" far icon="trash-alt" />
                </MDBNavLink>
            </td>
        )
    } 

    toggle = (data)=>{
        const {modalState} = this.state;
        this.state.selectedRowData = data;
        modalState.show = !modalState.show;
        this.setState({});
    }
 
    renderBody(){
        const {data, columns} = this.props; 
        console.log(data);
        if(!data || data.length===0||!columns || columns.length===0) return null;

        const result= data.map((row, index)=>{
            const resRow = columns.map((column, index)=>{
                // console.log(row);
                // console.log(column);
                let data = StateUtil.renderData(row, column); 
                //console.log(data);
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
       const {handleRemove} = this.props;
       const result = (
           <React.Fragment>
               <PaginationWrapper/>
                <MDBBtn onClick={()=>{this.props.handleAdd()}}>Add</MDBBtn>
                <MDBTable bordered className={"table-sm"}>
                    <MDBTableHead>
                        {this.renderHeader()}
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.renderBody()}
                    </MDBTableBody>
                </MDBTable>
                <PaginationWrapper/>
                <ModalYesNo state={this.state.modalState} onClickYes={()=>handleRemove(this.state.selectedRowData)}/>
            </React.Fragment>
       )

       return result;
    }
}
 
