import React, { Component } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

export default class DropDownList extends Component {
  render() {
    const {attributeValueList} = this.props;
    const dropDown = (
      <MDBDropdown size="sm">
        <MDBDropdownToggle caret color="info">
          {attributeValueList.key}
        </MDBDropdownToggle>
        <MDBDropdownMenu color="info" basic >
          {attributeValueList.attributeValues.map((av, index) => {
            return <MDBDropdownItem key={av.attribute_value_id}>{av.attribute_value}</MDBDropdownItem>;
          })}
        </MDBDropdownMenu>
      </MDBDropdown>
    );
    return dropDown;
  }
}
