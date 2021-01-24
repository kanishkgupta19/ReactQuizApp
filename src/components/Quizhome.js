import  React  from "react";

class Quizhome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            difficulty:""
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
        this.start_quiz = this.start_quiz.bind(this)
    }

    start_quiz(){
        this.props.parentMethod(this.state.difficulty);
    }

    handleDropdownChange(e) {
        this.setState({ difficulty: e.target.value }, ()=>{console.log( e.target.value)});
      }


    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h3>LearnQ.ai Quiz Assgn</h3>
                </div>
                <div className="card-content p-5 text-align-center">
                    <h4>Start Quiz</h4>
                    <label>Difficulty Level:</label><br/>
                    <center>
                    <select style={{width:"60%"}} onChange={this.handleDropdownChange} className="mx-5 my-2 form-control form-control-lg">
                        <option value="" selected disabled>Select Difficulty Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        <option value="">Random</option>
                    </select>
                    </center>
                    <button className="btn btn-success btn-lg" onClick={ this.start_quiz }>Start Exam</button>
                </div>
            </div>
        );
    }
}


export default Quizhome