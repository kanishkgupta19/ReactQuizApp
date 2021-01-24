import React from "react";
import Quizhome from "./Quizhome";
import Questions from "./Questions";

class Dashboard extends React.Component{

    constructor(props)
    {
        super(props)
        this.startquiz = this.startquiz.bind(this);
        this.resetquiz = this.resetquiz.bind(this);
        this.state={
            startquiz:0,
            difficultyLevel:""
        };
    }

    startquiz(difficulty){
        this.setState({startquiz:1, difficultyLevel:difficulty});
    }

    resetquiz(){
        this.setState({startquiz:0});
    }
    

    render(){
        if(this.state.startquiz <1)
            return(<Quizhome parentMethod={this.startquiz} />)
        else
            return(<Questions difficultyLevel={this.state.difficultyLevel} reset={this.resetquiz}/>)
    }
}

export default Dashboard