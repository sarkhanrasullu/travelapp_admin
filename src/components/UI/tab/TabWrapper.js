// import React from "react";
// import {Tabs, Tab} from 'react-bootstrap';

// export default class TabWrapper extends React.Component {
  
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       key: 'home',
//     };
//   }

//   componentDidMount() {
//     const {navItems} = this.props;
//     const defaultActiveKey = navItems[0].tabHeader;
//     this.setState({key: defaultActiveKey})
//   }

//   render() {

//     const {navItems} = this.props;
//     return (
//       <Tabs
//         id="controlled-tab-example"
//         transition={false}
//         activeKey={this.state.key}
//         onSelect={key => this.setState({ key })}
//       >
//         {
//           navItems.map((navItem,index)=>{
//             const {tabHeader, tabContent} = navItem;
//             return (
//               <Tab  key={tabHeader} eventKey={tabHeader} title={tabHeader}>
//                   {tabContent}
//               </Tab>
//             )
//           })
//         }
//       </Tabs>
//     );
//   }
 
// }