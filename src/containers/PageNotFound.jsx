import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <section>
    {/*<h1>404 - Not Found!</h1>*/}
	<div className="err-section">
		<h1>Oops</h1>  
		<p>The Page you're looking for isn't here.</p>
		<Link className="btn btn-submit-err" to="/">
	      Go Home
	    </Link>
	</div>
  </section>
);

export default PageNotFound;