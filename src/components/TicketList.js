import React from "react";
import Ticket from "./Ticket.js";
import PropTypes from "prop-types";

function TicketList(props) {
  return (
    <>
      <hr />
      {props.ticketList.map((ticket) =>
        <Ticket
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          urgency={ticket.urgency}
          id={ticket.id}
          key={ticket.id} />
      )}
    </>
  )
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
}

export default TicketList;