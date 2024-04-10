import React, { useState } from 'react';

const FeedbackEntry = ({ feedback, deleteFeedback, editFeedback }) => {
  // State to manage edit mode, edited feedback text, and edited rating
  const [isEditing, setIsEditing] = useState(false);
  const [editedFeedbackText, setEditedFeedbackText] = useState(feedback.feedbackText);
  const [editedRating, setEditedRating] = useState(feedback.rating);

  // Function to toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Function to handle text change in edit mode
  const handleFeedbackChange = (e) => {
    setEditedFeedbackText(e.target.value);
  };

  // Function to handle rating change in edit mode
  const handleRatingChange = (e) => {
    setEditedRating(e.target.value);
  };

  // Function to handle update of feedback
  const handleUpdateFeedback = () => {
    editFeedback(feedback.id, editedFeedbackText, editedRating);
    setIsEditing(false);
  };

  return (
    <div style={styles.container}>
      {/* Display feedback details */}
      <p style={styles.rating}><strong>Rating:</strong> {isEditing ? (
          // Edit mode: rating input
          <input 
            type="number"
            style={styles.editRating}
            value={editedRating}
            onChange={handleRatingChange}
          />
        ) : (
          // View mode: rating text
          editedRating
        )}
      </p>
      {isEditing ? (
        // Edit mode: textarea and update/cancel buttons
        <div>
          <textarea
            style={styles.editTextarea}
            value={editedFeedbackText}
            onChange={handleFeedbackChange}
          />
          <button style={styles.button} onClick={handleUpdateFeedback}>Update</button>
          <button style={styles.button} onClick={handleEditToggle}>Cancel</button>
        </div>
      ) : (
        // View mode: edit and delete buttons
        <div>
          <p style={styles.feedback}><strong>Feedback:</strong> {feedback.feedbackText}</p>
          <button style={styles.button} onClick={handleEditToggle}>Edit</button>
          <button style={styles.button} onClick={() => deleteFeedback(feedback.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#f9f9f9',
  },
  rating: {
    marginBottom: '8px',
    fontSize: '18px',
  },
  feedback: {
    marginBottom: '8px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#9f1515',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    outline: 'none',
    marginRight: '8px',
  },
  editTextarea: {
    marginBottom: '8px',
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  editRating: {
    width: '50px',
    padding: '4px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '8px',
  },
};

export default FeedbackEntry;
