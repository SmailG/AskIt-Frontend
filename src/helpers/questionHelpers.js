export const sortQustions = (questions, critera) => {
    if (critera === 'most-recent') {
        questions.sort((q1, q2) => {
            if(q1.questionId > q2.questionId) return -1;
            if(q1.questionId < q2.questionId) return 1;
        })

        return questions;
    } else if (critera === 'most-upvoted') {
        questions.sort((q1, q2) => {
            if(q1.upvoters.length > q2.upvoters.length) return -1;
            if(q1.upvoters.length < q2.upvoters.length) return 1;
        })
        return questions;
    } else if ( critera === 'most-answered') {
        questions.sort((q1, q2) => {
            if(q1.answerCount > q2.answerCount) return -1;
            if(q1.answerCount < q2.answerCount) return 1;
        })
        return questions;
    } else {
        return questions;
    }
}