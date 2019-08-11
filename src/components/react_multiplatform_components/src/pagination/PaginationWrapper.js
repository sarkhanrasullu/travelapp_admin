import React, { Component } from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

export class PaginationWrapper extends Component {
 
    render(){
      let count = 1;//this.props.page.totalPages;
      let currentPage = 1;//this.props.page.number;
      let rows = [];
      let pageIndex = 1;
      for(let i=0; i<count; i+=10){
          const indexParam = pageIndex;
          rows.push(
              <MDBPageItem key={i} active={pageIndex===currentPage} onClick={()=> {
                  this.props.loadFunc(indexParam); 
              } }>
                <MDBPageNav>
                  {pageIndex++}
                </MDBPageNav>
              </MDBPageItem>
          )
      }

      return ( 
            <MDBPagination className="mb-2 mt-2 justify-content-center">
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </MDBPageNav>
              </MDBPageItem>
              {rows}
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">&raquo;</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
        )
      }
}