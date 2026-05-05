export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.protable.io";

export const signupUrl = (plan?: string) =>
  `${APP_URL}/auth?mode=signup${plan ? `&plan=${plan}` : ""}`;

export const loginUrl = () => `${APP_URL}/auth`;
