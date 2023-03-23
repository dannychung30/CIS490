class Matcher {

    /**
     * @constructor
     * @param {Array[tuple[number, number]]} question_pairs 
     * @param {Array[Entry]} mentee_questions 
     * @param {Array[Entry]} mentor_questions
     * @returns {none} 
     */
    constructor(question_pairs, mentee_questions, mentor_questions) {
        this.question_pairs = question_pairs;
        this.mentee_questions = mentee_questions;
        this.mentor_questions = mentor_questions;
    }
    
    /**
     * @returns {none}
     */
    generate_matches() {
        // pass
    }

    /**
     * @returns {none}
     */
    go_through_data() {
        for (const [mentee_index, mentee] of this.mentee_questions.entries()) {
            for (const [mentor_index, mentor] of this.mentor_questions.entries()) {
                console.log("Mentee: " + mentee_index + "and Mentor: " + mentor_index);
                let total_score = this.tally_score(mentee, mentor);
                console.log("Total score: " + total_score);
            }
        }
    }

    /**
     * @param {Person} mentee
     * @param {Person} mentor
     * @returns {number}
     */
    tally_score(mentee, mentor) {
        let score = 0;

        for (let i = 0; i < this.question_pairs.length; i++) {
            let mentee_question_index = this.question_pairs[i][0];
            let mentor_question_index = this.question_pairs[i][1];

            console.log("Mentee was asked: " + mentee.get_question_at_index(mentee_question_index));
            console.log("Mentor was asked: " + mentor.get_question_at_index(mentor_question_index));

            let mentee_answer = mentee.get_answer_at_index(mentee_question_index);
            let mentor_answer = mentor.get_answer_at_index(mentor_question_index);
            score += this.get_score(mentee_answer, mentor_answer);
        }
        return score;
    }

    /**
     * @param {String} mentor_answer
     * @param {String} mentor_answer
     * @returns {number}
     */
    get_score(mentee_answer, mentor_answer) {
        let score = fuzzball.ratio(mentee_answer, mentor_answer);
        console.log("Mentee answered: " + mentee_answer + "\n" + "Mentor answered: "
            + mentor_answer + "\n" + "Score: " + score);
        return score;
    }
}