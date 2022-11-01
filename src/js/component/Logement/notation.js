import React, { Component } from "react";

const RatingStar = ({rating}) => {
    const stars = [];
    for(let i= 0; i < 5; i++){
        stars.push((i < rating)?"fa fa-star rate":"fa fa-star")
    }
    
    return(
        <div className="notation">
        {stars.map((star,key)=>
            <i key={key} className={star} aria-hidden="true"></i>
        )}
        </div>
    );
}

class Notation extends Component{
    constructor(props){
        super(props);
        this.rating = props.rating;
    }

    render(){
        return(
            <RatingStar rating={this.rating}/>
        );
    }
}


export default Notation;