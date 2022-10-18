import { ViteSSG } from "vite-ssg/single-page";
import "./style.css";
import App from "./index.md";

export const createApp = ViteSSG(App);
