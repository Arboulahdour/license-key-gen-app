import React from 'react';


function Process() {

	return (

		<section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase animate__animated animate__fadeInDown wow">Process</h2>
                    <h3 className="section-subheading text-muted animate__animated animate__fadeInDown wow">The progress of the project with our team follows a series of well-processed steps.</h3>
                </div>
                <ul className="timeline">
                    <li>
                    <div className="timeline-image animate__animated animate__fadeIn wow"><div className="rounded-circle img-fluid"></div></div>
                        <div className="timeline-panel animate__animated animate__fadeInUp wow">
                            <div className="timeline-heading">
                                <h4>First Step</h4>
                                <h4 className="subheading">Identify Your Needs</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Properly identifying the needs, requirements and ultimate goals listed in the project, and start working on them while respecting the client's conditions.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                    <div className="timeline-image animate__animated animate__fadeIn wow"><div className="rounded-circle img-fluid"></div></div>
                        <div className="timeline-panel animate__animated animate__fadeInUp wow">
                            <div className="timeline-heading">
                                <h4>Second Step</h4>
                                <h4 className="subheading">Execution, testing & performance</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">During this step, the project is in full progress (execution, tests and results evolution), and it is put into motion.</p></div>
                        </div>
                    </li>
                    <li>
                    <div className="timeline-image animate__animated animate__fadeIn wow"><div className="rounded-circle img-fluid"></div></div>
                        <div className="timeline-panel animate__animated animate__fadeInUp wow">
                            <div className="timeline-heading">
                                <h4>Third Step</h4>
                                <h4 className="subheading">Project delivery</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">After reviewing the all requirements, the final releases and deliverables are issued to the client, and project documents are delivered to the company.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image animate__animated animate__fadeIn wow"><div className="rounded-circle img-fluid"></div></div>
                        <div className="timeline-panel animate__animated animate__fadeInUp wow">
                            <div className="timeline-heading">
                                <h4>Final Step</h4>
                                <h4 className="subheading">Support and management</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">The project may be completed, but the product is never finished. We will secure its continuous quality and support incremental improvements.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image animate__animated animate__fadeIn wow">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Clients!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

		);

}

export default Process;