// Generated by Selenium IDE
import { Builder, By, Key, until } from 'selenium-webdriver'
const assert = require('assert')


describe('loginSuccess', function() {
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
  it('loginSuccess', async function() {
    await driver.get("http://mycnsamastertaii.tech/home")
    await driver.manage().window().setRect({ width: 1008, height: 816 })
    await driver.findElement(By.css(".ion-activated")).click()
    await driver.findElement(By.name("ion-input-0")).click()
    await driver.findElement(By.name("ion-input-0")).sendKeys("prueba1@gmail.com")
    {
      const element = await driver.findElement(By.name("ion-input-1"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.xpath("(//ion-item[@id=\'item\'])[2]"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.xpath("(//ion-item[@id=\'item\'])[2]")).click()
    await driver.findElement(By.name("ion-input-1")).sendKeys("123456")
    await driver.findElement(By.css(".ion-activated")).click()
  })
})
