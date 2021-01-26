import React from 'react'

function Portfolio ({ portfolioLinks }) {
    
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase animate__animated animate__fadeInDown wow">Portfolio</h2>
                    <h3 className="section-subheading text-muted animate__animated animate__fadeInDown wow">Recent projects achieved by Dev Consult team.</h3>
                </div>
                <div className="row">
                    { portfolioLinks && portfolioLinks.map(({ title, caption, dataTarget, dataTargetC, image, description, url, technologies }, index) =>
                        <div className="col-lg-4 col-sm-6 mb-4 animate__animated animate__fadeInUp wow" key={index}>
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" data-target={ dataTarget }>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={ image } alt="caption" />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{ title }</div>
                                    <div className="portfolio-caption-subheading text-muted">{ caption }</div>
                                </div>

                                <div className={ dataTargetC } tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                  <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                      <img src={ image } className="img-fluid" alt="caption" />
                                      <div className="modal-content-band-h"> </div>
                                      <h1>{ title }</h1>
                                      <span className="text-muted">{ caption }</span>
                                      <p>
                                        { description }
                                        <br/><br/>
                                        The tools used are : 
                                        <strong className="font-weight-bold text-danger"> { technologies } </strong>
                                        <br/>
                                        <br/>
                                        For more information about this project visit the link bellow.
                                        <br/>
                                        <a href={ url } target='blank' style={{color:'blue'}}>{ url }</a>
                                      </p>
                                      <div className="modal-content-band"> </div>
                                    </div>
                                  </div>
                                </div>

                            </div>
                        </div>
                        )
                    }
                    
                </div>
            </div>
        </section>
    )
}


export default Portfolio