import React from 'react';

class Contact extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        contactItem:{
          id:null, 
          name:'',
          email:'',
          phone:'',
          message:'',
        },
        errors:{
          name:'',
          email:'',
          phone:'',
          message:''
        },
        success:{
            display: 'none', 
        }
      }

      this.handleChangeName = this.handleChangeName.bind(this)
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangePhone = this.handleChangePhone.bind(this)
      this.handleChangeMessage = this.handleChangeMessage.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getCookie = this.getCookie.bind(this)
  };

  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  handleChangeName(e){
    var name = e.target.name
    var value = e.target.value

  //  console.log('Name: ', name)
  //  console.log('Value: ', value)

    this.setState({
        contactItem: {
            ...this.state.contactItem,
            name:value
        }
    })
  }

  handleChangeEmail(e){
    var email = e.target.name
    var value = e.target.value

  //  console.log('Name: ', email)
  //  console.log('Value: ', value)

    this.setState({
        contactItem: {
            ...this.state.contactItem,
            email:value
        }
    })
  }

  handleChangePhone(e){
    var phone = e.target.name
    var value = e.target.value

  //  console.log('Phone: ', phone)
  //  console.log('Value: ', value)

    this.setState({
        contactItem: {
            ...this.state.contactItem,
            phone:value
        }
    })
  }

  handleChangeMessage(e){
    var message = e.target.name
    var value = e.target.value

  //  console.log('Message: ', message)
  //  console.log('Value: ', value)

    this.setState({
        contactItem: {
            ...this.state.contactItem,
            message:value
        }
    })
  }

  validate = () => {

    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let messageError = "";

    if (this.state.contactItem.name.length === 0) {
      nameError = 'Invalid name!'
    }

    if (!this.state.contactItem.email.includes("@")) {
      emailError = 'Invalid email!'
    }

    if (this.state.contactItem.phone.length !== 13 || !this.state.contactItem.phone.match('[0-9]{10}')) {
      phoneError = 'Invalid phone number!'
    }

    if (this.state.contactItem.message.length < 2) {
      messageError = 'Enter a valid message!'
    }

    if (messageError || phoneError || emailError || nameError) {
      this.setState({
        errors: {
            ...this.state.errors,
            name:nameError,
            email:emailError,
            phone:phoneError,
            message:messageError
        }
    });
      return false;
    }

    return true;

  }

  handleSubmit(e){

    e.preventDefault()

    var csrftoken = this.getCookie('csrftoken')

    var url = 'https://devconsult-backend.herokuapp.com/api/lead-create/'

    const isValid = this.validate();

    if (isValid) {

      this.setState({
        errors: {
            ...this.state.errors,
            name:'',
            email: '',
            phone:'',
            message:''
        }
    });

      fetch(url, {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
            'X-CSRFToken': csrftoken
        },
        body:JSON.stringify(this.state.contactItem)
    }).then((response) => {
        this.setState({
              contactItem:{
              id:null, 
              name:'',
              email:'',
              phone:'',
              message:'',
            },
            success:{
              display:'', 
            }
        })  
    }).catch(function(error){
        console.log('ERROR: ', error)
        alert("Unexpected error has happened. Please, try to resend your message again!")
    })

    }

/*    if (this.state.contactItem.name.length === 0) {
      this.setState({
        errors: {
            ...this.state.errors,
            name:'Invalid name!'
        }
    });

      console.log(this.state.errors.name)
    }

    else {

      this.setState({
        errors: {
            ...this.state.errors,
            name:''
        }
    });

      fetch(url, {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
            'X-CSRFToken': csrftoken
        },
        body:JSON.stringify(this.state.contactItem)
    }).then((response) => {
        this.setState({
              contactItem:{
              id:null, 
              name:'',
              email:'',
              phone:'',
              message:'',
            },
        })  
    }).catch(function(error){
        console.log('ERROR: ', error)
        alert("Unexpected error has happened. Please, try to resend your message again!")
    })

    }*/ 
 
  }


  render(){

    return(
        
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase animate__animated animate__fadeInDown wow">Contact Us</h2>
                    <h3 className="section-subheading text-muted animate__animated animate__fadeInDown wow">We are extremely passionate about receiving your message.</h3>
                </div>
                <form onSubmit={this.handleSubmit}  id="contactForm" name="sentMessage" noValidate method="POST">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6 animate__animated animate__fadeInLeft wow">
                            <div className="form-group">
                                <input onChange={this.handleChangeName} className="form-control" value={this.state.contactItem.name} name="Name" id="name" type="text" placeholder="Your Name *" required="required" />
                                <p className="help-block text-danger">{this.state.errors.name}</p>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChangeEmail} className="form-control" value={this.state.contactItem.email} name="email" id="email" type="email" placeholder="Your Email *" required="required" />
                                <p className="help-block text-danger">{this.state.errors.email}</p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input onChange={this.handleChangePhone} className="form-control" value={this.state.contactItem.phone} name="phone" id="phone" type="tel" placeholder="Your Phone *" required="required" />
                                <p className="help-block text-danger">{this.state.errors.phone}</p>
                            </div>
                        </div>
                        <div className="col-md-6 animate__animated animate__fadeInRight wow">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea onChange={this.handleChangeMessage} className="form-control" value={this.state.contactItem.message} name="message" id="message" placeholder="Your Message *" required="required"></textarea>
                                <p className="help-block text-danger">{this.state.errors.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center animate__animated animate__fadeInUp wow">
                        <div className="alert alert-success alert-dismissible fade show" style={{display: "none"}} style={this.state.success} role="alert">
                          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <strong>Thank you!</strong> Your message is sent successfully.
                        </div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Let's work together</button>
                    </div>
                </form>
            </div>
        </section>

      )
  }
}

export default Contact;