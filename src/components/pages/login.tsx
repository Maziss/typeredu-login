import * as React from 'react';
import Form from '../wrappers/Form';
interface LoginProps {};

interface LoginState {};

class Login extends React.Component<LoginProps, LoginState> {

    render(){
        return (
            <div>
                 <Form />
            </div>
        )
    }

}


export default Login;
