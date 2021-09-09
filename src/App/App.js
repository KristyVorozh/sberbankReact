import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menuy from "../components/Menu/Menu"
import Hol from "../components/Hol/hol"
class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                    <Route path="/"  component={Menuy} exact />
                    <Route path="/hol" component={Hol}/>
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}
export default App