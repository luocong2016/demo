const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:8081/view.html?month=201808', { waitUntil: 'networkidle2' })
  // await page.waitFor(5000)
  await page.pdf({ path: `${Date.now()}.pdf`, format: 'A4' })

  await browser.close()
})()
