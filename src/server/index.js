var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const axios = require('axios').default;

const PORT = 8081

const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY
const BASE_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&url=`

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/url', async (req, res) => {
    try {
        const input = req.query.input
        axios.get(BASE_URL + input)
            .then(response => {
                result = response.data
                console.log(result)
                res.send({
                    text: result.sentence_list[0].text,
                    score_tag: result.sentence_list[0].score_tag,
                    agreement: result.sentence_list[0].agreement,
                    subjectivity: result.subjectivity,
                    confidence: result.confidence,
                    irony: result.irony
                })
            })
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app