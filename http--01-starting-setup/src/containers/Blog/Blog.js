import React, { Component } from 'react';
import axios from "../../axios" //import the instance version
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from "./Posts/Posts";
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost'


import './Blog.css';

class Blog extends Component {
    state ={
        auth: false,
    }
    render () {
        return (
            <div className= "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to= "/posts/" exact>Home</NavLink></li>
                            <li><NavLink to = {{
                                    pathname: "/new-post"
                                    }}>New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path= "/" exact render={() => <h1>Home</h1>}/>
                <Route path= "/" render={() => <h1>Home2</h1>}/> */}
                <Switch>
                   {this.state.auth ?<Route path = "/new-post" exact component = {NewPost}/> :null}
                   {/* this is guarding for authentication. This way is the user is not authenticated, it will not render this particular component */}
                    <Route path = "/posts/" component = {Posts}/>
                    {/* <Redirect from = "/" to = "/posts/"/> */}
                   <Route render={()=> <p>Sorry, This is Not Found</p>}/>
                {/* A way to handle unknown routes and 404 errors. You can render a custom component for this as well.
                Do not use with redirect from ="/" because it will catch all routes. Use this redirect last */}
                </Switch>
            </div>
        );
    }
}

export default Blog;