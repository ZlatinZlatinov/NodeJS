//const { defaultView } = require("./views/notFound");

const routes = {};

function register(method, path, handler) {
    if (routes[path] == undefined) {
        routes[path] = {};
    }
    routes[path][method] = handler;
}

function match(request, response) {
    const url = new URL(request.url, `http:${request.headers.host}`);

    let handler;
    const actions = routes[url.pathname];

    if (actions != undefined) {
        handler = actions[request.method];
    }

    if (typeof handler == 'function') {
        handler(request, response);
    } else {
        routes.default['GET'](request, response);
    }
}

module.exports = {
    register,
    get: register.bind(null, 'GET'),
    post: register.bind(null, 'POST'),
    match
}