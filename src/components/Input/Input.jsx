/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React, { PureComponent } from 'react'
import './Input.css'

export default class Input extends PureComponent {
    render() {
        const { number } = this.props
        return (
            <div className="inputWidth flexColumnInput heightInput">
                <div className="flexRowInput">
                    <span className="letter numbers spaceLetter">{number}</span>
                </div>
            </div>
        )
    }
}
