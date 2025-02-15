import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const token = req.cookies.get("token");
  console.log("token", token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return response;
}

// which page i need to apply middleware
export const config = {
  matcher: "/profile",
};

// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };
