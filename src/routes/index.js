import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Styled } from "./styles";
import NavBar from "../components/NavBar";
import CreateProduct from "../pages/CreateProduct";
import { useAuth } from "../hooks/contexts/AuthProvider";

function Routes(){
    const auth = useAuth();
    return(
        <div>
            <Styled.AppLayout>
                {auth && <NavBar/>}
                <Styled.PageLayout>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        {auth && <Route path="/home" component={Home}/>}
                        {auth && <Route path="/create-product" component={CreateProduct} />}
                        <Redirect from="*" to={NotFound}/>
                    </Switch>
                </Styled.PageLayout>
            </Styled.AppLayout>
        </div>
    )
}

export default Routes;