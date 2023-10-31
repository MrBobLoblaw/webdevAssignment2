import config from './../config/config' 
import app from './express'

// parse requests of content-type - application/json

app.use(express.json());

 

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});

app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})
