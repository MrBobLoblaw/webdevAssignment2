import config from './../config/config' 
import app from './express'
app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});
const PORT = process.env.PORT || 300;

app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})
