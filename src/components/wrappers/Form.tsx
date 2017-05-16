import * as React from 'react';
import Input from './../comp/Input';





class Form extends React.Component<any, {}> {
    

    constructor(props: any) {
        super(props);  
    }

   
   // tslint:disable-next-line:one-line
   render(){ 
   
        return(
        <form>
            <Input type="text" name="username" autoComplete="off" />
            <br />
            <Input type="password" name="password" autoComplete="off" />
            <br />
            <Input type="password" name="password-re" autoComplete="off" />
            <br />
            <input type="submit" value="submit" /> 
        </form>
    
    
    )}

}

export default Form;

