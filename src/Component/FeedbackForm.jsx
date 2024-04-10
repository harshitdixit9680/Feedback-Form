import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackList from './FeedbackList'; // Import the FeedbackList component

const FeedbackForm = () => {
  const [rating, setRating] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackData, setFeedbackData] = useState([]); // State to hold feedback data

  useEffect(() => {
    // Load feedback data from local storage when component mounts
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    setFeedbackData(storedFeedback);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleRatingChange = (value) => {
    setRating(value === rating ? '' : value); // Toggle rating
  };

  const handleFeedbackChange = (e) => {
    const { value } = e.target;
    setFeedbackText(value);
  };

  const editFeedback = (id, newText) => {
    const updatedFeedbacks = feedbackData.map(feedback => {
      if (feedback.id === id) {
        return { ...feedback, feedbackText: newText };
      }
      return feedback;
    });
    localStorage.setItem('feedback', JSON.stringify(updatedFeedbacks));
    setFeedbackData(updatedFeedbacks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !feedbackText) return;

    const newFeedback = {
      id: uuidv4(),
      rating: parseInt(rating),
      feedbackText: feedbackText
    };

    const updatedFeedback = [...feedbackData, newFeedback];
    localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
    setFeedbackData(updatedFeedback);

    setRating('');
    setFeedbackText('');
  };

  const deleteFeedback = (id) => {
    const updatedFeedback = feedbackData.filter(feedback => feedback.id !== id);
    localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
    setFeedbackData(updatedFeedback);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="day-1390-feedback-pop-up-ui-de">
          <div className="day-1390-feedback-pop-up-ui-de-child" />
          <div className="rectangle-parent">
            <div className="component-child" />
            <div className="rectangle-group">
              <div className="group-child" />
              <div className="bttnfilled">
                <button type="submit" style = {{    marginTop: "111px", backgroundColor : "rgb(60 159 72)",borderRadius : "17px",padding : "7px 17px 7px "}}>Send</button>
              </div>
              <textarea
                className="tell-us-something"
                placeholder="Enter your feedback..."
                value={feedbackText}
                onChange={handleFeedbackChange}
              />
            </div>
            <img className="iconsclose" alt="" src="/iconsclose.svg" />
            <b className="how-likely-are">
              How would you rate Your Serviese with us 
            </b>
            <div className="frame-parent">
              <div className="componentsrounded-btn-parent">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <div
                    key={value}
                    className={`componentsrounded-btn ${rating === value ? 'selected' : ''}`}
                    onClick={() => handleRatingChange(value)}
                    style={{ backgroundColor: rating === value ? '#9f1515' : 'white', cursor: "pointer", borderRadius: "25px" }}
                  >
                    <div className="ellipse-parent">
                      <div className="group-item" />
                      <div className="group-inner" />
                      <div className="div">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="not-likely-at">Not likely at all</div>
              <div className="extremely-likely">Extremely likely</div>
            </div>
          </div>
        </div>
      </form>

      {/* Display the feedback list */}
      <div>
        <FeedbackList  
          feedbacks={feedbackData} 
          deleteFeedback={deleteFeedback} 
          editFeedback={editFeedback} // Pass editFeedback function as a prop
        />
      </div>
    </>
  );
};

export default FeedbackForm;
