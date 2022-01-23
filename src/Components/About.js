import React, {Component} from 'react';
import {SERVER_URL} from "../Config/const";


class About extends Component {
    render() {
        if (this.props.data) {
            var bio = this.props.data.bio.map((each) => {
                return <p>{each}</p>
            })
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var resumelink = this.props.data.resumedownload;
            var profilepiclink = this.props.data.image;
            var email = this.props.data.email;
            var phonenumber = this.props.data.phone;

        }
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
        );
    }
}

export default About;
