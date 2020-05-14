import React, { Component } from 'react'
import {InfoConsumer} from './context';
import {Link} from 'react-router-dom';

 class Info extends Component {
    render() {
        const {
            id,headerTitle,
            headerSubTitle,
            headerText, img,
            handleDetail
        } = this.props.item;
        
        return (
            // <InfoConsumer>
            //     {
            //         data =>(
            //             <div className="col-10 col-lg-4 mx-auto mb-5">
            //             <div className="card" style={{width:'18rem'}}>
            //                 <img className="card-img-top" src={img} alt={headerTitle} />
            //                 <div className="card-body">
            //                     <h3 className="card-title text-uppercase">{headerTitle}</h3>
            //                     <h5 className="card-title">{headerSubTitle}</h5>
            // <p className="card-text">{headerText}</p>
            //                 </div>
            //             </div>

            //             </div>

            //         )
            //     }
            // </InfoConsumer>
            <InfoConsumer>
            {
                data=> {
                    return (
                        <div className="col-10 col-lg-4 mx-auto mb-5">
                <div className="card" style={{width:'18rem'}}>
                    <img className="card-img-top" src={img} alt={headerTitle} />
                    <div className="card-body">
                        <h3 className="card-title text-uppercase">{headerTitle}</h3>
                        <h5 className="card-subtitle">{headerSubTitle}</h5>
                        <p className="card-text">{headerText}</p>
                        <Link to="/details" className="btn btn-outline-primary" onClick = {()=>data.handleDetail(id)} >More Info</Link>
                    </div>
                </div>
            </div>
                    )
                }
            }
            
            </InfoConsumer>
        )
    }
}

export default Info;