import { test, expect } from "@playwright/test";

test("GET request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("Janet");
  console.log(await response.json());
});

test("POST request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users/", {
    data: {
      name: "Brendon",
      job: "Tester",
    },
  });
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Brendon");
  console.log(await response.json());
});

test("POST request 2", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        description: "Hello everyone!",
      },
    }
  );
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Hello everyone!");
  console.log(await response.json());
});

test("PUT request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Jimmy",
      job: "Farmer",
    },
  });

  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Jimmy");
  console.log(await response.json());
});

test("PUT request 2", async ({ request }) => {
  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      data: {
        title: "The Grapes of Wrath",
        description: "A book about things",
      },
    }
  );

  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("things");
  console.log(await response.json());
});

test("DELETE request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});
