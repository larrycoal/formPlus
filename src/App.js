import React, { Component } from 'react';
import Form from './components/form'
import Template from './components/template'
import {connect} from 'react-redux'
import {template} from './Store/action'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(template())
  }
  
  render() {
    return (
      <div className="main_wrapper">
        <Form />
        <Template />
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
 return state.template
}
export default connect(mapStateToProps)(App);