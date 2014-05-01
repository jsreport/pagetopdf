var express = require('express'),
    exphbs = require('express3-handlebars'),
    app = express();

var hbs = exphbs.create({
    defaultLayout: 'main',
    extname: ".html",
    helpers: {
        fixCoding: function(content) {
            if (content.charAt(0) === '\uFEFF')
                content = content.substr(1);
            return content;
        }
    }
});

app.engine('.html', hbs.engine);
app.set('view engine', '.html');
app.use(express.static('public/'));

app.get('/', function(req, res) {
    res.render('home');
});


app.get('/time', function(req, res) {
    res.send(new Date());
});

app.get('*', function(req, res) {
    res.status(404).render("404");
});


app.listen(process.env.PORT || 1500);