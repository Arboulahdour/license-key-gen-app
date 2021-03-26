import React, {useState, useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import robot from '../assets/img/robot.svg';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Home() {

	const [keysList, setKeysList] = useState([]);
	const [done, setDone] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isEmpty, setIsEmpty] = useState(true);

	// Notification alerts for any API call

    const notifySuccess = () => {
      toast.success("Great! Your license key was created successfully.", {
        autoClose: 10000
      });
    }

    const notifyError = () => {
      toast.error("Unexpected error has happened!", {
        autoClose: 10000
      });
    }

    const notifyFetchError = () => {
      toast.error("Unable to get data! Please, try to reload the page.", {
        autoClose: 10000
      });
    }

    const notifyDeleteError = () => {
      toast.error("Unable to remove license key! Please, try again.", {
        autoClose: 10000
      });
    }

    const notifyDuplicateName = () => {
	  toast.warning("This name is aleardy used! Please, try another name.", {
	    autoClose: 10000
	  });
	}

    const notifyTimeout = () => {
	  toast.error("Request timed out! Please, try again.", {
	    autoClose: 10000
	  });
	}

	useEffect(() => {

		fetchKeys()

    }, []);


    // Function checks if the list of key is empty or not, and returns data 

	const handleDisplayKeys = () => {
		return (
	  		isEmpty === false ? (
	  			keysList.slice(0).reverse().map((keyIndex, index) =>
	  				<div className="key-style" key={index}>
	  						<div className="key-style-spans">
	  					   		<div className="key-first-span">
	  					   			<span style={{marginBottom: '2px'}}><b style={{color: '#007bff'}}>Product:</b> {keyIndex.name}</span>
	  					   			<i data-toggle="modal" data-target="#deleteKeyModal" data-whatever="@mdo" className="far fa-trash-alt"></i>
	  					   		</div>
	  					   		<span style={{marginBottom: '2px'}}><b style={{color: '#007bff'}}>License Key:</b> {keyIndex.license_key}</span>
	  					   		<span><b style={{color: '#007bff'}}>Created at:</b> {keyIndex.created_at}</span>
	  						</div>

	  						<div className="modal fade" id="deleteKeyModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							  <div className="modal-dialog" role="document">
							    <div className="modal-content">
							      <div className="modal-header">
							        <h5 className="modal-title" id="exampleModalLabel">Remove License Key</h5>
							        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true">&times;</span>
							        </button>
							      </div>
							      
								      <div className="modal-body">
										<span>Would you like to remove this license key?</span>		          
								      </div>
								      <div className="modal-footer">
								        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								        <button type="button" className="btn btn-danger" onClick={() => deleteKey(keyIndex)} data-dismiss="modal">Delete</button>
								      </div>
							    </div>
							  </div>
							</div>
	  				</div>
	  			)
	  		) : (

	  			<div style={{ marginTop: '130px', textAlign: 'center', alingItems: 'center', justifyContent: 'center'}}>
		    		<img className="mb-3" src={robot} height={50} width={50} />
			        <p className="text-white">No Keys Found.</p>
			    </div>
	  		)
  		)
	}

	// Function to get list of License key from backend server

    const fetchKeys = () => {
		
	  var url = `https://license-key-gen.herokuapp.com/api/license-keys-list/`
	  
	  fetch(url, {
        method: 'GET',
        headers: {
        	'Accept': 'application/json',
      		'Content-Type': 'application/json'
			}
      	})
	  .then(response => response.json())
      .then(data => {
    	setKeysList(data);
    	setDone(true);
    	if (data.length !== 0) {
    		setIsEmpty(false)
    		console.log('fetch ', data.length)
    	}
	  }).catch(error => {
        console.log('ERROR: ', error)
        notifyFetchError();
      })
	
	}  

	const [form] = Form.useForm();

	// Function to check the availabily of the entered name with the existing names on the server

	const onFinish = (values) => {
		if (keysList.length !== 0) {
			console.log(keysList)
			var keysListNames = []
			keysList.map((keyIndex, index) =>
				keysListNames = keysListNames.concat(keyIndex.name)
			)
			console.log(keysListNames)
	    	var checkName = keysListNames.includes(values.name);
	    	console.log(checkName)
	    	if (checkName === true) {
	    		notifyDuplicateName()
	    	} else {
	    		onSubmit(values)
	    	}
	    } else {
	    	onSubmit(values)
	    }
	}

	// Function to generate new License key on the server

	const onSubmit = (values) => {
		const FETCH_TIMEOUT = 40000;
    	let didTimeOut = false;
	    setLoading(true);
	    
	    setTimeout(() => {
	      setLoading(false);
	    }, FETCH_TIMEOUT);

	    var url = `https://license-key-gen.herokuapp.com/api/license-keys-generate/`

	    new Promise(function(resolve, reject) {

	    	const timeout = setTimeout(function() {
	            didTimeOut = true;
	            reject(new Error('Request timed out'));
	        }, FETCH_TIMEOUT);
	    
		    fetch(url, {
	          method: 'POST',
	          headers: {
	              'Content-type':'application/json',
	          },
	          body:JSON.stringify({
	            id: null,
	            name: values.name,
	          })
	        }).then((response) => {
	        	clearTimeout(timeout);
	        	if(!didTimeOut) {   
		           	notifySuccess();
		           	form.resetFields();
		           	fetchKeys();
		           	resolve(response);
		           	console.log('response after : ', response.json())
		        }
	        }).catch(function(error){
	          	console.log('ERROR: ', error)
	        	if(didTimeOut) return;
	        	reject(error);
	          	notifyError();
	        })
	    }).then(function() {
	          // Request success and no timeout
	          console.log('good promise, no timeout! ');
	      })
	      .catch(function(error) {
	          // Error: response error, request timeout or runtime error
	          notifyTimeout()
	          console.log('promise error! ', error);
	      });
	}

	const onFinishFailed = (errorInfo) => {
	    console.log('Failed:', errorInfo);
	};

	// Function to delete an existing license key on the server

	const deleteKey = (keyIndex) => {

	    fetch(`https://license-key-gen.herokuapp.com/api/license-keys-delete/${keyIndex.id}/`, {
	      method:'DELETE',
	      headers:{
	        'Content-type':'application/json',
	      },
	    })
	    .then((response) =>{
	        fetchKeys()
	        console.log('check list ', keysList.length)
	        if (keysList.length === 0) {
	    		setIsEmpty(true)
	    		console.log('check list ', keysList.length)
	    	}
	        console.log('delete ', isEmpty)
	    })
	    .catch(function(error){
          	console.log('ERROR: ', error)
          	notifyDeleteError();
        })
	}

	// if statement to check if data is loaded or not

	if (done === false) {
	    
	    return (

		    <div>
				<header className="header">
		          <nav className="navbar navbar-expand-lg">
		            <div className="container">
		              <div className="navbar-header d-flex align-items-center justify-content-between">
		                <a href="/" className="navbar-brand text-color">License Key Gen</a>
		              </div>
		            </div>
		          </nav>
		        </header>

		        <section className="description-section">
		          <div className="container">
		              <div className="page-info">
		                <h2 className="mb-3 page-title">License Key Generator</h2>
		                <p className="mt-2 text-white">Web / Mobile Application to generate Software License Keys.</p>
		              </div>
		          </div>

			      <div style={{textAlign: 'center', marginTop: '30px'}}>
			            <button className="site-consult" disabled>Generate New Key</button>
			      </div>

			      <div className="col-md-4 offset-md-4 keys-box">

	                	<div className="loader-section-main">
	                		<div className="loader-section"> </div>							
						</div>
						<div style={{textAlign: 'center', marginTop: '5px'}}>
							<span>Loading keys...</span>
						</div>
		                	
			      </div>
		        </section>  
			</div>
        )

    } else {

		return (
			<div>
				<header className="header">
		          <nav className="navbar navbar-expand-lg">
		            <div className="container">
		              <div className="navbar-header d-flex align-items-center justify-content-between">
		                <a href="/" className="navbar-brand text-color">License Key Gen</a>
		              </div>
		            </div>
		          </nav>
		        </header>

		        <section className="description-section">
		          <div className="container">
		              <div className="page-info">
		                <h2 className="mb-3 page-title">License Key Generator</h2>
		                <p className="mt-2 text-white">Web / Mobile Application to generate Software License Keys.</p>
		              </div>
		          </div>

			      <div style={{textAlign: 'center', marginTop: '30px'}}>
			              <span data-toggle="modal" data-target="#generateKeyModal" data-whatever="@mdo" className="site-consult">Generate New Key</span>
			      </div>

			      <div className="modal fade" id="generateKeyModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					  <div className="modal-dialog" role="document">
					    <div className="modal-content">
					      <div className="modal-header">
					        <h5 className="modal-title" id="exampleModalLabel">Generate New Key</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>
					      <Form
						      name="basic"
						      form={form}
						      onFinish={onFinish}
						      onFinishFailed={onFinishFailed}
						    >
						      <div className="modal-body">
						          <Form.Item
							        label="Enter a name for the key (Product's Name):"
							        name="name"
							        rules={[
							          {
							            required: true,
							            message: 'Please input your key name!',
							          },
							        ]}
							      >
							        <Input placeholder="Enter a name..." className="form-control" />
							      </Form.Item>
						      </div>
						      <div className="modal-footer">
						        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						        <Form.Item>
						        	<Button 
						        		type="primary" 
						        		htmlType="submit" 
						        		className="btn btn-submit"
						        		loading={loading}
						        		>Generate</Button>
						      	</Form.Item>
						      </div>
					      </Form>
					    </div>
					  </div>
					</div>

			      <div className="col-md-4 offset-md-4 keys-box">
			      		{
			      			handleDisplayKeys()
			      		}
				 
			      </div>
		        </section>  
			</div>
		)
	}
}

export default Home;
