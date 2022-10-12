export let colorChatMessageHandler = (message, html, data) => {
	let userId = message.data.user;
	let user = game.users?.get(userId);
	if (!user)
		return true;
		
	html[0].style.borderColor = user.data.color;
	html[0].children[0].children[0].style.color = `#000000`;

	return true;
};