import React, { Component } from 'react';
import './styles/employment.css';

class Employment extends Component {
    render() {
        return (
            <div className='employment'>
                <h1>Employment</h1>
                <div className="employmentEntry">
                    <img className="employmentImage" src={process.env.PUBLIC_URL + "/images/gerrys.png"} />
                    <div className="employmentDetails">
                        <h3 className="employmentCompany">Gerry's Grill (2016-2020)</h3>
                        <h5 className="employmentTitle">Waiter/Food Runner/Host</h5>
                    </div>
                </div>
                <div className="employmentEntry">
                    <img className="employmentImage" src={process.env.PUBLIC_URL + "/images/jollibee.png"} />
                    <div className="employmentDetails">
                        <h3 className="employmentCompany">Jollibee (2014-2016)</h3>
                        <h5 className="employmentTitle">Cashier/Drive-Thru</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employment;