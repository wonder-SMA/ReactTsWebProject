const puppeteer = require('puppeteer');

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
};

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.setViewport({width: 500, height: 2400});
});

afterAll(() => {
  if (isDebugging()) {
    browser.close();
  }
});

describe('on page load', () => {
  test('h1 on the root page loads correctly', async () => {
    const text = await page.$eval("div[class^='App_component__'] > div > h1", el => el.textContent);
    expect(text).toBe('WELCOME!');
  }, 16000);
  test('nav loads correctly', async () => {
    const navbar = await page.$eval("div[class^='Navbar_navbar-fixed']", el => !!el);
    const listItems = await page.$$("div[class^='Navbar_navbar-fixed'] > nav > ul > li");
    expect(navbar).toBe(true);
    expect(listItems.length).toBe(3)
  }, 16000);
  test('h1 on the main page loads correctly', async () => {
    await page.click("div[class^='Navbar_navbar-fixed'] > nav > ul > li:nth-child(1)");
    const text = await page.$eval("div[class^='Home_component__'] > h1", el => el.textContent);
    expect(text).toBe('Главная страница');
  }, 16000);
  test('h1 on the about project page loads correctly', async () => {
    await page.click("div[class^='Navbar_navbar-fixed'] > nav > ul > li:nth-child(3)");
    const text = await page.$eval("div[class^='About_component__'] > h1", el => el.textContent);
    expect(text).toBe('О проекте');
  }, 16000);
  test('h1 on the about project page loads correctly', async () => {
    await page.click("div[class^='Navbar_navbar-fixed'] > nav > ul > li:nth-child(3)");
    const text = await page.$eval("div[class^='About_component__'] > h1", el => el.textContent);
    expect(text).toBe('О проекте');
  }, 16000);
})

describe('on catalog page load', () => {
  test('input loads correctly', async () => {
    await page.click("div[class^='Navbar_navbar-fixed'] > nav > ul > li:nth-child(2)");
    await page.waitForTimeout(1000);
    const input = await page.$eval("input[class^='Search_component__']", el => !!el);
    expect(input).toBe(true);
  }, 16000);
  test('search sets value in Local Storage', async () => {
    await page.click("div[class^='Navbar_navbar-fixed'] > nav > ul > li:nth-child(2)");
    await page.waitForTimeout(1000);
    await page.click("input[class^='Search_component__']");
    await page.keyboard.type('Lamb');
    const value = await page.evaluate(() => {
      return localStorage.getItem('search')
    });
    await page.evaluate(() => {
      localStorage.clear();
    });
    await page.reload();
    expect(value.slice(1,-1)).toBe('Lamb');
  }, 16000);
  test('search works correctly', async () => {
    await page.click("div[class^='Navbar_navbar-fixed'] > nav > ul > li:nth-child(2)");
    await page.waitForTimeout(1000);
    await page.click("input[class^='Search_component__']");
    await page.keyboard.type('Lamb');
    const text = await page.$eval("li[class^='Category_componentMany__'] h1", el => el.textContent);
    expect(text).toBe('Lamb');
  }, 16000);
  test('click on description works correctly', async () => {
    await page.click("div[class^='Navbar_navbar-fixed'] > nav > ul > li:nth-child(2)");
    await page.waitForTimeout(1000);
    const textFromMany = await page.$eval("li:first-child[class^='Category_componentMany__'] h1", el => el.textContent);
    await page.click("li:first-child[class^='Category_componentMany__'] > div p");
    await page.waitForTimeout(1000);
    const textFromSingle = await page.$eval("div[class^='Category_componentSingle__'] h1", el => el.textContent);
    expect(textFromMany).toBe(textFromSingle);
  }, 16000);
})
