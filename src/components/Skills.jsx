import React from 'react';


function Skills() {

	return (

		<section className="page-section" id="skills">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase animate__animated animate__fadeInDown wow">Skills</h2>
                    <h3 className="section-subheading text-muted animate__animated animate__fadeInDown wow">Find out the tools used by Dev Consult team.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-3 animate__animated animate__fadeInUp wow">
                        <span className="fa-stack fa-3x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-code fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Python</h4>
                        <p className="text-muted">Python is currently one of the fastest growing languages to get your job done on time.</p>
                    </div>
                    <div className="col-md-3 animate__animated animate__fadeInUp wow">
                        <span className="fa-stack fa-3x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Django</h4>
                        <p className="text-muted">Build performant backend web applications based on Python programming tool.</p>
                    </div>
                    <div className="col-md-3 animate__animated animate__fadeInUp wow">
                        <span className="fa-stack fa-3x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-code fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">React.js</h4>
                        <p className="text-muted">React implements a beautiful and responsive UIs that are highly-interactive.</p>
                    </div>
                    <div className="col-md-3 animate__animated animate__fadeInUp wow">
                        <span className="fa-stack fa-3x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">React Native</h4>
                        <p className="text-muted">React Native leverages a powerful framework for a mobile cross-platform dev.</p>
                    </div>
                </div>
            </div>
        </section>

		);
}

export default Skills;