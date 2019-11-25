import React from 'react';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Axios from 'axios';
import Show2 from './Show2';
import App from './App'

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            paramter:''
        }
        console.log(props);
    }
    componentDidMount(){
        var pathName=this.props.location.pathname.split('/');
        var path='';
        for(var i=1;i<pathName.length;i++){
            if(i===pathName.length-1)
                path=path+pathName[i];
            else
            path=path+pathName[i]+"/";
        }
        console.log(path);
        this.setState({paramter:path,data:this.props.data});
    }

    render(){
        console.log(this.state);
        var link=[];
        var files=[];
        for(var i=0;i<this.state.data.length;i++){
            if(this.state.data[i].parentName===this.state.paramter){
                if(this.state.data[i].isFile)
                    files.push(this.state.data[i]);
                else
                    link.push(this.state.data[i]);
            }
        }
        console.log(link);
        console.log(files);
        return(
           <Router>
               <div>
                   {link.map(i=>{
                       return(
                        <div>
                           <Route exact strict path={"/"+i.path} render={(props)=><Show {...props} data={this.props.data}/>}/><br/>
                            <Link to={"/"+i.path}>{i.name}</Link>
                        </div>
                       )
                   })}
                   </div>
                   {files.map(i=>{
                       return(
                           <>
                            <h6 style={{color:'green'}}>{i.name}</h6>
                           </>
                       )
                   })}
           </Router>
        )
    }
}

export default Show;