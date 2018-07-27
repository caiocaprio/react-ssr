import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app';

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="utf-8">
                <meta content="ie=edge" http-equiv="x-ua-compatible">
                <meta name="robots" content="noindex,nofollow">
                <meta name="canonical" href="">
                <meta name="">
                <meta property="og:url" content="">
                <meta property="og:type" content="">
                <meta property="og:image" content="">
                <meta property="og:title" content=">
                <meta property="og:description" content="">
                <meta property="og:site_name" content="">
                <meta property="og:url" content="">
                <meta property="og:locale" content="">
                <meta property="twitter:card" content="">
                <meta property="twitter:site" content="">
                <meta property="twitter:title" content="">
                <meta property="twitter:description" content="">
                <meta property="twitter:creator" content="">
                <meta property="twitter:image" content="">
                <meta name="expires" content="tue, 01 Jun 2050">
                <title>React SSR</title>
                <link href="/favicon.ico" rel="shortcut icon">
                <meta content="width=device-width,initial-scale=1" name="viewport">
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" rel="stylesheet" media="all" type="text/css">
                <link rel="stylesheet" href="/css/main.css">
            </head>
            <body>
                <div id="app">${renderToString(<App title={'teste ssr'} />)}</div>
                <script src="/app.js" defer></script>
            </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening');
});
