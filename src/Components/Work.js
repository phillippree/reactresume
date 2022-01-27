import React, {useState, useEffect} from 'react'
import {Button} from "reactstrap"
import {Bar} from "react-chartjs-2"
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const getColor = (ind, transparency) => {
    let colors = [
        `rgba(255, 99, 132, ${transparency})`,
        `rgba(54, 162, 235, ${transparency})`,
        `rgba(255, 206, 86, ${transparency})`,
        `rgba(75, 192, 192, ${transparency})`,
        `rgba(153, 102, 255, ${transparency})`,
        `rgba(255, 159, 64, ${transparency})`,
    ]
    if (ind <= colors.length) {
        return colors[ind]
    } else {
        return colors[ind % colors.length]
    }
}

const Work = props => {
    const [data, setData] = useState(null)
    const [currentTab, setCurrentTab] = useState("language")

    const renderWork = () => {
        return data.work.map(w => {
            return <div className="row item">
                <div className="twelve columns">
                    <h3><i className="fab fa-amazon"></i>{w.company}</h3>
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
        let btns = data.skills.map((e, i) => {
            return <Button
                key={i}
                onClick={onClick}
                active={e.topic.toLowerCase() === currentTab}
                color="primary"
                size="lg"
                outline
                value={e.topic}
                style={{marginRight: "1em"}}
            >{e.topic}</Button>
        })
        return (
            <div style={{marginLeft: "2em"}}>
                {btns}
            </div>
        )
    }

    const options = {
        indexAxis: "y",
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: "right"
            },
            title: {
                display: false,
            }
        }
    }

    const renderSkills = () => {
        return data.skills.map((e, i) => {
            if (e.topic.toLowerCase() === currentTab) {
                let labels = e.list.map(each => each.name)
                let dataset = e.list.map(each => each.level)
                let datasets = [{
                    label: e.topic,
                    data: dataset,
                    backgroundColor: getColor(i, .2),
                    borderColor: getColor(i, 1)
                }]
                let chartdata = {
                    labels,
                    datasets,
                }
                console.log('labels', datasets, labels)

                return (
                    <div key={i} className={'bars'}>
                        <h3 className={'bar-header'}>{e.topic} <i className={e.className}></i></h3>
                        <div>
                            <Bar data={chartdata} options={options}/>
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
