import React, { Component } from "react";
import FeedbackContainer from "./FeedbackContainer";
import FeedbackElements from "./FeedbackElements/FeedbackElements";


export class App extends Component {


  
  render() {
    return (
      <>
        <FeedbackContainer>
          <FeedbackElements />
        </FeedbackContainer>
      </>
    );
  };
};
