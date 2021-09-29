import React, { Component } from 'react';
import './styles/awards.css'

class Awards extends Component {
    render() {
        return (
            <div className='awards'>
                <h1>Awards</h1>
                <h3 className="awardsTitle">Dean's List</h3>
                <ul>
                    <li>2015, 2018, 2020</li>
                </ul>
                <h3 className="awardsTitle">AP Scholar Award</h3>
                <ul>
                    <li>2015</li>
                </ul>
            </div>
        )
    }
}

export default Awards;