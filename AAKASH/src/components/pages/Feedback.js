import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import UserFunctions from '../../Axios/UserAxios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CarRepairFeedback = () => {
  const history = useHistory();
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const onSubmitFeedback = async (data) => {
    try {
      // Assuming you have an API endpoint to submit feedback
      await UserFunctions.submitCarRepairFeedback(data);

      // Display success message
      setSuccessMessage('Thank you for your feedback!');

      // You can redirect the user or perform any other actions as needed
      // history.push('/dashboard'); // Example redirect
    } catch (error) {
      // Handle error - you can display an error message to the user
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h3 className="text-center mb-4"> Please provide your valuable feedback ..!!</h3>
        <h6 className="text-center mb-4"> to let us know what we can do better next time ..!! </h6>


        
        <form onSubmit={handleSubmit(onSubmitFeedback)}>
          <div className="form-group">
            <label htmlFor="serviceRating">Service Rating</label>
            <select
              className="form-control"
              id="serviceRating"
              name="serviceRating"
              ref={register({ required: 'This field is required.' })}
            >
              <option value="">Select Rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
            {errors.serviceRating && (
              <small className="text-danger">{errors.serviceRating.message}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="feedbackComments">Comments</label>
            <textarea
              className="form-control"
              id="feedbackComments"
              name="feedbackComments"
              rows="4"
              placeholder="Share your experience and feedback..."
              ref={register}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit 
          </button>

          {successMessage && <p className="text-success mt-3">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default CarRepairFeedback;
