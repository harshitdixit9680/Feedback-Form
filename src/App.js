import { useState } from 'react';
import './App.css';
import FeedbackForm from './Component/FeedbackForm';
import Navbar from './Component/Navbar';
import { Routes, Route} from "react-router-dom";


function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingFeedback, setEditingFeedback] = useState(null);

  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };


  const updateFeedback = (updatedFeedback) => {
    setFeedbacks(feedbacks.map((feedback) => 
      feedback.id === updatedFeedback.id ? updatedFeedback : feedback
    ));
    setEditingFeedback(null); // Clear editing state after update
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<FeedbackForm addFeedback={addFeedback} />} />

      </Routes>

      {/* Render edit form if editingFeedback is not null */}
      {editingFeedback && (
        <div className="edit-feedback-form">
          <FeedbackForm feedback={editingFeedback} updateFeedback={updateFeedback} />
        </div>
      )}
    </>
  );
}

export default App;
