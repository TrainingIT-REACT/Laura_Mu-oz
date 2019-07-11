import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import "@babel/polyfill";


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


//Service workier 
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
            console.log("El service worker se ha instalado correctamente");
        })
        .catch((err) => {
            console.log(err)
        })
    })
}