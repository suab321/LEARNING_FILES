import React from 'react';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import {Route} from 'react-router';

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Links:[]
        }
        console.log(props);
    }
    render(){
        return(
            <Switch>
                <Router>
                <Route path={`${this.props.location.pathname}/abhi`} exact strict render={()=>{return(<div>hi</div>)}}/>
                <Link to={`${this.props.location.pathname}/abhi`}>abhi</Link>
                </Router>
            </Switch>
        )
    }
}
export default Show;