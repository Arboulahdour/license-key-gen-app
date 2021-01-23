import React from 'react';


function FollowUs({ followUsLinks }) {

	return (

		<section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Follow us</h2>
                    <h3 className="section-subheading text-muted">Check out our activities and news on social networks.</h3>
                </div>


                <div className="box">
                    <div className="container">
                        <div className="row">  
                                
                                { followUsLinks && followUsLinks.map(({ icon, title, description, linkStyle, link }, index) =>
                                
                                 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" key={index}>
                               
                                    <div className="box-part text-center">
                                        
                                        <i className={icon} aria-hidden="true"></i>
                                        
                                        <div className="title">
                                            <h4>{title}</h4>
                                        </div>
                                        
                                        <div className="text">
                                            <span>{description}</span>
                                        </div>
                                        
                                        <a className={linkStyle} href={link} target="_blank">See More</a>
                                        
                                     </div>
                                 </div>

                                )}

                        </div>       
                    </div>
                </div>


                
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Are you looking for a Developer or Designer for your project? If so, feel free to contact us and let us get starting a new experience with you.</p></div>
                </div>
            </div>
        </section>


		)

}

export default FollowUs;