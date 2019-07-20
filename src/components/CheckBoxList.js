import React, { Component } from 'react'

export default class CheckBoxList extends Component {

    state = {
        items:[],
    }

    handleOnPress = (item)=>{
        const {onChecked, component} = this.props;
        item.checked = !item.checked;
        component.setState({});
        if(onChecked) onChecked(item);
    }

    render() {
        const {items} = {...this.props};
        const listItems = items.map((item, index)=>{
            return (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={()=>this.handleOnPress(item)} />
                    <label style={{paddingLeft:3}}>
                        {item.name}
                    </label>
                    </div>
            )
        })
        return (
            <div style={styles.wrapper}>
                {listItems}
            </div>
        )
    }
}

const styles = {
    wrapper :{
        marginTop:20,
        width:"100%"
    },  
    item:{
        width:"100%", 
        paddingLeft:0, 
        marginLeft:0
    },
}
