import { v } from "webframework";
import { routeState } from "../services/router";

export default function render(props) {
    if (routeState.currentRoute) {
        if (routeState.currentRoute.component) {
            return routeState.currentRoute.component(props)
        }

        return [];
    }

    return [v("div", "Fatal Error: No Route Found.")];
} 