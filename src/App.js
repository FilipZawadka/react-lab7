import React from 'react'
import AppForm from './AppForm'
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        employees: [],
        isLoading: true
      };
    }
  
    componentDidMount() {
      this.setState({ isLoading:true});
      fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({ employees:data }))
      .then(() => {this.setState({ isLoading: false })});
    }
   
    
    render()
    {
      return(
        <div>
        <AppForm></AppForm>
            {this.state.isLoading ? <label>Loading...</label>:<label>Loaded {this.state.employees.length} elements: </label>}
            <p>
              {this.state.employees.map((emp) => <ul key={emp.id} style={emp.isActive ? {color: "blue"}: {color: "red"}}>{ emp.name} {emp.age} </ul>)}
            </p>
            
            
        </div>
      )
    }
}

export default App