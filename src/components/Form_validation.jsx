// Import necessary hooks and components
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

// Create your form component
const MyForm = () => {
  // Initialize the react-hook-form hook
  const { handleSubmit, control, register, formState: { errors, isSubmitting } } = useForm();

  // Define a function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  return (
    // Use the handleSubmit function and pass your onSubmit function
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Use the register function to register your input fields */}
      <label>
        First Name:
        <input {...register('firstName', { required: 'This field is required' })} />
      </label>
      {/* Display errors using the errors object */}
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label>
        Last Name:
        <input {...register('lastName', { minLength: { value: 3, message: 'Too short' } })} />
      </label>
      {errors.lastName && <p>{errors.lastName.message}</p>}

      {/* Using Controller for custom components like React Select */}
      <Controller
        name="gender"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div>
            <label>Gender:</label>
            <select {...field}>
              <option value="" disabled>Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
        rules={{ required: 'This field is required' }}
      />
      {errors.gender && <p>{errors.gender.message}</p>}

      {/* Disable the form while it's submitting */}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
