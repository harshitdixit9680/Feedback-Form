import React from 'react';
import FeedbackEntry from './FeedbackEntry';

const FeedbackList = ({ feedbacks, deleteFeedback,editFeedback }) => {
  return (
    <div style ={{marginTop : "494px",border : "1px solid rgb(204, 204, 204)",borderRadius : "8px" ,padding:"16px",backgroundColor : " rgb(249, 249, 249)"}} >
      {/* <h2>Feedback</h2> */}
      {feedbacks.map((feedback) => (
        <FeedbackEntry key={feedback.id} feedback={feedback} deleteFeedback={deleteFeedback} editFeedback={editFeedback}/>
      ))}
    </div>
  );
};

export default FeedbackList;
