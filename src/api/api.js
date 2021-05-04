// API Handlers
const axios = require('axios');

export const sendTextInput = async (id, input_text) => {
  // Triggered when user finished entering text.
  // Send POST request to backend server to save text into db.
  try {
    const response = await axios.post('/api/calendar_text', {
      id: id,
      text: input_text
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export const getTextInput = async (box_id) => {
  // Triggered when user click the box.
  // Send GET request to server to load the most recent text from db.
  try {
    const response = await axios.get(`/api/calendar_text/${box_id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}