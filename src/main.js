import './style.css'
import { App, head, body } from "webframework"
import HeadRoot from './roots/Head.js'
import BodyRoot from './roots/Body.js'
import * as router from "./services/router.js"
import HomePage from "./components/HomePage.js"
import LoginPage from "./components/LoginPage.js"

// Same style as Vue Router
router.registerRoutes([
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/dynamic",
        component: () => import("./components/DynamicPage.js")
    },
    {
        path: "/dynamic2",
        component: () => import("./components/Dynamic2.js")
    },
    {
        path: "*_",
        redirect: "/"
    }
])

window.router = router

const app = new App(
    head(HeadRoot),
    body(BodyRoot)
)

app.render()

window.app = app

if (import.meta.hot) {
  console.log(import.meta.hot)
}