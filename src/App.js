import React from 'react';

/*import envato from './assets/img/logos/envato.jpg';
import designmodo from './assets/img/logos/designmodo.jpg';
import themeforest from './assets/img/logos/themeforest.jpg';
import creativemarket from './assets/img/logos/creative-market.jpg';*/

import pic0 from './assets/img/portfolio/projects/pic0.jpg';
import pic3 from './assets/img/portfolio/projects/pic3.jpg';
import pic4 from './assets/img/portfolio/projects/pic4.jpg';
import pic5 from './assets/img/portfolio/projects/pic5.jpg';
import pic7 from './assets/img/portfolio/projects/pic7.jpg';
import pic8 from './assets/img/portfolio/projects/pic8.jpg';

import lightbulb from './assets/img/ideas.svg';

import Slides from './components/Slides';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Process from './components/Process';
import FollowUs from './components/FollowUs';
import Contact from './components/Contact';

function App() {
  const portfolioLinks = [ 
  {
    title: 'Personal Website',
    caption: 'Web Development',
    dataTarget: '.bd-example-modal-lg-3',
    dataTargetC: 'modal fade bd-example-modal-lg-3',
    image: pic7,
    description: 'This is the first website was developed by our team, it contains articles about some latest technologies in IT field.',
    url: 'https://arboulahdour.github.io/info',
    technologies: '#HTML #CSS #JAVASCRIPT'
  },
  {
    title: 'Net Auto',
    caption: 'Web Application',
    dataTarget: ".bd-example-modal-lg-1",
    dataTargetC: "modal fade bd-example-modal-lg-1",
    image: pic0,
    description: 'This application offers some basic services to simplify the daily tasks, functions and repetitive processes of a network or system engineer.',
    url: 'https://www.linkedin.com/posts/abderrahmane-boulahdour-462165169_django-python-networkautomation-activity-6687724211017986048-XOcI/',
    technologies: '#HTML #CSS #JAVASCRIPT #PYTHON #DJANGO'
  },
  {
    title: 'Chat App',
    caption: 'Web Application',
    dataTarget: '.bd-example-modal-lg-6',
    dataTargetC: 'modal fade bd-example-modal-lg-6',
    image: pic8,
    description: 'This web application allows to communicate with multiple people simultaneously and in real time.',
    url: 'https://www.linkedin.com/posts/abderrahmane-boulahdour-462165169_django-javascript-jquery-activity-6696813902681960448-43t5/',
    technologies: '#HTML #CSS #JAVASCRIPT #JQUERY #DJANGO'
  },
  {
    title: 'Deb',
    caption: 'Ansible Collection',
    dataTarget: '.bd-example-modal-lg-5',
    dataTargetC: 'modal fade bd-example-modal-lg-5',
    image: pic5,
    description: 'This collection contains some customs Ansible modules developed using Python to interact with a local or remote system to perform specific tasks.',
    url: 'https://galaxy.ansible.com/arboulahdour/deb',
    technologies: '#PYTHON #LINUXSKILLS'
  },
  {
    title: 'Web App',
    caption: 'Cloud & DevOps',
    dataTarget: '.bd-example-modal-lg-2',
    dataTargetC: 'modal fade bd-example-modal-lg-2',
    image: pic3,
    description: 'This application allows to create VPS containers with a specific resources directly via a web application, it could be useful for companies that provide cloud services.',
    url: 'https://www.linkedin.com/posts/abderrahmane-boulahdour-462165169_django-containers-vps-activity-6742431241238327296-Gb_T/',
    technologies: '#HTML #CSS #JAVASCRIPT #BOOTSTRAP #DJANGO #DOCKER #RESTAPI'
  },
  {
    title: 'Blog',
    caption: 'Web Development',
    dataTarget: '.bd-example-modal-lg-4',
    dataTargetC: 'modal fade bd-example-modal-lg-4',
    image: pic4,
    description: 'Netconsult is a recent blog website was developed by our team dedicated to IT stuff, it contains advanced features such as views, comments and subscribtions to newsletters.',
    url: 'https://netconsult.herokuapp.com',
    technologies: '#HTML #CSS #JAVASCRIPT #BOOTSTRAP #DJANGO'
  },
  
  ]


  const servicesLinks = [

  {
    icon: 'fa fa-laptop fa-stack-1x fa-inverse',
    title: 'Web Development',
    description: 'We develop top quality web applications and websites for your business, with a full care of the hosting and domain management.'
  },
  {
    icon: 'fa fa-mobile fa-stack-1x fa-inverse',
    title: 'App Development',
    description: 'Our team can build well-designed and optimized custom mobile applications with a delightful UX for both iOS and Android.'
  },
  {
    icon: 'fa fa-cloud fa-stack-1x fa-inverse',
    title: 'Cloud & DevOps',
    description: 'Dev Consult integrates DevOps tools to build a performant project based on best Approches and concepts of the SDLC model.'
  }


  ]


  const followUsLinks = [

  {
    icon: 'fa fa-linkedin fa-3x follow-lin',
    title: 'LinkedIn',
    description: 'Join our team on LinkedIn to stay updated about latest works and achievements.',
    linkStyle: 'followlink link-1',
    link: 'https://www.linkedin.com/in/abderrahmane-boulahdour-462165169'
  },
  {
    icon: 'fa fa-twitter fa-3x follow-tw',
    title: 'Twitter',
    description: 'Visit our network on Twitter to recieve all our latest informations and actualities.',
    linkStyle: 'followlink link-2',
    link: 'https://twitter.com/ABoulahdour'
  },
  {
    icon: 'fa fa-facebook fa-3x follow-fb',
    title: 'Facebook',
    description: 'Facebook is the easiest way to stay updated by all the latest activities of our team.',
    linkStyle: 'followlink link-3',
    link: 'https://www.facebook.com/ar.boulahdour/'
  },
  {
    icon: 'fa fa-github fa-3x follow-git',
    title: 'Github',
    description: 'Check our repositories on Github to get updated by the latest projects and codes.',
    linkStyle: 'followlink link-4',
    link: 'https://github.com/Arboulahdour'
  },
  {
    icon: 'fa fa-instagram fa-3x follow-insta',
    title: 'Instagram',
    description: 'Visit our Instagram page to see all designs, styles and the recent activities.',
    linkStyle: 'followlink link-5',
    link: '#'
  },
  {
    icon: 'fa fa-medium fa-3x follow-med',
    title: 'Medium',
    description: 'Follow our news and topics on Medium to get new ideas about our experiences.',
    linkStyle: 'followlink link-6',
    link: '#'
  }

  ]


  return (
    <div className='App'>
        <a href="https://wa.me/+213796046665" className="whatsapp_float" target="_blank" style={{textDecoration: "none"}}> <i className="fa fa-whatsapp fa-1x whatsapp-icon"></i></a>
        
        <div style={{backgroundColor: "#2E5CFF", height: "40px", color: "#fff", paddingTop: "6px"}} id="top">
          <div class="container">
              <div class="row">
                  <div  class="col-md-12">
                      <div class="header-top-content">
                          <ul class="nav nav-pills navbar-left">
                              <li><a href="#"><i class="fa fa-phone"></i><span>+213-796046665</span></a></li>
                              <li><a href="#"><i class="fa fa-envelope"></i><span>ar.boulahdour@outlook.com</span></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'white', borderBottom: '1px inset #cfcfcf',}}>
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" style={{ color: '#2E5CFF', fontWeight: 'bold' }} href="#page-top">DEV <span style={{fontWeight: '500', color: '#515151'}}>CONSULT</span></a>
                <span className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars ml-1"></i>
                </span>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger"  style={{color: 'black'}} href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger"  style={{color: 'black'}} href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger"  style={{color: 'black'}} href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger"  style={{color: 'black'}} href="#about">Process</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger"  style={{color: 'black'}} href="#team">Follow Us</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger contact-btn" style={{color: 'white'}} href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="page-top" style={{display: "none"}}></div>
        <div style={{marginTop:"0px"}}> </div>
        <Slides />

        <Services servicesLinks={servicesLinks} />       
            
        <Portfolio portfolioLinks={portfolioLinks} />
           
        <Skills />        


        <div className="row no-gutters bg-light p-5">

            <div className="col-md-6 animate__animated animate__fadeInBottomLeft wow">
            
                <div className="card bg-light card-content pr-2" style={{height: "80%", borderRadius: "0", textAlign: "left", border: '0'}}>
                  <div className="card-body text-black">
                    <br/>
                    <span className="plan-qst card-title">Do you have a plan?</span>
                    <p className="plan-request card-text">
                      Whatever your plan, contact us to carry out your project, and simplify all your technical issues.
                    </p>
                    <a href="#about" className="btn btn-primary btn-img">
                        See more <i className="fa fa-arrow-circle-down ml-1"></i>
                    </a>

                  </div>
                </div>
            </div>

            <div className="col-md-6 pt-3 pb-3 animate__animated animate__fadeInBottomRight wow">
              <div>
                <img src={lightbulb} className="img-fluid-lo" alt="illustaration" />
              </div>
            </div>
            
        </div>


        <Process />
        
        <FollowUs followUsLinks={followUsLinks} />
        
        <div className="py-5">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid-lo d-block mx-auto" src="" alt="" /></a>
                    </div>

                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid-lo d-block mx-auto" src="" alt="" /></a>
                    </div>

                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid-lo d-block mx-auto" src="" alt="" /></a>
                    </div>

                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid-lo d-block mx-auto" src="" alt="" /></a>
                    </div>

                </div>
            </div>
        </div>
        
        <Contact />
        
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Dev Consult 2021.</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/abderrahmane-boulahdour-462165169" target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/ABoulahdour/"><i className="fa fa-twitter" target="_blank"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/ar.boulahdour/" target="_blank"><i className="fa fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-medium"></i></a>
                        
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!" style={{color: 'black'}}>Privacy Policy</a>
                        <a href="#!" style={{color: 'black'}}>Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>  
    </div>
  );
}


export default App;
