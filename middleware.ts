import { NextResponse, type NextRequest } from "next/server";

/**
 * A/B test variant assignment via cookie.
 *
 * On first visit, assigns a random variant (A or B) and stores it in a cookie.
 * Subsequent visits use the same variant for consistency.
 *
 * Pages read the cookie with `cookies().get("ab_variant")` to render accordingly.
 */
const COOKIE_NAME = "ab_variant";
const VARIANTS = ["A", "B"] as const;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only assign if no variant cookie exists
  if (!request.cookies.get(COOKIE_NAME)) {
    const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)]!;
    response.cookies.set(COOKIE_NAME, variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false, // readable by client JS for PostHog
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

export const config = {
  // Run on page routes only, skip static assets and API routes
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
