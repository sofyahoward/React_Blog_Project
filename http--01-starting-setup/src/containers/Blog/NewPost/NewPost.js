import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }
    componentDidMount () {
        // If unauth => this.props.history.replace('/posts'); //Another option of guarding the page
    }

    postDataHandler = () => {
      const post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.autor
        };
        axios.post("/posts", post)
            .then(response => {
                console.log(response);
                this.props.history.push("/posts") //stacks a page on top of the previous page. Can press back btn
                // this.setState({submitted: true}); //replaces the current page. Cant press back btn
                //this.props.history.replace("/posts") //replaces the current page as well
            })
    }
    render () {
        /* redirect link to posts after the new post has been posted */
        let redirect = null;
        if (this.state.submitted){
            redirect = <Redirect to= "/posts"/>
        }
        return (
            <div className="NewPost">
            {/* redirect link to posts after the new post has been posted */}
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Sofya</option>
                    <option value="Manu">Jane</option>
                </select>
                <button onClick = {this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;