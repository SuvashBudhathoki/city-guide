import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import {InfoConsumer} from '../context';

class News extends Component {
    render() {
        return (
            <InfoConsumer>
                {data=> 
                     data.news.map(item=> <NewsCard key={item.id} item={item}/>)
                }
            </InfoConsumer>
        )
    }
}

export default News;