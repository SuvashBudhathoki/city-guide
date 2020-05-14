import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>
                            Our location
                        </strong></h3>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <iframe src=" https://www.google.com/maps/d/drive?state=%7B%22ids%22%3A%5B%221b626gZV9lpB_TxzSnGAUGbOs647dEUpd%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22117866353038467536946%22%7D&usp=sharing" style={{
                                border: '0',
                                width: '100%',
                                height: '315px',
                                frameborder: '0'
                            }} allowFullScreen ></iframe>                   </div>
                            <div className="col-md-5">
                                <h4><strong>Contact Us</strong></h4>
                                <form>
                                    <div className="form-group">
                                        <input className="form-contol" type="text" placeholder="name"/>
                                        </div>
                                    <div className="form-group">
                                        <input className="form-contol" type="text" placeholder="email"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-contol" type="tel" placeholder="phone"/>
                                    </div>
                                    <textarea className="form-control" cols="30" row="3" placeholder="message"></textarea>
                                    
                                    <Link className="btn btn-outline-primary text-uppercase mt-1">
                                        
                                        <i className="fab fa-telegram-plane"/>&nbsp;Send
                                    </Link> 
                                </form>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;