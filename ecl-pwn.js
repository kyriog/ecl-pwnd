/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * the COPYING file for more details. */

var observer = new MutationObserver(function() {
	pwnTester = document.createElement("div");
	pwnTester.setAttribute("id", "tester");
	pwnTester.innerHTML = "pwnd";

	pwnJs = document.createElement("script");
	pwnJs.innerHTML = "var OA_show = function() {}";

	document.body.appendChild(pwnTester);
	document.body.appendChild(pwnJs);
	observer.disconnect();
});
var config = { subtree: true, attributes: true }
observer.observe(document, config);
