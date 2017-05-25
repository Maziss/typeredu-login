import * as React from 'react';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import FormWrapper from '../wrappers/Form';


class Login extends React.Component<any, any> {

 

    render(){

        return (
            <div>
                <FormWrapper />
            </div>
        )
    }

}


const mapDispatchToProps = (dispatch: any): any => {
    let boundActions = bindActionCreators<any, any>(actions, dispatch);
    return {
        actions: boundActions
    }
  
}

export default connect(null , mapDispatchToProps)(Login);
