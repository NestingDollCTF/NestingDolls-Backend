import jwt from "jsonwebtoken";
import config from "../config/default";

export function signJwt(
  object: Object,
  keyName: "accessPrivateKey" | "refreshPrivateKey",
  options?: jwt.SignOptions | undefined
) {
  const signingKey = (keyName === "accessPrivateKey") ? config.accessPrivateKey : config.refreshPrivateKey;

  return jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(
  token: string,
  keyName: "accessPublicKey" | "refreshPublicKey"
) {
  const publicKey = (keyName === "accessPublicKey") ? config.accessPublicKey : config.refreshPublicKey;

  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}