import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReuseableForm from "./ReuseableForm";
import Ticket from "../models/Ticket";

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    // 1.) get values from form
    const ticketValues = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      urgency: parseInt(event.target.urgency.value),
      id: v4()
    }
    // 2.) use form values to create a new Ticket object
    const newTicket = new Ticket(ticketValues)
    // 3.) provide the new ticket as an argument to the function  
    // for adding a new ticket to the mainTicketList
    props.onNewTicketCreation(newTicket);
  }

  return (
    <>
      <ReuseableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Submit New Ticket" />
    </>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketForm;