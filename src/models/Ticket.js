export default class Ticket {
  constructor(ticketValues) {
    const {names, location, issue, urgency, id } = ticketValues;
    this.names = names;
    this.location = location;
    this.issue = issue;
    // I want the urgency property to be limited to values between 1 and 10.
    // Currently, I'm achieving this by limiting the values in the forms 
    // for creating and editing a ticket, as well as within handleUpdateTicketUrgency().
    // This class should also enforce those limits.
    // I could achieve that by creating a "setter" method within this class.
    this.urgency = urgency;
    this.id = id;
  }
}