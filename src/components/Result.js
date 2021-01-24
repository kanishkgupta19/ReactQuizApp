import { render } from "@testing-library/react"
import React from "react"

class Result extends React.Component{
    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h2>Quiz Result</h2>
                </div>
                <div className="card-content p-5 text-align-center">
                    <h3 style={{color:"green"}}>Quiz Completed</h3>
                    <h4>Score : {this.props.score} / 4</h4>
                </div>
                <div className="card-footer">
                    <button className="btn btn-lg btn-danger" onClick={ this.props.resetquiz }>Play Again</button>
                </div>
            </div>
        )
    }
}

export default Result

