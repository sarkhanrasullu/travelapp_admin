import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StateUtil from "../../utils/StateUtil";

class DynamicForm extends Component {
  handleSubmitBtn() {}
 
  renderItem = (item)=>{
      console.log(item);
      const ignoreDataFields = this.props.formProps ? this.props.formProps.ignoreDataFields:null;
      const photoDataFields = this.props.formProps ? this.props.formProps.photoDataFields:null;
      const dateDataFields = this.props.formProps? this.props.formProps.dateDataFields:null;
      return StateUtil.renderFormData(this.props.selectedEntity, item, ignoreDataFields, photoDataFields, dateDataFields);
  }

  renderSections = ()=>{
    const {sections} = this.props;
    const sectionsComponent =  sections.map((section)=>{
        const items = section.items;
        const itemsComponent = items.map((item, index)=>{
                return <MDBCol md="6" key={index}>{this.renderItem(item)}</MDBCol>; 
        });
        return <MDBRow>{itemsComponent}</MDBRow>;
      });

      return sectionsComponent;
  }

  renderSubmitButtons = ()=>{
    let submitComponent = null;
    if(this.props.submit)
        submitComponent = (
            <MDBRow>
                <MDBCol >
                    <span className="text-danger">{this.props.errorMsg}</span>
                    <div className="text-center">
                        <MDBBtn color="light-blue" onClick={this.props.submit.action}>
                            {this.props.submit.label}
                        </MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>)

    return submitComponent;
  }

  render() {
    console.log(this.props.selectedEntity);
    const sectionsComponent = this.renderSections();
    const submitComponent = this.renderSubmitButtons();
    return (
        <MDBContainer style={{ margin: "auto" }}>
                {sectionsComponent}
                {submitComponent}
        </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: isLoading => dispatch(actions.setLoading(isLoading))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DynamicForm));
