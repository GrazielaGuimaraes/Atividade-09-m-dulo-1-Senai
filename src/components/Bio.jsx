import React from "react";

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

/* ATIVIDADE 9 */
{/*export const Bio = (props) => {

  return (
    <div>
      <h3>Bio</h3>
      {this.props.children}
    </div>
  )
}*/}
