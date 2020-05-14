import React, { Component } from 'react';
import {InfoConsumer} from './context';
import {Link} from 'react-router-dom';

 class NewsCard extends Component {
    render() {
        const {id, newsTitle, newsText}=this.props.item;
        return (
            <div className="card container mt-2 mb-3 p-5">
            <div className="card-body">
                <h5 className="card-title">
                    {newsTitle}
                </h5>
                <p className="card-text">{newsText}</p>
                <Link className="card-link" to='/'>
                    Read More.. 
                </Link>
            </div>
                
            </div>
        )
    }
}

export default NewsCard;