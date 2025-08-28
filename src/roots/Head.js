import { v } from "webframework";
import { WebTitle } from "../services/example.js";

export default {
    render() {
        return [
            v("title", WebTitle.value)
        ]
    }
}