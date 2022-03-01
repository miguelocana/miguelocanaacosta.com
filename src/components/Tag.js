import * as React from "react"
import "../styles/styles.scss"

export default function Tag(props) {
    const { title } = props;
    return (
            <div className="topic-tag">
                {title}
            </div>
    )
}
