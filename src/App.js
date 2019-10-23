import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SkinCareRoutine from "./Components/SkinCareRoutine/SkinCareRoutine";
import SkinTypeFind from "./Components/SkinTypeFind/SkinTypeFind";
import NavBar from "./Components/NavBar/NavBar";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            rating: 0,
            range: "",
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/skincare", {
            method: "GET"
        })
            .then(res => res.json())
            .then(res =>
                this.setState({
                    products: res
                })
            );
    }



    onRating = rating => {
        this.setState({ rating });
    };

    onRange = range => {
        this.setState({ range });
    };
    display1 = show1 => {
        this.setState({
            show1: !this.state.show1
        });
    };
    display2 = show2 => {
        this.setState({
            show2: !this.state.show2
        });
    };
    display3 = show3 => {
        this.setState({
            show3: !this.state.show3
        });
    };
    display4 = show4 => {
        this.setState({
            show4: !this.state.show4
        });
    };
    display5 = show5 => {
        this.setState({
            show5: !this.state.show5
        });
    };



    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                        <h1 className="title">SkinCare Discovery</h1>
                    </header>
                    <NavBar />

                    <Switch>
                        <Route
                            path="/skintype/:skintype"
                            render={rprops => (
                                <SkinCareRoutine
                                    {...rprops}
                                    products={this.state.products}
                                    display1={this.display1}
                                    rating={this.state.rating}
                                    range={this.state.range}
                                    show1={this.state.show1}
                                    display2={this.display2}
                                    show2={this.state.show2}
                                    display3={this.display3}
                                    show3={this.state.show3}
                                    display4={this.display4}
                                    show4={this.state.show4}
                                    display5={this.display5}
                                    show5={this.state.show5}
                                    onRating={this.onRating}
                                    onRange={this.onRange}

                                />
                            )}
                        />
                        <Route path="/help" component={SkinTypeFind} />

                        <Route render={() => <h2>Page Not Found</h2>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
