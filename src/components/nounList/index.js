import React, { Component } from "react";
import Noun from "../noun/";
import './nounList.css';

export default class NounList extends Component {
    render() {
        const nounCards = this.props.nouns.map(c => (
            <Noun key={c.phone} noun={c} />
        ));
        return (
            <div className="container-fluid nouns bg-info">
                <div className="row">{nounCards}</div>
            </div>
        );
    }
}