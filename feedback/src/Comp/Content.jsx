import React, { useState } from 'react';
import { saveFeedback } from '../Service/feedbackservice'; 
import { useNavigate } from 'react-router-dom';
const Content = () => {
  const [bookName, setBook] = useState('');
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({
    book: '',
    feedback: '',
    name: ''
  });
  const navigate = useNavigate(); 

  function saveContent(e) {
    e.preventDefault();

    if (validateForm()) {
      const feedbackData = { bookName, feedback, name };

      saveFeedback(feedbackData) 
        .then((response) => {
          console.log(response.data);
          navigate('/feedback'); 
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (bookName.trim()) {
      errorsCopy.bookName = '';
    } else {
      errorsCopy.bookName = 'Book name is required';
      valid = false;
    }
    if (feedback.trim()) {
      errorsCopy.feedback = '';
    } else {
      errorsCopy.feedback = 'Feedback is required';
      valid = false;
    }
    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = 'Name is required';
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 col-offset-md-3'>
          <h2 className='text-center'>FeedBack Form</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-3'>
                <label className='form-label'>Book:</label>
                <input
                  type='text'
                  placeholder='Enter Book Name'
                  name='book'
                  value={bookName}
                  className={`form-control ${errors.book ? 'is-invalid' : ''}`}
                  onChange={(e) => setBook(e.target.value)}
                />
                {errors.book && <div className='invalid-feedback'>{errors.book}</div>}
              </div>
              <div className='form-group mb-3'>
                <label className='form-label'>Feedback:</label>
                <textarea
                  placeholder='Leave a comment here'
                  className={`form-control ${errors.feedback ? 'is-invalid' : ''}`}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
                {errors.feedback && <div className='invalid-feedback'>{errors.feedback}</div>}
              </div>
              <div className='form-group mb-3'>
                <label className='form-label'>Name:</label>
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  name='name'
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>
              <button className='btn btn-success' onClick={saveContent}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
