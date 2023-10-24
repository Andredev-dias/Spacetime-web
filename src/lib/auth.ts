import { cookies } from "next/headers";
import decode from "jwt-decode";

interface JWTUser {
  sub: string;
  name: string;
  avatarUrl: string;
}

export function getJWTUser(): JWTUser {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticaded.");
  }

  const user: JWTUser = decode(token);

  return user;
}
