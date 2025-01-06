// import { jwtDecode } from "jwt-decode";
import { getCookies } from 'cookies-next';
import { NextRequest, NextResponse } from 'next/server';


export async function middleware(request: NextRequest, res: NextResponse) {

    const cookies = getCookies({ req: request, res });
    const url = request.nextUrl.clone();
    const { pathname } = request.nextUrl;

    // redirect inside public page if public routes
    if (pathname === '/' || pathname === '/home') {
        const newUrl = request.nextUrl.clone();
        newUrl.pathname = `/`;
        return NextResponse.rewrite(newUrl);
    }

    // if (pathname === '/') {
    //     url.pathname = '/home';
    //     return NextResponse.redirect(url);

    // }


    // if (
    //     request.nextUrl.pathname.startsWith('/home') &&
    //     !cookies?.access_token &&
    //     !allowedRoutes.includes(request.nextUrl.pathname) &&
    //     !pathname.startsWith('/home')
    // ) {
    //     url.pathname = `/`;
    //     return NextResponse.redirect(url);
    // }

    // Redirect to "/" (which now redirects to "/home") if no access token and not in allowed routes

}

export const config = {
    matcher: [
        '/((?!api|not-found|_next/static|_next/image|images|assets|favicon.ico).*)',
    ],
};
