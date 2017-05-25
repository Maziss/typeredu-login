import * as React from 'react';
import Input from './../comp/Input';
import { Form, Button } from 'reactstrap';


interface FormState {values: {username: string, password: string}}

class FormWrapper extends React.Component<any, FormState> {
    

    constructor(props) {
        super(props);  
        this.state = {
            values: {
                username: '',
                password: ''
            }
        }

    }

    handleClick(event: any){
        event.preventDefault();
        this.props.actions.sendingRequest(this.state.values);
        console.log("Clicked");
    }

    handleChange(event: any){
        const field = event.target.name;
        const credintials = this.state.values
        credintials[field] = event.target.value;
        return this.setState({values: credintials});

    }
   
   // tslint:disable-next-line:one-line
   render(){ 
   
        return(
        <Form>
            <Input value={this.state.values.username} type="text" name="username" autoComplete="off" handleChange={(e) => this.handleChange(e)}/>
            <br />
            <Input value={this.state.values.password} type="password" name="password" autoComplete="off" handleChange={(e) => this.handleChange(e)} />
            <br />
            <Button outline color="primary" onClick={(e) => this.handleClick(e)}>Submit</Button>
        </Form>
    
    
    )}

}


export default FormWrapper;

