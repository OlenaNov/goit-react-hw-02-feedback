import { Title, Wrapper } from "./Section.styled";

const Section = ({ title, children }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {children}
        </Wrapper>
    )
};

export default Section;

// class FeedbackContainer extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//       };

//       handleFeedback = e => {
//         const valueFeedback = e.currentTarget.name;

//         this.setState(prevState => ({
//             [valueFeedback]: prevState[valueFeedback] + 1,
//         }))
//       };

//       countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     };

//       countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         const total = this.countTotalFeedback();
//         if(good) {
//             return Math.round(good / total * 100);
//         }; 
//     };

//       render () {
//         return (
//             <>
//             <Wrapper>
//                 <Title>Please leave feedback</Title>
//                 <FeedbackOptions onFeedback={this.handleFeedback}/>
//             </Wrapper>
//             <Wrapper>
//                 <Title>Statistics</Title>
//                 <FeedbackStatistics 
//                 value={this.state} 
//                 onTotal={this.countTotalFeedback} 
//                 onPercentGood={this.countPositiveFeedbackPercentage}
//                 />
//             </Wrapper>
//             </>
//         )
//       }
// };

// export default FeedbackContainer;