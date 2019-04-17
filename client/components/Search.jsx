import React from 'react'

  export default class WidgetForm extends React.Component {
    constructor (props) {
      super(props)
   
      this.state = {
        search: ""
   }
   
}
  

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
      this.props.search(this.state.search)
    }
  
    handleSubmit = (e) => {
      this.setState({...defaultState})
      const widget = this.state
      this.props.save(widget)
      e.preventDefault()
    }
  
    render () {
      return (
        <form>
          <label>
            Search Book:
            <input 
            type="text" 
            name="search" 
            onChange={this.handleChange}
            value={this.state.search}
            />
          </label>
        </form> 
          )
    }
  }
  




