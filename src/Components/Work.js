import React, { Component } from 'react'

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

        return (
          <div className={'bars'}>
            <h3 className={'bar-header'}>{each.topic} <i className={each.className}></i></h3>

            <div>
              {each.list.map((eachTopic) => {
                return (
                  <div>
                    <div className={'bar-title'}>{eachTopic.name}</div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
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
