import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit, onClickingUpdateUrgency } = props;

  function handleDecrementingUrgency(){
    onClickingUpdateUrgency(ticket, -1);
  }
  
  function handleIncrementingUrgency(){
    onClickingUpdateUrgency(ticket, 1);
  }

  return (
    <>
      <h3>{ticket.location}</h3>
      <h3>{ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <p>urgency: {ticket.urgency}</p>
      <button onClick={handleIncrementingUrgency}>Increase Urgency</button>
      <button onClick={handleDecrementingUrgency}>Decrease Urgency</button>
      <br />
      <button onClick={() => onClickingEdit(ticket.id)}>Edit Ticket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <br />
    </>
  )
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrement: PropTypes.func
}

export default TicketDetail;