import React, {Component} from 'react';
import './App.css';
import Page1 from './components/Page1';
//import Page2 from './components/Page2';
//import Page3 from './components/Page3';
import AsyncComponent from './components/AsyncComponent'
class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'page1',
            component: null
        }
    };

    onRouteChange = (route) => {
        //Code Splitting in HOC AsyncComponent:
        this.setState({route:route})
        //with Code Splitting in App:
        /*if (route === 'page1') {
            this.setState({route: route})
        } else if (route === 'page2') {
            import('./components/Page2')
                .then((Page2) => {
                    console.log(Page2)
                    this.setState({route:route, component: Page2.default}) //component lies in this property
                })
        } else if (route === 'page3') {
            import('./components/Page3')
                .then((Page3) => {
                    this.setState({route:route, component: Page3.default}) //component lies in this property
                })
        }*/
    }

    render() {

        if (this.state.route === 'page1'){
            return <Page1 onRouteChange={this.onRouteChange}/>
        } else if (this.state.route === 'page2') {
            const AsyncPage2 = AsyncComponent(() => import('./components/Page2')) //component lies in  property default which is in promise returned by import
            return  <AsyncPage2 onRouteChange={this.onRouteChange}/>
        } else if (this.state.route === 'page3') {
            const AsyncPage3 = AsyncComponent(() => import('./components/Page3')) //component lies in  property default which is in promise returned by import
            return  <AsyncPage3 onRouteChange={this.onRouteChange}/>
        }
        /*if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange}/>
        } else {
            return <this.state.component onRouteChange={this.onRouteChange} /> //funny business
        }*/
    }

}

export default App;