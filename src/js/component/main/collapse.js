import React, { Component } from "react";

class CollapseComponent extends Component{
    constructor(props){
        super(props)
        this.btnCollapse = React.createRef();
        this.collapse = this.collapse.bind(this);
        this.descEquip = props.descEquip;
        this.formatData = this.formatData.bind(this);
    }

    collapse(){
        const btn = this.btnCollapse.current;
        const btnNext = btn.nextElementSibling;
        const cc = "close-click";
        btnNext.className = (btnNext.className === "open")?"close":"open";
        btnNext.firstChild.className = btnNext.className;
        (btn.classList.contains(cc))?btn.classList.remove(cc): btn.classList.add(cc)
    }

    formatData(setParam){
        return (!Array.isArray(setParam))?[setParam]:setParam
    }

    render(){
        return(
            <article>
                <h4 onClick={this.collapse} ref={this.btnCollapse}>{this.descEquip.title}</h4>
                <p className="open">
                {this.formatData(this.descEquip.content).map((content, k) =>
                    <span key={k} className="open">{content}<br/></span>
                )}
                </p>
            </article>
        );
    }
}

export default CollapseComponent;