import React, {Component} from "react";
import AboutJson from "../../../assets/datas/about.json";
import CollapseComponent from "../main/collapse";

class ArticleAbout extends Component{
    constructor(props){
        super(props);
        this.aboutData = AboutJson;
    }

    render() {
        return (
            <>
            {this.aboutData.map((entry, key) =>
                <CollapseComponent key={key} descEquip={entry} />
            )}
            </>
        )
    }
}

export default ArticleAbout;