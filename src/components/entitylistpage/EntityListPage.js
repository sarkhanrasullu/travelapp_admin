import React, { Component } from 'react'
import {DataTableComponent, DynamicForm, LoadingSpinner} from '../react_multiplatform_components';
import EntityService from '../../services/EntityService';

class EntityListPage extends Component {
  
    state = {
      list:[],
      page:1,
      loading: true
    }
    
    service_entity = new EntityService(this, this.props.endpoint_select, this.props.endpoint_add_or_save, this.props.endpoint_delete);

    componentDidMount(){
        this.service_entity.loadItems();
    }

    renderBody = ()=>{
      const {columns} = this.props.tableProps;
      const {list} = this.state;
      if(this.state.loading){
        return <LoadingSpinner/>;
      }else{
           return <DataTableComponent 
                handleRemove={this.handleRemove}
                handleAdd={this.handleAdd}
                handleEdit={this.handleEdit}
                data={list}  
                columns={columns} />
      }
    }

    handleRemove = (data)=>{
      this.service_entity.removeItem(data.id)
    }

    handleAdd = ()=>{
      window.location.href= window.location.href+"/create";
    }

    handleEdit = (id)=>{
      window.location.href= window.location.href+"/"+id;
    }

    render() {
        return (
            <React.Fragment>
              <DynamicForm 
                  sections={
                    [
                      { 
                        rows: this.props.searchFields
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