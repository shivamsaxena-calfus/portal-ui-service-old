import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  // const currentUser = request.cookies.get("accessToken")?.value;

  // if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
  //   console.log('middleware hello!');
    // return Response.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
  api: {
    bodyParser: false,
  },
};
