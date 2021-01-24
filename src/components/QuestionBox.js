import React, {useState} from "react";
import { MathComponent } from 'mathjax-react'
import Latex from "./Mathjax"

class QuestionBox extends React.Component{
    constructor(props)
    {
        super(props)

        this.state={
            sopts:[0,0,0,0],
            visited:[false, false, false, false]
        }
        this.selectOption = this.selectOption.bind(this);
    }

    selectOption(option)
    {
            //this.props.selectedOption=1;
            this.props.selectOptionHandler(option, this.props.qno)
            let optts = [0,0,0,0]
            optts[this.props.qno]=option;
            this.setState({sopts:optts});
    }

    /*checkAnswer(option)
    {
        if()
    }*/

    render(){
        let x = this.props.question;
        return(
        <div className="question">
            <div className="card shadow m-4">
                <div className="card-header p-4">
                    <span style={{textAlign:'left'}}><h4>Q-{this.props.qno+1}: <b> <MathComponent tex={String.raw`${x}`} /></b></h4></span>
                </div>
               <div className="card-content p-5">
                    <div className="row" style={{fontSize:"18px"}}>
                        <div className="col-md-6"><div onClick={()=>{ this.selectOption(1)}} className={ this.props.selectedOption==1 ? ("option selected"): ( this.state.sopts[this.props.qno]==1  ? ("option saved-selection"):("option") )} > <span className="opt">A.)</span><MathComponent tex={String.raw` ${this.props.opt1}`}/></div></div>
                        <div className="col-md-6"><div onClick={()=>{ this.selectOption(2)}} className={ this.props.selectedOption==2 ? ("option selected"): ( this.state.sopts[this.props.qno]==2  ? ("option saved-selection"):("option") )} > <span className="opt">B.)</span><MathComponent tex={String.raw` ${this.props.opt2}`}/></div></div>
                        <div className="col-md-6"><div onClick={()=>{ this.selectOption(3)}} className={ this.props.selectedOption==3 ? ("option selected"): ( this.state.sopts[this.props.qno]==3  ? ("option saved-selection"):("option") )} > <span className="opt">C.)</span><MathComponent tex={String.raw` ${this.props.opt3}`}/></div></div>
                        <div className="col-md-6"><div onClick={()=>{ this.selectOption(4)}} className={ this.props.selectedOption==4 ? ("option selected"): ( this.state.sopts[this.props.qno]==4  ? ("option saved-selection"):("option") )} > <span className="opt">D.)</span><MathComponent tex={String.raw` ${this.props.opt4}`}/></div></div>
                    </div>
                </div>
            </div>
     </div>)
    }
}


export default QuestionBox;
