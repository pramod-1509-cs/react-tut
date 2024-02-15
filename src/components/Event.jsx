import React, { useState } from 'react';

function EventHandlingExample() {
  // Step 1: Define state to manage user input
  const [inputValue, setInputValue] = useState('');

  // Step 2: Create an event handler function
  const handleInputChange = (event) => {
    // Step 3: Update the state with the user input
    setInputValue(event.target.value);
  };

  // Step 4: Render the component with an input field and display the input value
  return (
    <div>
      <h1>Event Handling Example</h1>

      {/* Step 5: Add an input field with an onChange event */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />

      {/* Step 6: Display the input value */}
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default EventHandlingExample;
