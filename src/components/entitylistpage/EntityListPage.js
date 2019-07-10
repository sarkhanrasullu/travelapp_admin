import React, { Component } from 'react'
import DataTableComponent from '../datatable/DataTableComponent';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import DynamicForm from '../dynamic_form/DynamicForm';


class EntityListPage extends Component {
    componentDidMount(){
      this.props.onLoad(this.props.endpoint);
    }
    render() {
        const {list, endpoint} = this.props;
        const {columns} = this.props.tableProps;
        return (
          <React.Fragment>
            <DynamicForm 
                sections={
                  [
                    { 
                      items: this.props.searchDataFields
                    }
                  ]
                }
                submit={{label:"Search", action:null}}/>
            <DataTableComponent 
                endpoint={endpoint}
                data={list}  
                columns={columns}
                />
              </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {  
  return {
      list: state.entity.list
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (url) => dispatch(actions.loadItems(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityListPage);