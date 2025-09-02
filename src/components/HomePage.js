import { v, ref } from "webframework";

const count = ref(0)
const loaded = new Date()

function onclick() {
    count.value++;
}

export default {
    render() {
        return [
            v("div", { style: "color: #fff" }, `Hello this page was staticly imported on ${loaded.toString()}`),
            v("button", { onclick }, `Click me : ${count.value}`)
        ];
    } 
}
