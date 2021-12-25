console.log('from background');

chrome.webNavigation.onCompleted.addListener(tab => {
	chrome.tabs.get(tab.tabId, current_tab_info => {
		// console.log(current_tab_info.id);
		if(/^https:\/\/www\.youtube/.test(current_tab_info.url)) 
		{
			chrome.scripting.executeScript(
			{
				target: {tabId: current_tab_info.id}, 
				files: ['./foreground.js']
			},
			() => console.log('first')
		)}
		if(/^https:\/\/accounts\.google\.com*/.test(current_tab_info.url)) 
		{
			chrome.scripting.executeScript(
			{
				target: {tabId: current_tab_info.id}, 
				files: ['./foreground.js']
			},
			() => console.log('second')
		)}
	});
});