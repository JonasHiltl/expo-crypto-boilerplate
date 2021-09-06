if (typeof __dirname === "undefined") global.__dirname = "/";
if (typeof __filename === "undefined") global.__filename = "";
require("node-libs-expo/globals");
import * as Random from "expo-random";
// implement window.getRandomValues(), for packages that rely on it
// @ts-nocheck
if (typeof window === "object") {
  // @ts-ignore
  if (!window.crypto) window.crypto = {};
  if (!window.crypto.getRandomValues) {
    // @ts-ignore
    window.crypto.getRandomValues = async function getRandomValues(arr) {
      let orig = arr;
      // @ts-ignore
      if (arr.byteLength != arr.length) {
        // Get access to the underlying raw bytes
        // @ts-ignore
        arr = new Uint8Array(arr.buffer);
      }
      // @ts-ignore
      const bytes = await Random.getRandomBytesAsync(arr.length);
      for (var i = 0; i < bytes.length; i++) {
        // @ts-ignore
        arr[i] = bytes[i];
      }
      return orig;
    };
  }
}
