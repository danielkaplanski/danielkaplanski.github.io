const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    if (req.url === '/') {
        fs.readFile('./titles.json', function(err, data) {
            if (err) {
                console.error('Błąd odczytu pliku titles.json:', err);
                res.end('Error reading titles.json');
                return; 
            }

            console.log('Odczytane dane JSON:', data.toString()); 
            let titles;
            try {
                titles = JSON.parse(data.toString());
            } catch (parseError) {
                console.error('Błąd podczas parsowania JSON:', parseError);
                res.end('Error parsing titles.json');
                return; 
            }

            fs.readFile('./template.html', function(err, data) {
                if (err) {
                    console.error('Błąd odczytu pliku template.html:', err);
                    res.end('Error reading template.html');
                    return; 
                }

                const tmpl = data.toString();
                const html = tmpl.replace('%', titles.join('</li><li>'));
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(html);
            });
        });
    }
}).listen(8000, "127.0.0.1");
