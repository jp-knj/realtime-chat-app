const express = require('express');
const app = express();

const PORT = process.env.PORT | 5050;

app.get('/', (request, response) => {
    response.send('This is from server')
})
app.listen(PORT), () => {
    console.log(`Server is running on port ${PORT}`)
}