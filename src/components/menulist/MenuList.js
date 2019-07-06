import React, { Component } from 'react'
import { MDBBtn, MDBNavLink} from 'mdbreact';

class MenuList extends Component {

  render() {
    return (
        <div>
            <h5>Menu</h5>
            <MDBBtn color="light-blue" className="mb-1" block>
                <MDBNavLink to="/users">
                  Users
                </MDBNavLink>
            </MDBBtn> 
            <MDBBtn color="light-blue" className="mb-1" block>
                <MDBNavLink to="/drivers">
                  Drivers
                </MDBNavLink>
            </MDBBtn> 
            <MDBBtn color="light-blue" className="mb-1" block>
                <MDBNavLink to="/guides">
                  Guides
                </MDBNavLink>
            </MDBBtn> 
            <MDBBtn color="light-blue" className="mb-1" block>
                <MDBNavLink to="/trips">
                  Trips
                </MDBNavLink>
            </MDBBtn> 
            <MDBBtn color="light-blue" className="mb-1" block>
                <MDBNavLink to="/feedbacks">
                  Feddbacks
                </MDBNavLink>
            </MDBBtn> 
            <MDBBtn color="light-blue" className="mb-1" block>
                <MDBNavLink to="/helps">
                  Helps
                </MDBNavLink>
            </MDBBtn> 
        </div>
    )
  }
}


export default MenuList;