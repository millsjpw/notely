import { getAPIKey } from "../api/auth.js";
import { describe, it, expect } from "vitest";

describe("Test getAPIKey function", () => {
  it("should return null if no authorization header is present", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  it("should return null if authorization header is not in the correct format", () => {
    const headers = { authorization: "Bearer some-token" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  it("should return the API key if authorization header is in the correct format", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    const result = getAPIKey(headers);
    expect(result).toBe("my-secret-key");
  });
});
