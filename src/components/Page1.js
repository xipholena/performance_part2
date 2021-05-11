import React from 'react';
import logo from '../logo.svg';
import {Link} from "react-router-dom";

const Page1 = () => {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
        <button className="disabled">Page1</button>
        <Link to="./page2"><button>Page2</button></Link>
        <Link to="./page3"><button>Page3</button></Link>
    </div>
}
export default Page1;

<Link to="./page2"></Link>