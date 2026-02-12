//Use this js module to create and use signalR connections for communication between clients and hub (server).
//It is used to handle session management for QwikId based authentation


var signalRHubURI = window.location.origin + "/notificationhub";
var applnClientId;
var isSSOEnabled;
var postLogOutRedirectURI;
var refUIdCookieName = "RefUId";
var refId;
var connection;

function initializeConfigAndBuild(SignalRHubURI, applicationClientId, IsSSOEnabled, PostLogOutRedirectURI, _refuid) {
	logInfo("Inside initializeConfigAndBuild.");

	if (SignalRHubURI) {
		this.signalRHubURI = SignalRHubURI;
	}
	this.applnClientId = applicationClientId;
	this.isSSOEnabled = IsSSOEnabled;
	this.postLogOutRedirectURI = PostLogOutRedirectURI;
	this.refId = _refuid;
	logInfo("Parameters:-" + "Hub:" + this.signalRHubURI + ", Client:" + this.applnClientId + ", isSSO:" + this.isSSOEnabled + ", postLogOutRedirectURI:" + this.postLogOutRedirectURI);
	if (isSSOEnabled) {
		this.buildHubConnection();
		this.startConnection();
	}
	logInfo("Returning from initializeConfigAndBuild.");
	return;
}

function buildHubConnection() {
	logInfo("Inside buildHubConnection.");
	connection = new signalR.HubConnectionBuilder()
		.withUrl(signalRHubURI, {
			skipNegotiation: true,
			transport: signalR.HttpTransportType.WebSockets, // Force WebSockets
		})
		.configureLogging(signalR.LogLevel.Debug)
		.withAutomaticReconnect() // Enable AutoReconnect
		.build();
	logInfo("SignalR Connection built successfully.");
}

async function performLogOut(infoFromHub) {
	try {
		logInfo("Inside performLogOut.");

		let loggedOutRefUId = infoFromHub.refUId;
		let logoutRedirectURI = infoFromHub.logOutRedirectURI;

		logInfo("loggedOutRefUId:" + loggedOutRefUId)
		logInfo("logoutRedirectURI:" + logoutRedirectURI)
		logInfo("postLogOutRedirectURI:" + postLogOutRedirectURI);

		if (!logoutRedirectURI && postLogOutRedirectURI != null) {
			logInfo("logoutRedirectURI from API is null, assigning local postLogOutRedirectURI");
			logoutRedirectURI = postLogOutRedirectURI;
		}

		logInfo("RefUId:" + loggedOutRefUId + ", LogoutRedirect:" + logoutRedirectURI);

		//var refUId = getCookie(this.refUIdCookieName);
		//var refUId = this.refId;
		var refUId = assignRefUId();
		logInfo("logout success notification received for (" + loggedOutRefUId + ") Current RefUId is (" + refUId + ")");

		//Check if the user getting logged out is passed as argument should match the logged in user obtained from cookies
		if (refUId != null && refUId === loggedOutRefUId && logoutRedirectURI != null) {

			logInfo("signalR NotifyLogoutEvent triggered for RefUId:" + refUId);
			connection.invoke("NotifyLogoutEvent", refUId);

			//Remove the user cookie since the user is Logged off
			deleteCookie(this.refUIdCookieName);

			//redirect to login
			window.location = logoutRedirectURI;

			logInfo("Logout and Redirection to Login complete.");
		}
	} catch (err) {
		logError("Error in LogOut:", err);
	}
}

async function sendLoginNotification(refUId) {
	try {
		logInfo("Inside sendLoginNotification.");

		if (refUId != null) {
			logInfo("SignalR NotifyLoginEvent triggered for RefUId:" + refUId);
			connection.invoke("NotifyLoginEvent", refUId, this.applnClientId, navigator.userAgent);
		}

		logInfo("Notification sent successfully.");
	} catch (err) {
		logError("Error sending notification:", err);
	}
}

async function startConnection() {
	try {

		var refUId = assignRefUId();
		if (refUId != null) {
			logInfo("Starting SignalR Connection for RefUid:" + refUId);

			await connection.start().then(() => {

				logInfo("SignalR Connection Started Successfully.");

				//When a logout event is received from hub as part of broadcast, if the current logged in user matches the user sent in the event then Send a logout event to hub.
				//When the hub receives a logout event from client, it checks the RefUId and retrieves all active connections for the user from DB and sends further logout events. This takes care of situations wherein the hub has restarted/connection is list between hub and client.
				connection.on("NotifyLogoutSuccess", async (infoFromHub) => {
					try {
						logInfo("logout success notification info:" + infoFromHub);
						await performLogOut(infoFromHub);
						logInfo("logout successful.");
					} catch (err) {
						logError("Error in LogOut:", err);
					}
				});

				this.sendLoginNotification(refUId);
			});
		}
	} catch (err) {
		logError("Error while starting SignalR Connection", err);
	}
}

//Function to retrieve cookie information
function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
	return null; // Return null if cookie is not found
}

function deleteCookie(name) {
	logInfo("removing cookie " + name);
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function convertTorefUid(UserId) {
	const userId = BigInt(UserId); // Replace with actual userId
	const refUid = userId ^ BigInt("9223372036854775807"); // long.MaxValue in C#
	logInfo(refUid.toString());
	return refUid.toString();
}

function assignRefUId() {
	var refUId = getCookie(this.refUIdCookieName);
	if (refUId != null) return refUId;
	return refId;
}

function logInfo(logStmt) {
	//console.log(logStmt);
}

function logError(logStmt, err) {
	//console.error(logStmt, err);
}