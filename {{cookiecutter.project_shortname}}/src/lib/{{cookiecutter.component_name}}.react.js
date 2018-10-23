import React from 'react';
import PropTypes from 'prop-types';

import Typed{{cookiecutter.component_name}} from './components/{{cookiecutter.component_name}}';
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class {{cookiecutter.component_name}} extends Component {
    render() {
        return (<Typed{{cookiecutter.component_name}} {...this.props} />);
    }
}

{{cookiecutter.component_name}}.defaultProps = {};

{{cookiecutter.component_name}}.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
