import { CategoryFeedback, FeedbackCategoryList, FeedbackItem, ValueFeedback } from "./Statistics.styled";

const Statistics = ( { good, neutral, bad , total, positivePercentage } ) => {
    const percentGood = positivePercentage();
    return (
        <FeedbackCategoryList>
            <FeedbackItem>
                <CategoryFeedback>Good: 
                    <ValueFeedback>{good}</ValueFeedback>
                </CategoryFeedback>
            </FeedbackItem>
            <FeedbackItem>
                <CategoryFeedback>Neutral: 
                    <ValueFeedback>{neutral}</ValueFeedback>
                    </CategoryFeedback>
            </FeedbackItem>
            <FeedbackItem>
                <CategoryFeedback>Bad: 
                    <ValueFeedback>{bad}</ValueFeedback>
                    </CategoryFeedback>
            </FeedbackItem>
            <FeedbackItem>
                <CategoryFeedback>Total: 
                    <ValueFeedback>{total()}</ValueFeedback>
                    </CategoryFeedback>
            </FeedbackItem>
            {percentGood && (<FeedbackItem>
                <CategoryFeedback>Positive feedback: 
                    <ValueFeedback>{percentGood}%</ValueFeedback>
                    </CategoryFeedback>
            </FeedbackItem>)}
        </FeedbackCategoryList>   
    );
};

export default Statistics;