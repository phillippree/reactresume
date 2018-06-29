import React, { Component } from 'react'
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts'

const data3 = [
    { subject: 'Math', A: 120, B: 120, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
]

class Work extends Component {
  render () {
    if (this.props.data) {
      var work = this.props.data.work.map(function (work) {
        return <div className="row item">
          <div className="twelve columns">
            <h3>{work.company}</h3>
            <p className="info">{work.title}</p>
            <p className="date">{work.years}</p>
            {work.description.map((each) => {
              return <p className={'description'}>&bull;{each}</p>
            })}
          </div>
        </div>

      })
      var skillDescription = this.props.data.skills_description


      var skill = this.props.data.skills.map(function (each) {
        if (each.list.length > 2){
            return (
                <div className={'bars'}>
                    <h3 className={'bar-header'}>{each.topic} <i className={each.className}></i></h3>

                    <div>
                        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={450} data={each.list}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis domain={[0,100]}/>
                            <Radar name="Mike" dataKey="level" stroke="#040c19" fill="#072e6d" fillOpacity={0.65}/>
                        </RadarChart><br/>
                    </div>
                </div>
            )
        }else{
            return (
                <div className={'bars'}>
                    <h3 className={'bar-header'}>{each.topic} <i className={each.className}></i></h3>

                    <div>
                        {each.list.map((eachTopic) => {
                            return (
                                <div>
                                    <div className={'bar-title'}>{eachTopic.name}</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                             aria-valuemin="0"
                                             aria-valuemax="100" style={{width: eachTopic.level}}>
                                            {eachTopic.level}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }


      })
    }
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <section id="work">
              <div className="row">
                <div className="three columns header-col">
                  <h1><span><i className={'fa fa-briefcase'}></i>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                  {work}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="App">
          <div className="App-header">
            <section id="skill">
              <div className="row">
                <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                  <p>{skillDescription}</p>
                  <div className="bars">
                    <ul className="skills">{skill}</ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <hr/>
        </div>
      </div>
    )
  }
}

export default Work
