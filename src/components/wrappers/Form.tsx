import * as React from 'react';
import Input from './../comp/Input';
import { Form } from 'reactstrap';




class FormWrapper extends React.Component<any, {}> {
    

    constructor(props: any) {
        super(props);  
    }

   
   // tslint:disable-next-line:one-line
   render(){ 
   
        return(
        <Form>
            <Input type="text" name="username" autoComplete="off" />
            <br />
            <Input type="password" name="password" autoComplete="off" />
            <br />
            <Input type="password" name="password-re" autoComplete="off" />
            <br />
            <input type="submit" value="submit" /> 
        </Form>
    
    
    )}

}

export default FormWrapper;

