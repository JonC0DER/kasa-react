import React, { Component } from "react";
import Notation from "./notation";

function OwnerParametersRender({ownerDetails}) {
    const host = ownerDetails.host.name.split(' ');
    const hostFirst = host[0];
    const hostLast = host[1];
    return(
        <aside className="owner">
            <div className="owner-id">
                <h4>{hostFirst} <br /> {hostLast}</h4>
                <figure>
                    <img src={ownerDetails.host.picture} alt="owner profile" />
                </figure>
            </div>
            <Notation rating={ownerDetails.rating} />
        </aside>
    );
}

class Owner extends Component{
    constructor(props){
        super(props)
        this.ownerDetails ={
            host: this.props.data.host,
            rating: this.props.data.rating
        }
    }
    render(){
        return(
            <OwnerParametersRender ownerDetails={this.ownerDetails}/>
        );
    }
}

export default Owner;