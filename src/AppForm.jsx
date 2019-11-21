import React from 'react'

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: true,
            name: '',
            age: '',
           contact:'',
            isActive:'',
            warnContact:'',
            disableSubmit:true
        }

        this.handleClick = this.handleClick.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        }



        submitHandler = (event) =>{
            event.preventDefault();


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
    //email validation regular expresion:
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
            
    if(this.state.age<18)
    {
        if(this.state.contact<=9999999 ||this.state.contact>99999999)
        {
            this.setState({warnContact:"wrong phone number",
                                    disableSubmit:true});

        }
        else{
            this.setState({warnContact:'',
                             disableSubmit:false});
        }
    }
    else
    {
        if(re.test(this.state.contact))
        {
            this.setState({warnContact:'',
                            disableSubmit:false});
            
        }
        else
        {
            this.setState({warnContact:'wrong email',
                                disableSubmit:true});
        }
    }

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
                <ul>{(this.state.age<18)?"Parent Phone No":"Email"} {(this.state.age<18)?<input type="number" name='contact' value={contact} onChange={this.inputChangeHandler}/>
                : <input type="text" name='contact' value={contact} onChange={this.inputChangeHandler}/>} <a style={{color: "red"}}>{this.state.warnContact}</a></ul>
                <input type="submit" value="Submit" disabled={this.state.disableSubmit}/>
            </form>
            <button onClick={this.handleClick}>Cancel</button>
            </a>:<button onClick={this.handleClick}> Add an employee</button>}

            </div>
        );
        }
}
export default AddEmployee