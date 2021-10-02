function showResult(data) {
    const agreement = document.querySelector('#agreement')
    const confidence = document.querySelector('#confidence')
    const irony = document.querySelector('#irony')
    const scoreTag = document.querySelector('#score_tag')
    const subjectivity = document.querySelector('#subjectivity')
    const text = document.querySelector('#text')

    agreement.innerText = 'Agreement: ' + data.agreement
    confidence.innerText = 'Confidence: ' + data.confidence
    irony.innerText = 'Irony: ' + data.irony
    scoreTag.innerText = 'Tag Score: ' + data.scoreTag
    subjectivity.innerText = 'Subjectivity: ' + data.subjectivity
    text.innerText = 'Text: ' + data.text
}

module.exports = showResult;