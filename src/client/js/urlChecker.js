let validUrl = require('valid-url');

export default function urlChecker(input) {
    if (validUrl.isUri(input))
        return true
    else
        return false
}