let validUrl = require('valid-url');

function urlChecker(input) {
    if (validUrl.isUri(input))
        return true
    else
        return false
}

module.exports = urlChecker;