/* eslint no-magic-numbers: 0 */
import * as React from 'react';

import { {{ cookiecutter.component_name }} } from '../lib';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <{{cookiecutter.component_name}}
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
