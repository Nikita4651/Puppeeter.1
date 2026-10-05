let page;



describe("Github page tests", () => {

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  }, 30000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 30000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 30000);
});


describe("Github tests", () => {

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});


test("should display correct title on Resources page", async () => {
  const expected =
    "Resources to help you build, secure, and scale with GitHub · GitHub";

  await page.goto("https://github.com/resources");
  const title = await page.title();

  expect(title).toEqual(expected);
}, 40000);



test("should display correct title on Security page", async () => {
  const expected =
    "GitHub Security · GitHub";

  await page.goto("https://github.com/security");
  const title2 = await page.title();

  expect(title2).toEqual(expected);
}, 60000);

test("should display correct title on Topics page", async () => {
  const expected =
    "Topics on GitHub · GitHub";

  await page.goto("https://github.com/topics");
  const title2 = await page.title();

  expect(title2).toEqual(expected);
}, 60000);

test("should display correct title on Copilot page", async () => {
  await page.goto("https://github.com/features/copilot");
  await page.waitForSelector("h1");
  const actual = await page.title();
  expect(actual).toContain("GitHub Copilot · Your AI coding agent · GitHub · GitHub");
}, 50000);

})
