import React, { Component } from 'react'
import DataTableComponent from '../../components/datatable/DataTableComponent';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel';


class EntityListPage extends Component {
    componentDidMount(){
      this.props.onLoad(this.props.endpoint);
    }
    render() {
        const {list, endpoint} = this.props;
        const {columns,photoDataFields,dateDataFields,ignoreDataFields} = this.props.tableProps;
        const {searchProps} = this.props;
        return (
          <React.Fragment>
            <SearchPanel 
              searchDataFields={searchProps.searchDataFields}
              />
            <DataTableComponent 
                endpoint={endpoint}
                data={list}  
                columns={columns}
                photoDataFields={photoDataFields}
                dateDataFields={dateDataFields}
                ignoreDataFields={ignoreDataFields}
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