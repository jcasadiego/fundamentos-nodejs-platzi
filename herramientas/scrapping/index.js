const puppeteer = require('puppeteer');

(async () => {
    //Nuestro codigo
    console.log('Lanzamos el navegador');
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Nodejs');
    
    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo1);
    
    console.log('Cerramos el navegador');
    browser.close();
    console.log('Navegador cerrado');
})();