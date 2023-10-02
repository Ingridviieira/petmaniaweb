import { NextResponse } from "next/server";


export function middleware(request) {
    if (!request.cookies.has('pet_token'))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        '/gastos/:path*',
        '/pet/:path*',
        '/adcAnimal/:path*',
    ]
}