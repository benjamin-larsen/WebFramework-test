import { v, reactive } from "webframework";

const count = reactive({ value: 0 })

function onclick() {
    count.value++;
}

export default {
    render() {
        return [
            v("button", { onclick }, `Click me : ${count.value}`)
        ];
    } 
}
