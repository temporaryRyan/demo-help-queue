import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedTicket: null,
      editing: false,
      mainTicketList: []
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }))
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      mainTicketList: newMainTicketList,
      formVisibleOnPage: false
    })
  }

  handleEditingTicket = (editedTicket) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(editedTicket);
    this.setState({
      mainTicketList: editedMainTicketList,
      editing: false,
      selectedTicket: null
    })
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({ selectedTicket: selectedTicket })
  }

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null
    })
  }

  handleUpdateTicketUrgency = (ticketToUpdate, delta) => {
    const updatedUrgency = ticketToUpdate.urgency + delta;
    
    if (updatedUrgency >= 1 && updatedUrgency <= 10) {
      const updatedTicket = { ...ticketToUpdate, urgency: updatedUrgency };
      
      const newMainTicketList = this.state.mainTicketList
        .filter(ticket => ticket.id !== ticketToUpdate.id)
        .concat(updatedTicket);
  
      this.setState({
        mainTicketList: newMainTicketList,
        selectedTicket: updatedTicket
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket}
                                              onEditTicket={this.handleEditingTicket} />
      buttonText = "Back to Ticket List"
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket}
                                            onClickingDelete={this.handleDeletingTicket}
                                            onClickingEdit={this.handleEditClick}
                                            onClickingUpdateUrgency={this.handleUpdateTicketUrgency} />
      buttonText = "Back to Ticket List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Back to Ticket List"
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList}
                                          onTicketSelection={this.handleChangingSelectedTicket} />
      buttonText = "Add New Ticket"
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default TicketControl;
