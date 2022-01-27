import React, {Component, useState, useEffect} from 'react';
import {SERVER_URL} from "../Config/const";



const About = props => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        if(props.data){
            setData(props.data)
        }
    }, [props])

    if (data){
        let name = data.name
        let resumelink = data.resumedownload
        let email = data.email
        let bio = data.bio.map((e,i)=> <p key={i}>{e}</p>)

        return (
            <div className="App">
                <div className="App-header">
                    <section id="about">
                        <div className="row">
                            <div className="three columns">
                                <img className="profile-pic" src={SERVER_URL + "/images/profilepic.jpg"} alt=""/>
                            </div>
                            <div className="nine columns main-col">
                                <h2>About Me</h2>
                                <div id="bio">{bio}</div>
                                <div className="row">
                                    <div className="columns contact-details">
                                        <h2>Contact Details</h2>
                                        <p className="address">
                                            <span>{name}</span><br/>
                                            <span>{email}</span><br/>
                                        </p>
                                    </div>
                                    <div className="columns download">
                                        <p>
                                            <a href={resumelink} download={'resume'} className="button"><i
                                                className="fa fa-download"></i>Download Resume</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
    return null

}


export default About;
