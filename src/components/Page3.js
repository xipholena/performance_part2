import React from 'react';
import logo from '../logo.svg';
import {Link} from "react-router-dom";

const Page3 = () => {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
        <Link to="/"><button>Page1</button></Link>
        <Link to="./page2"><button>Page2</button></Link>
        <button className="disabled">Page3</button>
    </div>
}
export default Page3;