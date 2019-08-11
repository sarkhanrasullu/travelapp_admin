import React, { Component } from "react";
import EntityService from "../../../../services/EntityService";
import './ItemPicker.css'
import { StateUtil } from "../utils/StateUtil";
export class ItemPicker extends Component {
    state = {
      val: null,
      list: []
    }

    service = new EntityService(this);

    componentDidMount(){
      const {item} = this.props;
      //console.log(item);
      if(item.endPoint!=null){
        this.service.loadItems(item.endPoint);
      }
    }

    render() {
        const {error, component, onValueChange, item} = this.props;

        let items = this.props.items;
        if(!items) items = this.state.list;
        const {label} = this.props.item;
        let pickerItemsTemp = null;
        if(items!=null){
          pickerItemsTemp = items.map((item_, index)=>{
              return <option key={index} value={item_[item.valueParam]}>{item_[item.displayParam]}</option>
          })
        }

        const selectOption = <option key={-1} value={null}>{"select"}</option>;

        const pickerItems = [
          selectOption,
          [...pickerItemsTemp]
        ]

        return (
              <select
                className="picker md-form"
                placeholder={label}
                onChange={event => {
                  const val = event.target.value;

                    if(onValueChange){
                      onValueChange(val);
                    }
                    // this.setState({val: val});
                    StateUtil.handleFieldChange(this, val, item.name, true);
                    //console.log(component.state);
                  } 
                }
                value={StateUtil.get(component.state, item.name)}
              >
                {pickerItems}
              </select>
        )
    }
}
 