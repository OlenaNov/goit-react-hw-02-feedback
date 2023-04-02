const { FeedbackList, FeedbackItem, FeedbackReponse } = require("./FeedbackElements.styled");

const FeedbackElements = ({ onFeedback }) => {

    return (
        <FeedbackList>
            <FeedbackItem>
                <FeedbackReponse type="button" name="good" onClick={onFeedback}>Good</FeedbackReponse>
            </FeedbackItem>
            <FeedbackItem>
                <FeedbackReponse type="button" name="neutral" onClick={onFeedback}>Neutral</FeedbackReponse>
            </FeedbackItem>
            <FeedbackItem>
                <FeedbackReponse type="button" name="bad" onClick={onFeedback}>Bad</FeedbackReponse>
            </FeedbackItem>
        </FeedbackList>    
        );
};

export default FeedbackElements;