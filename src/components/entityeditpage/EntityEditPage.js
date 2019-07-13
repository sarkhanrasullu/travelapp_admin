import React, { Component } from "react";
import DynamicForm from "../dynamic_form/DynamicForm";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class EntityEditPage extends Component {
  state = {
    selectedEntity: {}
  };

  componentDidMount() {
     
  }

  handleSubmitBtn() {
    console.log("button clicked");
  }

  render() {
    
    return (
      <MDBContainer style={{ margin: "auto"}}>
        <MDBRow>
        <MDBCol md={3}></MDBCol>
        <MDBCol md={6}>
            <DynamicForm
              component={this}
              selectedEntity={this.state.selectedEntity}
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

export default EntityEditPage;
