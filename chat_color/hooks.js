import { colorChatMessageHandler } from "./chatMesssageHandling.js";

export function initHooks() {
    Hooks.on("renderChatMessage", (message, html, data) => {
		colorChatMessageHandler(message, html, data);
	});
}