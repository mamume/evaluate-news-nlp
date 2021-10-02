import { showResult } from "./showResult";
import { urlChecker } from './urlChecker'

function handleSubmit(e) {
    e.preventDefault()

    const input = document.querySelector('#url-input')

    if (!urlChecker(input.value))
        alert('Enter a valid URL');
    else
        fetch(`http://localhost:8081/url?input=${input.value}`)
            .then(repsonse => repsonse.json())
            .then(data => showResult(data))
}

module.exports = handleSubmit;