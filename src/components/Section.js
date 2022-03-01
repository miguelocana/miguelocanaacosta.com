import * as React from "react"
import "../styles/styles.scss"
import { graphql } from "gatsby"

export default function Section(props) {
    const { title, id, children } = props;
    return (
            <div className="container" id={id}>
                <div className="content">

                    {title !== null 
                    ?
                        <div className="title is-6" id="title">
                            <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                        </div>
                    :
                    ""
                    }
                    
                    {children}

                </div>
            </div>
    
    )
}
