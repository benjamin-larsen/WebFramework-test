import { v } from "webframework";

const loaded = new Date()

export default {
    render() {
        return [
            v("div", { style: "color: #fff" }, `Dynamic 2: ${loaded.toString()}`)
        ];
    } 
}
