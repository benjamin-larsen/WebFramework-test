import { v } from "webframework"
import RouterView from "../components/RouterView.js"

export default function render() {
    return [
        v("div", { class: "mainContainer" },
            v("div", { class: "navbar" }),
            v("div", { class: "appContent" },
                v(RouterView)
            )
        )
    ]
}