


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
    constructor(first_name, last_name, email){
        // this.role = ;
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.responses = {question, answer};
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
