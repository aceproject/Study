let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('HELLO!');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
