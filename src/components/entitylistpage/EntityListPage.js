import React, { Component } from 'react'
import DataTableComponent from '../datatable/DataTableComponent';
import DynamicForm from '../dynamic_form/DynamicForm';
import EntityService from '../../services/EntityService';
import LoadingSpinner from '../spinner/LoadingSpinner';


class EntityListPage extends Component {
    state = {
      list:[],
      page:1,
      loading: true
    }
    
    service_entity = new EntityService(this);

    componentDidMount(){
        this.service_entity.loadItems(this.props.endpoint);
    }

    renderBody = ()=>{
      const {endpoint} = this.props;
      const {columns} = this.props.tableProps;
      const {list} = this.state;
      if(this.state.loading){
        return <LoadingSpinner/>;
      }else{
           return <DataTableComponent 
                endpoint={endpoint}
                data={list}  
                columns={columns} />
      }
    }
    render() {
        
       
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
                {this.renderBody()}
        </React.Fragment> 
            
        )
    }
}
 
export default EntityListPage;