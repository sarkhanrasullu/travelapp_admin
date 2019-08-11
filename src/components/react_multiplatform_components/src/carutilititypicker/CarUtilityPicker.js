import React, { Component } from 'react'
import CheckBoxList from "../CheckBoxList";
import EntityService from '../../../../services/EntityService';

class CarUtilityPicker extends Component {
     
    service = new EntityService(this.props.component);

    componentWillMount(){
        this.service.loadCarUtilities()
    }
     
    render() {
        console.log(this.state);
        const {component} = this.props;
        return (
            <CheckBoxList 
            items={component.state.carUtilities} 
            component={component}
            />
        )
    }
}

export default CarUtilityPicker;