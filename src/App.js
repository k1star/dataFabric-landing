import React from "react";
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ChatsBot from "./Components/ChatsBot";

function App() {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className="scroll-up">
                <svg className="scroll-up__svg" viewBox="-2 -2 52 52">
                    <path
                        className="scroll-up__svg-path"
                        d="
				M24,0
				a24,24 0 0,1 0,48
				a24,24 0 0,1 0,-48
				"
                    />
                </svg>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default App;