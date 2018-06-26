import React, {Component} from 'react';

class Header extends Component {

    render() {

        if(this.props.data){
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var bio = this.props.data.bio;
            var network = this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }
        return (
            <div className="App">
                <div className="App-header">
                    <header id="home">

                        <nav id="nav-wrap" >

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
                                <h1 className="responsive-headline">{name}</h1>
                                <h3>I'm a <span>{occupation}</span>, Let's <a
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
        );
    }
}

export default Header;
