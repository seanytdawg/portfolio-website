import React, { Component } from 'react';
import Satelite from './assets/satelite.png'
import './App.css'

class Videos extends Component {
    render() {
        return (
            <div className = "videos">
                <text>Coming Soon</text>

                <div className = "satelite">
                    <img src = {Satelite}/>
                    <img src = {Satelite}/>
                    <img src = {Satelite}/>
                </div>
            </div>
        );
    }
}

export default Videos;