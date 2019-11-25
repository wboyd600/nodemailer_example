const proxy = require('http-proxy-middlewar');

module.exports = function(app) {
    app.use(proxy("/api", {target: "http://localhost:5000"}))

}