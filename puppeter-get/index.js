
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/top-movies', async (req, res) => {
  try {
    const movies = await scrapeMovies();
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred. ' });
  }
});

async function scrapeMovies() {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto('https://www.imdb.com/chart/top/');

  const movies = await page.evaluate(() => {
    const movieElements = Array.from(document.querySelectorAll('.lister-list tr'));
    return movieElements.map(movieElement => {
      const title = movieElement.querySelector('.titleColumn a');
      const year = movieElement.querySelector('.secondaryInfo');
      return `${title.textContent.trim()} (${year.textContent.trim()})`;
    });
  });


  await browser.close();

  return movies;
}

app.listen(8080, () => {
  console.log('Server running on loclhost : 8080');
});