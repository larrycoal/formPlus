import React, { Component } from 'react';
import Form from './components/form'
import Template from './components/template'
import {connect} from 'react-redux'
import {template} from './Store/action'


class App extends Component {
  state = {
    fetchedTemplate:[],
    filteredTemplate:[],
    category:"All"
  }

  componentDidMount(){
    this.props.dispatch(template()).then(()=>{
      this.setState({
        fetchedTemplate:this.props.template,
        filteredTemplate:this.props.template
      })
    })
  }
  filter(formInput){
    //modifies filtered data which can be fetched data or previously modified data
      if(formInput.name === "search"){
        let newTemplate = this.state.filteredTemplate
        let filtered = newTemplate.filter((template)=>{
              return template.name.match(formInput.value)
        })
        this.setState({
          ...this.state,
          filteredTemplate:filtered
        })
        //modifies fectched data from api
      }else if(formInput.name === "category"){
        let newTemplate = this.state.fetchedTemplate
        if(formInput.value === "All"){
          this.setState({
            ...this.state,
            filteredTemplate:this.state.fetchedTemplate,
            category:formInput.value
          })
        }else{
          let filtered = newTemplate.filter((template)=>{
            return template.category === formInput.value
      })
      this.setState({
        ...this.state,
        filteredTemplate:filtered,
        category:formInput.value
      })
        }
      }
      //modify order by name
      else if(formInput.name === "order"){
        let newTemplate = this.state.fetchedTemplate
        let ordered = newTemplate.sort((a,b)=>{
          let name1 = a.name.toUpperCase()
          let name2 = b.name.toUpperCase()
          if(name1 < name2){
            return -1
          }
          if(name1 > name2){
            return 1
          }
            return 0
        })
         if(formInput.value === "Ascending"){
           this.setState({
             ...this.state,
             filteredTemplate:ordered
           })
         }else if(formInput.value === "Descending"){
          this.setState({
            ...this.state,
            filteredTemplate:ordered.reverse()
          })
         }else if(formInput.value === "Default"){
          this.setState({
            ...this.state,
            filteredTemplate:this.state.fetchedTemplate
          })
         }
      }else if(formInput.name === "date"){
        let newTemplate = this.state.filteredTemplate
        let ordered = newTemplate.sort((a,b)=>{
          return b.date - a.date
          
        })
         if(formInput.value === "Ascending"){
           this.setState({
             ...this.state,
             filteredTemplate:ordered
           })
         }else if(formInput.value === "Descending"){
          this.setState({
            ...this.state,
            filteredTemplate:ordered.reverse()
          })
         }else if(formInput.value === "Default"){
          this.setState({
            ...this.state,
            filteredTemplate:this.state.filteredTemplate
          })
         }
      }

  }
  render() {
    return (
      <div className="main_wrapper">
        <Form filter={(input)=>this.filter(input)}/>
        <Template template={this.state.filteredTemplate} category={this.state.category}/>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
 return state.template
}
export default connect(mapStateToProps)(App);