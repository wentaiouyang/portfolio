import React, { Component } from "react";

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    isOpen: false,
    setIsOpen: (isOpen) => {
      this.setState({ isOpen: isOpen });
    },
  };

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
