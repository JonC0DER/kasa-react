import React, { Component } from "react";
import Tags from "./tags";

function DetailsParametersRender({details}){
    return (
        <div className="details">
            <h1 className="titre-logement">{details.title}</h1>
            <h4 className="sous-titre-logement">{details.location}</h4>
            <Tags tags={details.tags}/>
        </div>
    );
}

class Details extends Component{
    constructor(props){
        super(props)
        this.details = {
            title:this.title = props.data.title,
            location:this.location = props.data.location,
            tags:this.tags = props.data.tags
        }
    }
    
    render(){
        return(
            <DetailsParametersRender details={this.details}/>
        );
    }
}

export default Details;