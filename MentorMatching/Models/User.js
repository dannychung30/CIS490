
class Survey {
    constructor(key){
        this.questions = JSON.parse(localStorage.getItem(key))
    }

    setQuestions(arr){
        this.questions = arr;
    }

    getAllQuestions(){
        return this.questions;
    }

    getQuestionAtIndex(idx){
        if(idx < this.size() - 1){
            return this.questions[idx];
        }
    }

    size(){
        return this.questions.length
    }
    
}

class User {
    constructor(){
        this.responses = {};
    }

    addResponse(question, answer){
        this.responses[question] = answer;
    }

    getResponseFromQuestion(question){
        if (this.responses[question]){
            return this.responses[question]
        }
    }
}