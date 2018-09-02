import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import App from './App';

 const Login=()=>{
	return(

		<div className='center'>
		<Router>
		<div>
		<Route path='/home' component={App}></Route>
		</div>
		</Router>		
		</div>
		)
}
export default Login