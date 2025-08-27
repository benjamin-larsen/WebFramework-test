import { reactive } from "webframework";
import { pathToRegexp } from "path-to-regexp"

export const routeState = reactive({
    path: "/",
    queryParams: "",
    currentRoute: null
})

const routes = [];
let routesRegistered = false;

function updateCurrentRoute() {
    for (const route of routes) {
        if (route.path.regexp.test(routeState.path)) {
            routeState.currentRoute = route;

            if (route.redirect) {
                navigate(route.redirect)
            }
            return
        }
    }
    throw Error("No Route Found: Specify a Default/404 Page.")
}

function refreshState() {
    routeState.path = window.location.pathname;
    routeState.queryParams = window.location.search;
    
    if (routesRegistered) {
        updateCurrentRoute();
    }
}

refreshState()

window.addEventListener("popstate", refreshState);

export function navigate(url) {
    window.history.pushState({}, "", url);
    refreshState()
}

export function registerRoutes(routeList) {
    if (routesRegistered) throw Error("Routes already registered.");
    routesRegistered = true;

    for (const route of routeList) {
        if (route.component) {
            routes.push({
                path: pathToRegexp(route.path),
                component: route.component
            })
        } else if (route.redirect) {
            routes.push({
                path: pathToRegexp(route.path),
                redirect: route.redirect
            })
        } else throw Error("Invalid Route")
    }

    updateCurrentRoute();
}