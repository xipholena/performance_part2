import React from 'react';
import logo from '../logo.svg';
import {Link} from "react-router-dom";

const Page2 = () => {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
        <Link to="/"><button>Page1</button></Link>
        <button className="disabled">Page2</button>
        <Link to="./page3"><button>Page3</button></Link>
    </div>
}
export default Page2;