import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from './authentication.js'

class ToDoApp extends Component{
    render(){
        return(
            <div className="ToDoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/todos" component = {ListTodosComponent}/> 
                        <Route path = "/" exact component={LoginComponent}/>
                        <Route path = "/login" component={LoginComponent}/>
                        <Route path = "/welcome/:name" component={WelcomeComponent}/>
                        <Route path = "/logout" component = {LogoutComponent}/>
                        <Route component = {ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                {/* <WelcomeComponent/>
                <LoginComponent/> */}
            </div>
        )
    }
}
class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn;
        console.log(isUserLoggedIn);
        return(
            <header>
                <nav className = 'navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href = "http://localhost:3000/" className = "navbar-brand">  Stuff!</a></div>
                    <ul className = 'navbar-nav'>
                        <li className = "nav-link"> <Link to = "/welcome/:name">Home</Link></li>
                        <li className = "nav-link"> <Link to = "/todos">ToDos</Link></li>
                    </ul>
                    <ul className = 'navbar-nav navbar-collapse jusify-content-end'>
                        <li className = "nav-link"> <Link to = "/login">Login</Link></li>
                        <li className = "nav-link"> <Link to = "/logout" onClick ={AuthenticationService.logout}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
        
    }
}
class FooterComponent extends Component{
    render(){
        return(
            <footer className = "footer">
                 <span className = "text-muted"> This app brought to you by Blind Panic Industries, LLC (c) 2021</span>
            </footer>
        )
    }
}
class LogoutComponent extends Component{
    render(){
        return(
            <div>
            <h1> You have logged out.</h1>
            
              Come back soon! <br/>
              To log in again, go <Link to = "/login">here.</Link>
            </div>
        )
    }
}
class ListTodosComponent extends Component{
         constructor(props){
        super(props)
        this.state = {
            todos:[
                {id: 1, description: "Finish Udemy", done: false, targetDate: new Date()},
                {id: 2, description: "put BPAL inventory skin on", done: false, targetDate: new Date()},
                {id: 3, description: "Profit", done: false, targetDate: new Date()}
            ]
        }
    }
    render(){
        return (<div><h1>Here are the things you have to do!</h1>
        <div className = "container">

        <table class = "table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>Is it done?</th>
                    <th>When does it need to be done by?</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.todos.map(
                    todo=>
                    <tr>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate.toString()}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
        </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
        <div className = "container">
            <h1>Welcome to the To-Do app, {this.props.match.params.name}!</h1>
             You can manage your list <Link to="/todos">here</Link>.
             </div>
        )
    }
}
    
function ErrorComponent(){
    return <div>This is not the page you're looking for</div>
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleChange(event){
        console.log(event.target.name);
        this.setState({
            [event.target.name]
                :event.target.value
            })
    }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }
    loginClicked() {
        //diana,dummy
        if(this.state.username ==='diana' && this.state.password ==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push (`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
            console.log("successful");
        } 
 
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log("fail");
        }
        
        console.log(this.state);
    }
    render(){
        return(
            
            <div>
                <h1>Login</h1>
                <div class = "container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div className = "alert alert-warning">Invalid Credentials</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>  */}
                {this.state.showSuccessMessage && <div>Login Successful!</div>}
            User Name: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
            Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
            <button className = "btn btn-login" onClick = {this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}
    // function ShowInvalidCredentials(props){
    //     if(props.hasLoginFailed){
    //         return <div>Invalid Credentials</div>
    //     }
    //     return null;
    // }
    // function ShowLoginSuccessMessage(props){
    //     if (props.showSuccessMessage){
    //         return<div>Login Successful!</div>
    //     }
    //     return null;
    // }


export default ToDoApp;