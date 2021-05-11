import React, {Component, Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';


const Page1 = lazy(() => import('./components/Page1'));
const Page2 = lazy(() => import('./components/Page2'));
const Page3 = lazy(() => import('./components/Page3'));
class App extends Component {

    onRouteChange = (route) => {
        this.setState({route:route})
    }

    render() {
        console.log(Router, Route, Switch, lazy)
        return (
            <div>
                 <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Page1}/>
                            <Route path="/page2" component={Page2}/>
                            <Route path="/page3" component={Page3}/>
                        </Switch>
                    </Suspense>
                </Router>
            </div>

        )
    }

}

export default App;
