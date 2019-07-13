import React, { Component } from 'react'
import DataTableComponent from '../datatable/DataTableComponent';
import DynamicForm from '../dynamic_form/DynamicForm';
import EntityService from '../../services/EntityService';

class EntityListPage extends Component {
    state = {
      list:[],
      page:1
    }
    
    service_entity = new EntityService(this);

    componentDidMount(){
        this.service_entity.loadItems(this.props.endpoint);
    }
    render() {
        const {endpoint} = this.props;
        const {columns} = this.props.tableProps;
        const {list} = this.state;
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
                columns={columns} />
              </React.Fragment>
        )
    }
}
 
export default EntityListPage;