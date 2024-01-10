import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  // inline styling example
  const ticketStyles = {
    fontFamily: 'sans-serif'
  }

  return (
    <>
      <div style={ticketStyles}
        onClick={() => props.whenTicketClicked(props.id)}>
        {/* <h3>{props.location}</h3> */}
        <h3>{props.names}</h3>
        {/* <p><em>{props.issue}</em></p> */}
        <p>urgency: {props.urgency}</p>
        <hr />
      </div>
    </>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  urgency: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenTicketClicked: PropTypes.func
}

export default Ticket;