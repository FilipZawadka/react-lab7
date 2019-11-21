import React from 'react'

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: false,
            name: '',
            age: '',
            contact:'',
            isActive:''
        }

        this.handleClick = this.handleClick.bind(this);

        }

    handleClick()
    {
        this.setState((prevState) => ({
            show: !prevState.show
        }));
    }
    inputChangeHandler = (event) => {
        this.setState({
        [event.target.name]:event.target.value
    
    })
}
    render() {
        const {name,age,contact,isActive} = this.state
        return (
            <div>
            
            {this.state.show ? 
            <a>
                <form onSubmit={this.submitHandler}>
                
                <ul>Age <input type="number" name='age' value={age} onChange={this.inputChangeHandler}/></ul>
                <ul>{(this.state.age<18)?"Parent Name":"Name"} <input type="text" name='name' value={name} onChange={this.inputChangeHandler}/></ul>
                <ul>{(this.state.age<18)?"Parent Phone No":"Email"} <input type="text" name='contact' value={contact} onChange={this.inputChangeHandler}/></ul>
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={this.handleClick}>Cancel</button>
            </a>:<button onClick={this.handleClick}> Add an employee</button>}

            </div>
        );
        }
}
export default AddEmployee