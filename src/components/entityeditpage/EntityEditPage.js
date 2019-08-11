import React, { Component } from "react";
import {DynamicForm, LoadingSpinner} from "../react_multiplatform_components";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import EntityService from "../../services/EntityService";
import { withRouter } from "react-router-dom";

class EntityEditPage extends Component {

  state = {
    loading: false,
    target:{}
  }

  entityService = new EntityService(this, this.props.endpoint_select, this.props.endpoint_add_or_save);

  componentDidMount() {
      const edit = this.props.match.params.entityId>0;
      if(edit){
        this.entityService.loadItem(this.props.match.params.entityId);
      }
  }

  getRedirectUrl = ()=>{
    var arr = window.location.href.split('/');
    var lastOne = "/"+arr[arr.length-1];
    var redirect_url = window.location.href.replace(lastOne,"");
    return redirect_url;
  }

  handleSubmitBtn=(target) =>{
    this.entityService.saveItem(target, this.getRedirectUrl());
  }

  render() {
    if(this.state.loading){
      return <LoadingSpinner/>;
    }

    const {fullscreen} = this.props;
    
    return (
      <MDBContainer style={{ margin: "auto"}}>
        <MDBRow>
            {fullscreen?null:<MDBCol md={3}></MDBCol>}
            <MDBCol md={fullscreen?12:6}>
                <DynamicForm
                  target={this.state.target}
                  sections={[
                    {
                      rows: this.props.formFields
                    }
                  ]}
                  submit={{
                    label: "Save",
                    action: this.handleSubmitBtn
                  }}
                />
              </MDBCol>
          </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(EntityEditPage);
