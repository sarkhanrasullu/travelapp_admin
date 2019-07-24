import React, { Component } from "react";
import DynamicForm from "../dynamic_form/DynamicForm";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import EntityService from "../../services/EntityService";
import { withRouter } from "react-router-dom";
import LoadingSpinner from "../spinner/LoadingSpinner";

class EntityEditPage extends Component {

  state = {
    loading: false
  }
  entityService = new EntityService(this);

  componentDidMount() {
      const edit = this.props.match.params.entityId>0;
      this.entityService.loadBrands(this);
      if(edit){
        const endpoint = this.props.select_endpoint?this.props.select_endpoint:this.props.endpoint;
        this.entityService.loadItem(endpoint+"/"+this.props.match.params.entityId, this.props.projection);
      }

  }

  handleSubmitBtn=(target) =>{
    console.log('save');
    console.log(target);
    this.entityService.saveItem(this.props.endpoint, target, this.props.callback_url);
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
