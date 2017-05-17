import * as React from 'react';
import FormWrapper from '../wrappers/Form';
interface LoginProps {};

interface LoginState {};

class Login extends React.Component<LoginProps, LoginState> {

    render(){
        return (
            <div>
                 <FormWrapper />
            </div>
        )
    }

}


export default Login;
