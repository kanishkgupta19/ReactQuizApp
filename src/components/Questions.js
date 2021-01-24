import React from "react";
import QuestionBox from "./QuestionBox";
import data from "./../data";
import Result from "./Result";


class Questions extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
            QuestionBank:[],
            qno:0,
            score:-1,
            selectedOption:[0,0,0,0],
            correctAns:[0,0,0,0]
        }
         this.getQuestions = this.getQuestions.bind(this);
         this.nextQuestion = this.nextQuestion.bind(this);
         this.prevQuestion = this.prevQuestion.bind(this);
         this.SelectOption = this.SelectOption.bind(this);
         this.submitTest = this.submitTest.bind(this);

    }


    pushQuesion(index)
    {
        console.log("index=", index)
        this.setState({
            Question:this.state.QuestionBank[index].Question,
            Option1:this.state.QuestionBank[index].Option1,
            Option2:this.state.QuestionBank[index].Option2,
            Option3:this.state.QuestionBank[index].Option3,
            Option4:this.state.QuestionBank[index].Option4,
            CorrectOption:this.state.QuestionBank[index].CorrectOption,
            MarksAllocated:this.state.QuestionBank[index].MarksAllocated,
        },()=>{
            let correctANS = this.state.correctAns;
            correctANS[index]=this.state.QuestionBank[index].CorrectOption;
            this.setState({correctAns:correctANS});  
            })

    }

    getQuestions= ()=>{
        data(this.props.difficultyLevel, 4).then(qu=>{
            this.setState({QuestionBank: qu}, ()=>{this.pushQuesion(this.state.qno)});
        });
    };

    componentDidMount(){
        this.getQuestions();
    }

    nextQuestion(){
        let QNO = this.state.qno;
        if(QNO<3)
            this.setState({qno:QNO+1}, ()=>{
                    this.pushQuesion(QNO+1)
            })
    }

    prevQuestion(){
        let QNO = this.state.qno;
        if(QNO>0)
            this.setState({qno:QNO-1}, ()=>{
                    this.pushQuesion(QNO-1);
            })
    }


    SelectOption(option, i){
        this.state.selectedOption[i]=option;
    }

    submitTest()
    {
       let marks=0
        for (let i = 0; i < 4; i++) {
            if(Number(this.state.correctAns[i])==Number(this.state.selectedOption[i]))
                marks=marks+1
            else
                console.log("Elsetgg")
        }
        this.setState({score:marks}, ()=>{console.log("Score=",marks);})
    }


    render(){
        return(
                <div className="question">
                
                    { this.state.qno>-1 && this.state.qno<4 && this.state.score==-1
                    ? (<div>
                    <QuestionBox 
                    qno={this.state.qno}
                    question={this.state.Question}
                    opt1 = {this.state.Option1}
                    opt2 = {this.state.Option2}
                    opt3 = {this.state.Option3}
                    opt4 = {this.state.Option4}
                    correctAns = {this.state.CorrectOption}
                    marks={this.state.MarksAllocated}
                    updatemarks={this.updateScore}
                    selectedOption={this.state.selectedOption[this.state.qno]}
                    selectOptionHandler = {this.SelectOption}
                    />
                    { this.state.qno==3 ? ( <div><button onClick={this.prevQuestion} className="btn btn-black">Prev</button><br/><br/><button onClick={this.submitTest} className="btn btn-lg btn-success">SUBMIT TEST</button></div>): (
                        this.state.qno==0 ? ( <button onClick={this.nextQuestion} className="btn btn-black">Next</button>) : (<div><button onClick={this.prevQuestion} className="btn btn-black">Prev</button><button onClick={this.nextQuestion} className="btn btn-black">Next</button></div>)
                    )}
                    </div>):
                    (<Result score={this.state.score} resetquiz={this.props.reset}/>)
                    }


                    
                </div>
        )
    }

}


export default Questions