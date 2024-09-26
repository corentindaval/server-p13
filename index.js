const express = require("express")
const jwt=require("jsonwebtoken")

const app = express()
const port = 5000


app.get('/', (req, res) => {//appliquer pour la route /
    res.send("test")
})

app.get('/jwt', (req, res) => {//appliquer pour la route /jwt

    const createTokenFromJson = (jsonData, secretKey, options = {})=>{

        try {
            //const secretKey="test"
            const token = jwt.sign(jsonData, secretKey, options)
            return token
        } catch(error) {
            console.log("Error : ", error.message)
            return null
        }

    }

    const jsonData = { email: "test@test.fr", password: "Test123" }
    const token = createTokenFromJson(jsonData)

    if (token) {
        res.json({status: true, token: true })
    } else {
        res.json({status: false })
    }


})

app.listen(port, () => {
    console.log("serveur allumer")
})