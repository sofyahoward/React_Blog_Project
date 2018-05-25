import React, { Component } from 'react';
import axios from "../../axios" //import the instance version
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from "./Posts/Posts";
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost'


import './Blog.css';

class Blog extends Component {
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
                    <Route path = "/new-post" exact component = {NewPost}/> 
                    <Route path = "/posts/" component = {Posts}/>
                    
                   
                </Switch>
            </div>
        );
    }
}

export default Blog;