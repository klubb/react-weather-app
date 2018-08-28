import React, { Component } from 'react';

const Deletebutton = props => (
    <div>
        <button onClick={props.handleDelete}>Delete</button>
    </div>
)
export default Deletebutton;