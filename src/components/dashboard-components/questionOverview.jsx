import React, { Component }  from 'react';
import DashboardTabs from './dashboardTabs';
import Question from './question';
import { Icon,  Card } from 'semantic-ui-react'

const QuestionOverview = ({
    tabs,
    selectTab,
    selectedTab,
    questions,
    loadMore,
    hasMoreQuestions
}) => {

    const handleClick = () => {
        loadMore(questions.length, 20, selectedTab.criteria);
    }

return (
        <div className="question-overview">
            <DashboardTabs
                tabs={tabs}
                selectTab={selectTab}
                selectedTab={selectedTab}
            />
        <div className="question-list">
            {questions.map(question => <Question key={question.questionId} question={question} />)}
            <Card raised className="question-card load-more-card" onClick={handleClick}>
                <Card.Content className="load-more" header={hasMoreQuestions ? "Load more.." : "Seems like there are no more.." } />
            </Card>
        </div>
        </div>
    );
}

export default QuestionOverview;