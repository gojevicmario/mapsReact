import React, { Component} from 'react'

const layout = (props) => (
    <>
        <div>Toolbar</div>
        <main className="container">
            {props.children}
        </main>
    </>
)

export default layout;