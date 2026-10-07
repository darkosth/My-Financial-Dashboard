export { auth as proxy } from "./auth";

export const config = {
  matcher: ["/movements/:path*", "/admin/:path*", "/dashboard/:path*", "/calendar/:path*", "/learning/:path*", "/plaid/:path*", "/settings/:path*", "/templates/:path*", "/unique-expenses/:path*"],
};
