import { test, expect, request } from "@playwright/test";

let apiContext;

test.beforeEach(async () => {
  apiContext = await request.newContext({ ignoreHTTPSErrors: true });
});

async function logResponse(response) {
  const json = await response.json();
  console.log(json);
  return json;
}

test("GET request", async () => {
  const response = await apiContext.get("https://reqres.in/api/users/2");
  expect(response.status()).toBe(200);

  const json = await logResponse(response);
  expect(json.data.first_name).toBe("Janet");
});

test("POST request", async () => {
  const response = await apiContext.post("https://reqres.in/api/users/", {
    data: { name: "Brendon", job: "Tester" },
  });
  expect(response.status()).toBe(201);

  const json = await logResponse(response);
  expect(json.name).toBe("Brendon");
});

test("POST request 2", async () => {
  const response = await apiContext.post(
    "https://jsonplaceholder.typicode.com/posts",
    { data: { description: "Hello everyone!" } }
  );
  expect(response.status()).toBe(201);

  const json = await logResponse(response);
  expect(json.description).toBe("Hello everyone!");
});

test("PUT request", async () => {
  const response = await apiContext.put("https://reqres.in/api/users/2", {
    data: { name: "Jimmy", job: "Farmer" },
  });
  expect(response.status()).toBe(200);

  const json = await logResponse(response);
  expect(json.name).toBe("Jimmy");
});

test("PUT request 2", async () => {
  const response = await apiContext.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    { data: { title: "The Grapes of Wrath", description: "A book about things" } }
  );
  expect(response.status()).toBe(200);

  const json = await logResponse(response);
  expect(json.description).toBe("A book about things");
});

test("DELETE request", async () => {
  const response = await apiContext.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});
