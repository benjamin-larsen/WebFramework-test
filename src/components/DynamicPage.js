import { v } from "webframework";

const loaded = new Date()

export default {
    render() {
        return [
            v("div", { style: "color: #fff" }, `Hello this page was dynamically imported on ${loaded.toString()}`)
        ];
    } 
}
