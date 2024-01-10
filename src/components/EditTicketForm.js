import React from "react";
import PropTypes from "prop-types";
import ReuseableForm from "./ReuseableForm";

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
      <ReuseableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update Ticket" />
    </>
  )
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
}

export default EditTicketForm;