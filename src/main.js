import {
	createSSRApp
} from "vue";
import 'vant/lib/index.css';
import * as Pinia from 'pinia';
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
		Pinia
	};
}
