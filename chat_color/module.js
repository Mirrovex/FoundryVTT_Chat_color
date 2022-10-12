import { initHooks } from './hooks.js';

Hooks.once("init", function () {
    console.log('color_chat | Initializing color_chat');

    initHooks();
});