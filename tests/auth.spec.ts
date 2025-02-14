import { test, expect } from "@playwright/test";

test("Modify headers and add cookies", async ({ page, context }) => {
  await context.setExtraHTTPHeaders({
    Authorization: "Bearer 1234567890",
    "Custom-Header": "Hello header",
  });

  await context.addCookies([
    {
      name: "session_id",
      value: "1234567890",
      domain: "example.com",
      path: "/",
      httpOnly: true,
      secure: true,
    },
  ]);
});
