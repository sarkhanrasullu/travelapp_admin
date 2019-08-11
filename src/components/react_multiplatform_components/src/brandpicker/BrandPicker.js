import React, { Component } from 'react'
import {ItemPicker} from "../itempicker/ItemPicker";
import {connect} from 'react-redux';
import {setBrands, setModels} from '../../../../store/actions/index';
import EntityService from '../../../../services/EntityService';
class BrandPicker extends Component {

    service = new EntityService(this);

    componentDidMount(){
        this.service.loadBrands();
    }
    render() {
        const {name, component, error, brands} = this.props;
        return (
            <ItemPicker 
                        onValueChange   ={(brandId)=>{this.service.loadModels(brandId)}}
                        items           ={brands}  
                        placeholder     ={"select"}
                        error           ={error}
                        component       ={component} 
                        name            ={name}
            />
        )
    }
}

const state = state =>({
    brands: state.entities.brands
})

const actions = {
    setBrands,
    setModels,
}

export default connect(state, actions)(BrandPicker);

