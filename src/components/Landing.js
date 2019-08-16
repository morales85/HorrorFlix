import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import ReactPlayer from 'react-player'

import '../style/home.css'

class Home extends Component {

    render() {
        return (
            <div>
                <div id="home-container">
                {/* <ReactPlayer className='intro' url='https://giant.gfycat.com/RegalNegligibleChupacabra.webm'
                 loop='true'  playing /> */}
                    <div><h1 className='header'>WHO'S WATCHING???</h1></div>
                </div>
                <div className='users'>
                    <div className='rafa'>
                        <Link style={{ textDecoration: 'none' }} to='/catalog' >
                            <div id="rafa" className="rafa"></div>
                            <div className='rafaText'>RAFA</div>
                        </Link>
                    </div>
                    <div className='aya'>
                    <Link style={{ textDecoration: 'none' }} to='/catalog'>
                        <div id="aya" className="aya"></div>
                        <div className='ayaText'>AYA</div>
                    </Link>
                    </div>
                    <div className='toto'>
                    <Link style={{ textDecoration: 'none' }} to='/catalog'>
                        <div className="toto" id="toto"></div>
                        <div className='totoText'>TOTO</div>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;