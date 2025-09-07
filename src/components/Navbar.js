import { v } from "webframework";
import { navigate } from "../services/router";

// It is best practice to declare these functions outside to prevent it being re-defined on every render.
// Will have compiler do this by default (unless explictly told not to)

function clickHome(e) {
    e.preventDefault()
    navigate("/")
}

function clickLogin(e) {
    e.preventDefault()
    navigate("/login")
}

function clickDynamic(e) {
    e.preventDefault()
    navigate("/dynamic")
}

function clickDynamic2(e) {
    e.preventDefault()
    navigate("/dynamic2")
}

export default {
    render() {
        return [
            v("div", { class: "navbar" },
                v("a", { href: "/", onclick: clickHome }, "Home"),
                v("a", { href: "/login", onclick: clickLogin }, "Login"),
                v("a", { href: "/dynamic", onclick: clickDynamic }, "Dynamic Component"),
                v("a", { href: "/dynamic2", onclick: clickDynamic2 }, "Dynamic 2")
            )
        ]
    }
}