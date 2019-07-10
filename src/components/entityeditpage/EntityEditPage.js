import React, { Component } from "react";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DynamicForm from "../dynamic_form/DynamicForm";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class EntityEditPage extends Component {
  state = {
    target: {}
  };

  componentDidMount() {
    this.props.onLoad(
      this.props.endpoint + "/" + this.props.match.params.entityId
    );
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
              selectedEntity={this.props.selectedEntity}
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

const mapStateToProps = state => {
  console.log(state)
  return {
    selectedEntity: state.entity.selectedEntity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: url => dispatch(actions.loadItem(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EntityEditPage));
