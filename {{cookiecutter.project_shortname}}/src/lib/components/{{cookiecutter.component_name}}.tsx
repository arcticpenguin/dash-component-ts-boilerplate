import React, {Component} from 'react';

interface IProps {
    id?: string;
    label: string;
    value?: string;
    setProps?: (props: Partial<IProps>) => void;
}

interface IDefaultProps {

}

type PropsWithDefaults = IProps & IDefaultProps;

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class {{cookiecutter.component_name}} extends Component<PropsWithDefaults> {
    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id}>
                ExampleComponent: {label}&nbsp;
                <input
                    value={value}
                    onChange={e => {
                        /*
                         * Send the new value to the parent component.
                         # setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will send the data back to the
                         * Python Dash app server.
                         * If the component properties are not "subscribed"
                         * to by a Dash callback, then Dash dash-renderer
                         * will not pass through `setProps` and it is expected
                         * that the component manages its own state.
                         */
                         if (setProps) {
                             setProps({
                                value: e.target.value
                            });
                        } else {
                            this.setState({
                                value: e.target.value
                            })
                        }
                    }}
                />
            </div>
        );
    }
}