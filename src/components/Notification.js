import * as React from "react"

export default function Notification(props) {
    const { children } = props;
    return (
            <div className="notification msg">
                {children}
            </div>
    )
}
