import { v } from "webframework";
import { routeState } from "../services/router";

export default {
    render(props) {
        if (routeState.currentRoute) {
            if (typeof routeState.currentRoute.component === "object") {
                return [
                    v(routeState.currentRoute.component)
                ]
            } else if (typeof routeState.currentRoute.component === "function") {
                return [
                    v("Lazy", { loadFunc: routeState.currentRoute.component })
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