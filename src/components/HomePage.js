import { v, reactive } from "webframework";

const count = reactive({ value: 0 })

function onclick() {
    count.value++;
}

export default function render() {
    return [
        v("button", { onclick }, `Click me : ${count.value}`)
    ];
} 

console.log(import.meta, export.meta)