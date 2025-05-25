import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const middleware = async (req) => {
  const token = await getToken({ req });
  const isToken = Boolean(token);
  const isAdmin = token?.role === "admin";
  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/products");

  if (isAdminSpecificRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
};

export default middleware;
