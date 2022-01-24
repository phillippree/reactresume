import React, {useState, useEffect} from 'react'
import {Button} from "reactstrap"
import {Bar} from "react-chartjs-2"


const Work = props => {
    const [data, setData] = useState(null)
    const [currentTab, setCurrentTab] = useState("python")

    const renderWork = () => {
        return data.work.map(w => {
            return <div className="row item">
                <div className="twelve columns">
                    <h3>{w.company}</h3>
                    <p className="info">{w.title}</p>
                    <p className="date">{w.years}</p>
                    {w.description.map((each) => {
                        return <p className={'description'}>&bull;{each}</p>
                    })}
                </div>
            </div>
        })
    }

    const renderBtns = () => {
        const onClick = e => {
            let val = e.target.value
            setCurrentTab(val.toLowerCase())
        }
        let colors = ["primary", "secondary", "success", "info", "warning"]
        let btns = data.skills.map((e,i) => {
            return <Button
                onClick={onClick}
                active={e.topic.toLowerCase() === currentTab}
                color={colors[i]}
                size="lg"
                outline
                value={e.topic}
                style={{marginRight: "1em"}}
            >{e.topic}!!</Button>
        })
        return (
            <div style={{marginLeft: "2em"}}>
                {btns}
            </div>
        )
    }

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };

    const renderSkills = () => {
        return data.skills.map(e => {
            if(e.topic.toLowerCase() === currentTab){
                let labels = e.list.map(each => each.name)
                let dataset = {
                    label: e.topic,
                    data: [2,3,2,2,3,2,4],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                }
                let chartdata = {
                    labels,
                    dataset
                }
                console.log(e.list.map(each => parseInt(each.level)))
                return (
                    <div className={'bars'}>
                        <h3 className={'bar-header'}>{e.topic} <i className={e.className}></i></h3>
                        <div>
                            <Bar data={chartdata} options={options}/>
                            {/*{e.list.map((eachTopic) => {*/}
                            {/*    return (*/}
                            {/*        <div>*/}
                            {/*            <div className={'bar-title'}>{eachTopic.name}</div>*/}
                            {/*            <div className="progress">*/}
                            {/*                <div className="progress-bar" role="progressbar" aria-valuenow="60"*/}
                            {/*                     aria-valuemin="0"*/}
                            {/*                     aria-valuemax="100" style={{width: eachTopic.level}}>*/}
                            {/*                    {eachTopic.level}*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    )*/}
                            {/*})}*/}
                        </div>
                    </div>
                )
            }
        })
    }

    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [props])

    if (data) {
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
                                    {renderWork()}
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
                                    <div>
                                        {renderBtns()}
                                    </div>
                                    <div className="bars">
                                        <ul className="skills">{renderSkills()}</ul>
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
    return null
}


export default Work
