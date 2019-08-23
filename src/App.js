import React, { Component } from "react";
import Header from "./components/header/";
import NounList from "./components/nounList/";
import FilterControls from "./components/filterControls/";

class App extends Component {
    render() {
        const sample = {
            name: { first: "Joe", last: "Bloggs" },
            email: "j.bloggs@example.com",
            phone: "012-3456789",
            picture: { thumbnail: "./profile.png" }
        };

        const nouns = [sample, sample, sample, sample, sample];

        return (
            <div className="jumbotron">
                <Header noNouns={10} />
                <FilterControls />
                <NounList nouns={nouns} />
            </div>
        );
    }
}

export default App;
