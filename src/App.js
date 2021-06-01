import React, { Component } from 'react';
import Form from './components/form'
import Template from './components/template'
import {connect} from 'react-redux'
import {template} from './Store/action'


class App extends Component {
  state = {
    fetchedTemplate:[],
    filteredTemplate:[]
  }

  componentDidMount(){
    this.props.dispatch(template()).then(()=>{
      this.setState({
        fetchedTemplate:this.props.template,
        filteredTemplate:this.props.template
      })
    })
  }

  render() {
    return (
      <div className="main_wrapper">
        <Form/>
        <Template template={this.state.filteredTemplate}/>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
 return state.template
}
export default connect(mapStateToProps)(App);