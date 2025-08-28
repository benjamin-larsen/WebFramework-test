import { v } from "webframework";
import { routeState } from "../services/router";

export default {
    render(props) {
        console.log(routeState)
        if (routeState.currentRoute) {
            if (routeState.currentRoute.component) {
                return [
                    v(routeState.currentRoute.component)
                ]
            }

            return [
                null
            ];
        }

        return [
            v("div", "Fatal Error: No Route Found.")
        ];
    } 
}