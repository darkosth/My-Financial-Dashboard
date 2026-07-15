export { auth as proxy } from "./auth";

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/calendar/:path*", "/plaid/:path*", "/settings/:path*", "/templates/:path*", "/unique-expenses/:path*"],
};
