const express = require('express')
const app = express()
const logger = require('morgan')



app.use(express.static('public'))


app.get('/home', (req, res)=> {
    res.render('home.ejs')
})

app.get('/contact', (req, res)=> {
    res.render('about.ejs')
})


app.get('/:err', (req, res)=> {
    res.send(`There is no ${req.params.err} page`)
})

const PORT = (process.env.PORT || 3000);
app.listen(PORT, () => console.log(`i got it going  here ${PORT}`));