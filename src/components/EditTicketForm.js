import React from "react";
import PropTypes from "prop-types";

function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      urgency: parseInt(event.target.urgency.value),
      id: ticket.id
    })
  }

  return (
    <>
      <form onSubmit={handleEditFormSubmission}>
        <input
          type="text"
          name="names"
          defaultValue={ticket.names}
          placeholder="Pair Names"
          required />
        <br />
        <input
          type="text"
          name="location"
          defaultValue={ticket.location}
          placeholder="Location"
          required />
        <br />
        <textarea
          name="issue"
          defaultValue={ticket.issue}
          placeholder="Describe your issue"
          required />
        <br />
        <label htmlFor="urgency">Urgency: </label>
        <input
          type="number"
          name="urgency"
          min="1"
          max="10"
          defaultValue={ticket.urgency}
          required />
        <br />
        <button type="submit">Update Ticket</button>
      </form>
    </>
  )
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
}

export default EditTicketForm;