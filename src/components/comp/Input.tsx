import * as React from 'react';

interface InputProps {type: string, name: string, autoComplete: string};

interface InputState {value: string};


class Input extends React.Component<InputProps, InputState> {
    constructor(props: any){
        super(props);

        this.state = {
            value: this.props.name,
        }

    }

     handleChange(event: any){
        
        this.setState({
            value: event.target.value
        })
        
        
       

    }
    render(){
      
        const props = { type: this.props.type, name: this.props.name, id: this.props.name, autoComplete: this.props.autoComplete };

        return (
        <label>
            <input {...props} value={this.state.value} onChange={(e) => this.handleChange(e)} className="form-control" />
        </label>
        )}
    }
export default Input;
