import { v } from "webframework"
import Navbar from "../components/Navbar.js"
import RouterView from "../components/RouterView.js"

export default {
    render() {
        return [
            v("div", { class: "mainContainer" },
                v(Navbar),
                v("div", { class: "appContent" },
                    v(RouterView)
                )
            )
        ]
    }
}