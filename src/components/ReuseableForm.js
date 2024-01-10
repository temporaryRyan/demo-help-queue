import React from "react";
import PropTypes from "prop-types";

function ReuseableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="names"
          placeholder="Pair Names"
          required />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Location"
          required />
        <br />
        <textarea
          name="issue"
          placeholder="Describe your issue"
          required />
        <br />
        <label htmlFor="urgency">Urgency: </label>
        <input
          type="number"
          name="urgency"
          min="1"
          max="10"
          defaultValue="1"
          placeholder="urgency"
          required />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}

ReuseableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReuseableForm;