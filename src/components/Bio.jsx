import React from "react";



/* ATIVIDADE 9 - modificar componente de classe para componente funcional */
export const Bio = (props) => {

  return (
    <div>
      <h3>Bio</h3>
      {props.children}
    </div>
  )
}



{/*
export class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Bio</h3>
        {this.props.children}
      </div>
    );
  }
}

*/}
