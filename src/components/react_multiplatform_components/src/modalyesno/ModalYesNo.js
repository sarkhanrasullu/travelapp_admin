import React, { Component } from 'react'
import {ModalWrapper} from '../modalwrapper/ModalWrapper';
import {MDBBtn} from 'mdbreact';

export class ModalYesNo extends Component {


    toggle = ()=> {
        const {state} = this.props;
        state.show = !state.show;
        this.setState({});
    }

    renderYesButton = ()=>{
        const {onClickYes} = this.props;
        return <MDBBtn color="primary" onClick={onClickYes}>Yes</MDBBtn>
    }

    renderNoButton = () =>{
        return <MDBBtn color="secondary" onClick={this.toggle}>No</MDBBtn>
    }

    render() {
        const {title, state} = this.props;

        return (
            <ModalWrapper 
                show={state.show} 
                toggle={this.toggle}
                header={title?title:"Are you sure?"}
                footer={
                    [
                        this.renderYesButton(),
                        this.renderNoButton()
                    ]
                } />
        )
    }
}
