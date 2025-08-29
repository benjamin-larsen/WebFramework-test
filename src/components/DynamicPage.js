import { v } from "webframework";

const loaded = Date.now()

export default {
    render() {
        return [
            v("div", { style: "color: #fff" }, `Hello this page was dynamically imported on ${loaded.toString()}`)
        ];
    } 
}
