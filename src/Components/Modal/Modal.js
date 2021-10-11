import React, { Component } from 'react';
import {createModal} from 'react-dom';

const modal = document.querySelector("#modal");

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }
    handleKeyDown = (event) => {
        if (event.code === "Escape") {
            this.props.onClose();
        }
    };
    handleBackDrop = (event) => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };


    render() {
        return createModal(
            <div className="Overlay" onClick={this.handleBackDrop}>
                <div className="Modal" >
                    <img src={this.props.largeImageURL} alt="" />
                </div>
            </div>, modal,
        );
    }
}

