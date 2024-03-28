import {proxyRequest} from "./index";
import { expect, test } from "vitest";

test("run tests", () => {
    expect(proxyRequest()).toBe(5);
});