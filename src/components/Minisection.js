import * as React from "react"

export default function Minisection(props) {
    const { title, id, children } = props;
    return (
            <div className="minisection">
                <p id="title">{title}</p>
                <div id="minisection__content">
                    {children}
                </div>
            </div>
    
    )
}
