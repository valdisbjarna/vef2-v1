function template(title, body) {
  return `<!DOCTYPE html>
  <html lang ="is">
    <head>
      <meta charset="utf-8">
      <div class="nav">
        <a href="index.html">Boltadeildin</a>
        <a href="leikir.html">Seinastu leikir</a>
        <a href="stada.html">Staðan í deildinni</a>
      </div>
      <title>${title}</title>
      <link rel="stylesheet" href="./public/styles.css">
      <script type="module" src="./public/scripts.js"></script>
    </head>
    <body>
      ${body}
    </body>
  </html>`;
}

export function indexTemplate() {
  const title = 'Boltadeildin—forsíða!';
  const body = /* html */`
  <section>
    <h1>Boltadeildin!</h1>
    <div class= "efni">
      <a href="leikir.html">Seinustu leikir</a>
      <a href="stada.html">Staðan í deildinni</a>
    </div>
  </section>`;

  return template(title, body);
}

export function stadaTemplate(standings) {
  const title = 'Boltadeildin—staðan!';
  const standingsHtml = standings.toString();
  const body = /* html */ `
  <section>
    <h1>Staðan í deildinni!</h1>
    ${standingsHtml}
  </section>`;

  return template(title, body);
}

export function leikirTemplate(games) {
  const title = 'Boltadeildin—leikir!';
  const gamesHtml = games.toString();
  const body = /* html */ `
  <section>
  <h1>Leikir seinust vikna</h1>
    ${gamesHtml}
  </section>`;
  
  return template(title, body);
}

