const http = require('http');

http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(`
    <html>
      <head>
        <style>
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-30px);
            }
          }

          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
            background-color: #f0f0f0;
          }

          .bouncy-text {
            font-size: 48px;
            font-weight: bold;
            color: #007bff;
            animation: bounce 1s ease infinite;
          }
        </style>
      </head>
      <body>
        <div class="bouncy-text">nikka botz inc</div>
      </body>
    </html>
  `);

}).listen(7860, () => {

  console.log('Server listening on port 7860');

});
