import * as React from 'react';

interface InputProps {type: string, name: string, autoComplete: string, value: string, handleChange: any};

interface InputState {value: string};


class Input extends React.Component<InputProps, InputState> {
    constructor(props: any){
        super(props);
    }



    render(){
      
        const props = { type: this.props.type, name: this.props.name, id: this.props.name, autoComplete: this.props.autoComplete };

        return (
        <label>
            <input {...props} value={this.props.value} onChange={this.props.handleChange} className="form-control" />
        </label>
        )}
    }
export default Input;
