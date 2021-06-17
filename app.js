const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname, + '/public'))
app.use(express.static(__dirname, + '/public/images'))
app.use("/public", express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) =>{
    //res.sendFile('/home.html', {root: 'views'})
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

const port = process.env.PORT || 3001

app.listen(port, () =>{
    console.log('App listening at http://localhost: ' + port)
})

app.use(express.urlencoded({
    //extended : true;
}))
