import React, { Component } from "react";
import DynamicForm from "../dynamic_form/DynamicForm";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import EntityService from "../../services/EntityService";
import { withRouter } from "react-router-dom";
import LoadingSpinner from "../spinner/LoadingSpinner";

class EntityEditPage extends Component {
  state = {
    target: {}
  };

  entityService = new EntityService(this);

  componentDidMount() {
     this.entityService.loadItem(this.props.endpoint+"/"+this.props.match.params.entityId, this.props.target);
  }

  handleSubmitBtn=() =>{
     console.log(this.state.target)
  }

  render() {
    if(this.state.loading){
      return <LoadingSpinner/>;
    }
    
    return (
      <MDBContainer style={{ margin: "auto"}}>
        <MDBRow>
            <MDBCol md={3}></MDBCol>
            <MDBCol md={6}>
                <DynamicForm
                  component={this}
                  target={this.state.target}
                  sections={[
                    {
                      items: this.props.formDataFields
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
