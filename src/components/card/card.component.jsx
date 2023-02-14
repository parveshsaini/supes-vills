import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    return (
      <div className="card-container" key={this.props.monster.id}>
        <img
          src={`https://robohash.org/${
            69 * this.props.monster.id
          }?set=set2&size=170x170`}
          alt={`monster ${this.props.monster.name}`}
        />
        <h2>{this.props.monster.name}</h2>
        <p>{this.props.monster.email}</p>
        </div>
    );
  }
}

export default Card;
