import React, {Component} from 'react';

class Education extends Component {

    constructor(props){
        super(props)
    }
    render() {
        if (this.props.data){
            var education = this.props.data.education.map(function (education) {
                return <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{education.school}</h3>
                                        <p className="info">{education.degree}</p>
                                        <p ><em className="date">{education.graduated}</em></p>
                                      {education.description.map((each)=>{
                                        return <p>&bull;{each}</p>
                                      })}
                                    </div>
                                </div>


            });
        }
        return (
            <div className="App">
                <div className="App-header">
                    <section id="resume">
                        <div className="row">
                            <div className="three columns header-col">
                                <h1><span><i className='fa fa-university'></i>Education</span></h1>
                            </div>
                            <div className="nine columns main-col">
                                {education}

                            </div>
                        </div>
                    </section>
                </div>

            </div>
    );
    }
    }

    export default Education;
