import React from 'react';
import logo from './bcode_logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                > Learn React
                </a>
            </header>
            <Layout>
                <BurgerBuilder/>
            </Layout>
        </div>

    );
}

export default App;
