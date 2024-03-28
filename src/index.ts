export function proxyRequest() {
	console.log("*DEBUG*", "Started!");
	const incomingRequest = {};
	const proxyOptions = {};
	// calls will be /[service name]/[pathname/to/send/to/target]
	const matches = ["a", "b"];
 
	const [_serviceName, path = ""] = matches ?? [];
 
	const incomingToken = incomingRequest.headers.get("Authorization")?.split(" ")[1];
	/* istanbul ignore if -- (sanity check)*/
	if (incomingToken === undefined) {
		throw new Error("blah");
	}
 
	const url = `${proxyOptions.baseUrl.toString()}/${path}${
		incomingRequest.query.size > 0 ? `?${incomingRequest.query.toString()}` : ""
	}`;
	const parsedUrl = new URL(url);
	const callName = `${incomingRequest.method} ${parsedUrl.pathname}`;
 
	return parsedUrl;
}