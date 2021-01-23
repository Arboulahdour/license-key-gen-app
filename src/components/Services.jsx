import React from 'react';


function Services({ servicesLinks }) {

		return (

				<section className="page-section" id="services">
	            <div className="container">
	                <div className="text-center">
	                    <h2 className="section-heading text-uppercase">Services</h2>
	                    <h3 className="section-subheading text-muted">Find out the services offered by Dev Consult team.</h3>
	                </div>

	                <div className="row text-center">

	                	{ servicesLinks && servicesLinks.map(({ icon, title , description }, index) =>
	                    <div className="col-md-4" key={index}>
	                        <span className="fa-stack fa-4x">
	                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
	                            <i className={icon}></i>
	                        </span>
	                        <h4 className="my-3">{title}</h4>
	                        <p className="text-muted">{description}</p>
	                    </div>
	               			)

	                	}     
	                
	                </div>
	            
	            </div>
	        </section> 

			)
		}


export default Services;