import Login from "../containers/Login";
import Home from "../containers/Home";

/**
 * @author zhangyi
 * @date 2018/11/3
 */

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route exact path="/admin" component={Home}/>
        </Switch>
    )
}

