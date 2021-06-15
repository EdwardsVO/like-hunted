import React from 'react';
import 'firebase/firestore'
import firebase from 'firebase';
import WriteToCloudFirestore from './cloudFirestore/write.js';
import { useUser } from '../firebase/useUser.js';


class postForm extends React.Component {
   
    
    
    state ={
        title: '',
        autor: '',
        description: '',
        likes: 0,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()) 
    }

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value});
        }

    handleSubmit = event => {
        
        event.preventDefault();
        
    }

    render() {
        return (
            
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="title" placeholder="title" onChange={this.handleChange} className="mt-5 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div>
                    <input trype="text" name="autor" placeholder="autor" onChange={this.handleChange} className="mt-5 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div>
                <input type="text" name="description" placeholder="description" onChange={this.handleChange} className="mt-5 pt-5 mb-10 pb-5 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                
            </form>
            <WriteToCloudFirestore>{this.state}</WriteToCloudFirestore>
            </div>
            
        )
    }
}

export default postForm