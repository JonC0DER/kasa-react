import React, { Component } from "react";
import CollapseComponent from "../main/collapse";

class ContentTxt extends Component{
    constructor(props){
        super(props)
        //this.data = this.props.data
        this.descEquip = [
            {
                title: "Description",
                content: this.props.data.description
            },
            {
                title: "Equipements",
                content: this.props.data.equipments
            }
        ]
    }

    render(){
        return(
            <div className="content-text">
            {this.descEquip.map((elem, key) =>
                <CollapseComponent key={key} descEquip={elem} />
            )}
            </div>
        );
    }
}

export default ContentTxt;