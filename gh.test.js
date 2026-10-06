let page;

afterEach(() => {
  page.close();
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});
describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  }, 60000);
});

describe("Github tests", () => {
  test("should display correct title on Resources page", async () => {
    await page.goto("https://github.com/resources");
    const expected =
      "Resources to help you build, secure, and scale with GitHub · GitHub";

    const title = await page.title();

    expect(title).toEqual(expected);
  }, 60000);

  test("should display correct title on Security page", async () => {
    await page.goto("https://github.com/security");

    const expected = "GitHub Security · GitHub";

    const title2 = await page.title();

    expect(title2).toEqual(expected);
  }, 60000);

  test("should display correct title on Topics page", async () => {
    await page.goto("https://github.com/topics");
    const expected = "Topics on GitHub · GitHub";
    const title2 = await page.title();

    expect(title2).toEqual(expected);
  }, 60000);
});
