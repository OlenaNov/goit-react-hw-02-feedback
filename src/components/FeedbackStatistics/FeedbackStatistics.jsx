import { CategoryFeedback, FeedbackCategoryList, FeedbackItem, ValueFeedback } from "./FeedbackStatistics.styled";

const FeedbackStatistics = ( { value: { good, neutral, bad }, onTotal, onPercentGood } ) => {
    const percentGood = onPercentGood();
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
                    <ValueFeedback>{onTotal()}</ValueFeedback>
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

export default FeedbackStatistics;