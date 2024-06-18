import express from "express";
const app = express()
//home route
app.get('/', (req,res) => {
   
    res.send("how are you doing today?")
})
//simulate a CPU-intensive task
app.get('/cpu-intensive', (req,res) => {
    let result = 0 
    for(let i=0; i< 1e6; i++) {
        result += i * Math.random()
    }
    res.send(`Result of the CPU-intensive task: ${result}`)
})

// simulate an I/O operation
app.get('/simulate-io', (req,res) => {
    setTimeout(() => {
        res.send("Simulate I/O operation completed")
    }, 500)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})