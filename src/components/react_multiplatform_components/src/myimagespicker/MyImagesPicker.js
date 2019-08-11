import React, { Component } from 'react'
import {MDBBtn, MDBCol, MDBRow} from 'mdbreact'
import {MyImagePicker} from '../myimagepicker/MyImagePicker';
import {StateUtil} from '../utils/StateUtil';
import { InputFieldType, InputField } from '../datatable/DataTableTypes';

export class MyImagesPicker extends Component {

    render() {
        const { error, readOnly, component, item, key } = this.props;
        const {type, name} = item;
        let list = StateUtil.get(component.state, name);
        let imagePickerList = null;
        console.log(list);
        if(list!==null && list.length>0) {
            imagePickerList = list.map((image, index)=>{
                const nm = name+"."+index+".mediafile";
                return (
                    <MDBCol md={6}>
                        <MyImagePicker  
                            readOnly={readOnly} error={error} component={component}
                            item={new InputField(nm,"image", InputFieldType.IMAGE_URL)}
                            onDelete={()=>{this.handleDeleteBtn(index)}}/>
                    </MDBCol>
                );
            })
        }

        return <React.Fragment>
                <MDBRow key={key}>
                    {imagePickerList}
                </MDBRow>

                {this.renderAddButton()}
            </React.Fragment>
    }

    handleDeleteBtn = (i)=>{
        const {component, item} = this.props;
        let list = StateUtil.get(component.state, item.name);
        list = list.filter((item, index)=>index!==i);
        StateUtil.handleFieldChange(this, list);

        this.setState({});
    }

    handleAddBtn = ()=>{
        const {component, item} = this.props;
        let list = StateUtil.get(component.state, item.name);
        if(list===null || list.length===0){
            list=[];
        }
        const newItem = {mediafile:""};
        console.log(item);
        StateUtil.set(item.parent,newItem,  StateUtil.get(component.state, "target.id"));
        list.push(newItem);
        StateUtil.handleFieldChange(this, list, item.name);
        this.setState({});
    }

    renderAddButton = ()=>{
        return (
            <MDBBtn onClick={()=>{this.handleAddBtn()}}>Add</MDBBtn>
        )
    }
}
