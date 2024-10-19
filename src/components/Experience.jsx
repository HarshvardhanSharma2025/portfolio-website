import React from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import { SiSap, SiAirtel, SiGrafana, SiPowerbi } from 'react-icons/si';

const Experience = () => {
    return (
        <div>
            <div className="card mb-3 card-experience">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="\images\shirramlogo.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title intern-title">{<u>Internship</u>}</h5>
                            

                            <h6 className="responsibilities-title">Key Responsibilities:</h6>
                            <ol className="responsibilities-list">
                                <li type="none">
                                    <FaCheckCircle className="iconintern" /> Monitored network nodes and ensured continuous operation.
                                </li>
                                <li type="none">
                                    <FaCheckCircle className="iconintern" /> Reported issues to senior engineers and assisted in troubleshooting.
                                </li>
                                <li type="none">
                                    <FaCheckCircle className="iconintern" /> Collaborated with Airtel engineers for network-related issues.
                                </li>
                                <li type="none">
                                    <FaCheckCircle className="iconintern" /> Managed routers, switches, and generated support tickets.
                                </li>
                            </ol>



                            <h6 className="responsibilities-title">Technologies/Tools Used:</h6>
                            <ul className="tools-list">
                                <li type="none"><SiSap className="icontech" /> SAP</li>
                                <li type="none"><SiAirtel className="icontech" /> Airtel Dashboard</li>
                                <li type="none"><SiGrafana className="icontech" /> Sentinel Monitoring</li>
                                <li type="none"><SiPowerbi className="icontech" /> Saffire (Network Tool)</li>
                            </ul>


                            <h3 className="card-title intern-shirram">Shriram Pistons and Rings Limited, Ghaziabad</h3>

                            <h3 className="card-title intern-date">(Aug 2024 - Sept 2024)</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='arrow-main-skills'><img src="\images\arrow1.webp" className="arrow-experience" alt="..." /></div>
        </div>
    )
}

export default Experience;