import React, {Component, useState, useEffect} from 'react';


const Header = props => {
    const [data, setData] = useState(null)


    useEffect(() => {
        setData(props.data)
    }, [props.data])


    if (data) {
        let network = data.social.map((each) => {
            return <li key={each.name}><a href={each.url}><i className={each.className}></i></a></li>
        })
        return (
            <div className="App">
                <div className="App-header">
                    <header id="home">

                        <nav id="nav-wrap">

                            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                            <ul id="nav" className="nav">
                                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                                <li><a className="smoothscroll" href="#about">About</a></li>
                                <li><a className="smoothscroll" href="#work">Work</a></li>
                                <li><a className="smoothscroll" href="#skill">Skills</a></li>
                                <li><a className="smoothscroll" href="#resume">Education</a></li>
                                <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                                <li><a className="smoothscroll" href="#contact">Contact</a></li>
                            </ul>

                        </nav>

                        <div className="row banner">
                            <div className="banner-text">
                                <h1 className="responsive-headline">{data.name}</h1>
                                <h3>I'm a <span>{data.occupation}</span>, Let's <a
                                    className="smoothscroll" href="#about"> start scrolling </a>
                                    and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                                <hr/>
                                <ul className="social">
                                    {network}
                                </ul>
                            </div>
                        </div>

                        <p className="scrolldown">
                            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                        </p>

                    </header>
                </div>

            </div>
        )
    }
    return null

}


export default Header;
