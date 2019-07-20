import React, { Component } from "react";
import StateUtil from './../utils/StateUtil';

export default class ItemPicker extends Component {
  state = {
    val: null
  }
    render() {
        const {items, error, placeholder, component, onValueChange} = this.props;
        
        const pickerItems = items.map((item, index)=>{
            return <option key={index} value={item.id}>{item.name}</option>
        })

        return (
            <div style={styles.sectionInput}>
              <select
                style={styles.picker} 
                placeholder={placeholder}
                onChange={event => {
                  const val = event.target.value;

                    if(onValueChange){
                      onValueChange(val);
                    }
                    // this.setState({val: val});
                    StateUtil.handleFieldChange(this, val);
                    console.log(component.state);
                  } 
                }
                value={this.state.val}
              >
                {pickerItems}
              </select>
            </div>
        )
    }
}

const styles = {
    picker:{
      height:"100%", width:"100%",marginLeft:0, paddingLeft: 0
    },
    pickerText:{
      paddingLeft:5
    },
    pickerPlaceHolder:{
      color:"#666666", paddingLeft: 5 
    },
    pickerPlaceHolderError:{
      color:"red", paddingLeft: 5 
    },
    sectionInput: {
      width: "100%",
      borderWidth: 0.3,
      borderRadius: 2,
      height: 40,
      marginTop: 10,
    },
    errorInput: {borderColor:"red", borderWidth:1}
  };
  