import React, { Component } from "react";

class Carrousel extends Component{
    constructor(props){
        super(props);
        this.state = {picPos: 1};
        this.lightBox = React.createRef();
        this.lightBoxContainer = React.createRef();
        this.pictures = props.data.pictures;
        this.nextPic = this.nextPic.bind(this);
        this.previewPic = this.previewPic.bind(this);
        this.setPlan = this.setPlan.bind(this);
        this.initLightBox = this.initLightBox.bind(this);
        this.arrayPlan = ["first-plan", "second-plan", "x-plan"];
    }
    
    childPics(){
        return Array.from(this.lightBox.current.children);
    }

    initLightBox(){
        const arrayPics = this.childPics().filter(elem => (elem.localName === "img")? elem:null);
        const figcaption = this.childPics().filter(elem => (elem.localName === "figcaption")? elem:null);
        const lbc = this.lightBoxContainer.current;
        const lbcArray = [lbc.firstChild, lbc.lastChild];
        if (arrayPics.length < 2) {
          figcaption[0].classList.add('one-pic')
          lbcArray.map(elem => elem.classList.add('one-pic'))
        }
    }
    
    currentPic(){
        return this.childPics().filter(pic => (pic.className === this.arrayPlan[0])?pic:null)[0];
    }
    
    picIndex(){
        return this.childPics().indexOf(this.currentPic())
    }
    
    generalState(sens){
        const childNodesPics = this.childPics();
        const el = childNodesPics.filter(pic => (pic.className === this.arrayPlan[sens[3]])?pic:null)[0];
        let prev = el.previousElementSibling
        let next = el.nextElementSibling
        if(prev === null){
            prev = childNodesPics[childNodesPics.length -2]
        }
        else if(next.localName === "figcaption"){
            next = childNodesPics[0]
        }
        if (prev !== null && prev.localName === 'img' && next !== null && next.localName === 'img') {
            prev.className = this.arrayPlan[sens[0]]
            next.className = this.arrayPlan[sens[1]]
        }
        el.className = this.arrayPlan[sens[2]]
    }

    setPlan(key){
        return (key > 1)?this.arrayPlan[2]:this.arrayPlan[key]
    }

    nextPic(){
        this.setState((state) => ({picPos: state.picPos = this.picIndex() + 1}))
        this.generalState([0,2,1,0])
    }
    
    previewPic(){
        this.setState((state) => ({picPos: state.picPos = this.picIndex() + 1}))
        this.generalState([2,1,0,1])
    }

    render(){
        return(
            <div className="carrousel" ref={this.lightBoxContainer} onLoad={this.initLightBox}>
                <span className="left-click" onClick={this.nextPic}></span>
                <figure ref={this.lightBox}>
                    {this.pictures.map((pic, key) =>
                        <img className={this.setPlan(key)} key={key} src={pic} alt="xx" />
                    )}
                    <figcaption>{this.state.picPos}/{this.pictures.length}</figcaption>
                </figure>
                <span className="right-click" onClick={this.previewPic}></span>
            </div>
        );
    }
}

export default Carrousel;