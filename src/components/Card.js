import React, { useState } from "react";
import { Collapse } from "react-collapse";
import classNames from "classnames";

export default function Card(props) {
  const { content } = props;
  const [isOpened, setIsOpened] = useState(false);
  
  const cardHeaderClasses = classNames({
    "card-header": true,
    "is-opened": isOpened
  });

  return (
    <div class="card">
      <header class={cardHeaderClasses} onClick={() => setIsOpened(!isOpened)}>
        <div class="card-header-title" id="where">
          {content.where}
        </div>
        <div class="card-header-title" id="date-to"></div>
        <button class="card-header-icon" aria-label="more options">
          <p>{content.to.slice(4) === "" ? content.to : content.to.slice(4)}</p>
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <Collapse isOpened={isOpened}>
        <div class="card-content">
          <div class="content">
            <div className="title is-5">
              {content.what} <span>@ {content.where}</span>
            </div>

            <div className="subtitle is-6 is-family-monospace">
              {content.from} - {content.to}
            </div>

            <ul>
              {content.experience.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
