// Generated by Selenium IDE
import { Builder, By, Key, until } from 'selenium-webdriver'
const assert = require('assert')


describe('searchTracks', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('searchTracks', async function() {
    await driver.get("http://mycnsamastertaii.tech/home")
    await driver.manage().window().setRect({ width: 1008, height: 816 })
    await driver.findElement(By.css(".ion-activated")).click()
    await driver.findElement(By.name("ion-input-0")).click()
    await driver.findElement(By.name("ion-input-0")).sendKeys("sokaina12@gmail.com")
    await driver.findElement(By.name("ion-input-1")).click()
    await driver.findElement(By.name("ion-input-1")).sendKeys("123456")
    await driver.findElement(By.css(".ion-activated")).click()
    await driver.findElement(By.css(".searchbar-has-focus .searchbar-input")).click()
    await driver.findElement(By.css(".searchbar-has-focus .searchbar-input")).sendKeys("Alaz Alaz")
    await driver.findElement(By.css(".ion-activated")).click()
  })
})
