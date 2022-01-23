import React, {Component, useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Education from './Components/Education'
import Work from './Components/Work'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import axios from "axios"
import {SERVER_URL} from "./Config/const";


import 'react-image-gallery/styles/css/image-gallery.css'

export const App = () => {
    const [data, setData] = useState(null)

    const getData = async () => {
        let resp = await axios.get(SERVER_URL + "/data.json")
        setData(resp.data)
    }

    useEffect(() => {
        getData()
    }, [])

    if (data) {
        return (
            <div className="App">
                <div className="App-header">
                    <div>
                        <Header data={data.main}/>
                        <About data={data.main}/>
                        <Work data={data.resume}/>
                        <Education data={data.resume}/>
                        <Portfolio data={data.portfolio}/>
                        <Contact data={data.main}/>
                    </div>
                </div>
            </div>
        )
    }
    return null


}


export default App;
