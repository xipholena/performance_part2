import React, {Component} from 'react';

export default function asyncComponent(importComponent) { //as long as it is HOC it accepts components
    class AsyncComponent extends Component{
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const {default: component} = await importComponent() //destructured from App - onRouteChange - promise or App - render - AsyncComponent which accepts promise returned by import statement
            this.setState({
                component: component //accepted in then listener of returned promise
            })
        }
        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props}/> : null;
        }
    }
    return AsyncComponent;
}