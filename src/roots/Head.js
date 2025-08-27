import { v } from "webframework";
import { WebTitle } from "../services/example.js";

export default function render() {
    return [
        v("title", WebTitle.value)
    ]
}