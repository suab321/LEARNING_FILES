import React from 'react';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Axios from 'axios';
import Show from './Show'

class Show2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Links:[],
            data:[],
            path:this.props.match.params.folder
        }
        console.log(this.state);
    }
    componentDidMount(){
        Axios.get('http://localhost:3002/get').then(res=>{
            console.log(res.data.Contents);
            this.setState({data:res.data.Contents});
        })
    }

    render(){
        var links=[];
        for(var i=0;i<this.state.data.length;i++){
           if(this.state.data[i].parentName===this.state.path)
               links.push(this.state.data[i]);
        }

        console.log(links);
        return(
           <Switch>
               <Router>
                   {links.map(i=>{
                       return(
                           <>
                           <Route path={i.path} component={Show}/><br/>
                            <Link to={i.path}>{i.name}</Link>
                            </>
                       )
                   })}
               </Router>
           </Switch>
        )
    }
}

export default Show2;