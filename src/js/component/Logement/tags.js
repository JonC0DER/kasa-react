import React, { Component } from "react";

function TagsParametersRender({tags}) {

    return(
        <div className="tags">
            {tags.map(
                (tag, key) => <p key={key} className="tag">{tag}</p>
            )}
        </div>
    );
}

class Tags extends Component{
    constructor(props){
        super(props)
        this.tags = props.tags;
    }

    render(){
        return (
            <TagsParametersRender tags={this.tags}/>        
        );
    }
}

export default Tags;