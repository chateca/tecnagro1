import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"

const publicRoutes = [
    {path:'/', whenAuthenticated:'next' },
    {path:'/sign-in', whenAuthenticated:'redirect' },
    {path:'/produtos_e_servicos', whenAuthenticated:'next' },
    {path:'/pedido', whenAuthenticated:'redirect' }

] as const 
const REDITECT_WHEN_NOT_AUTHENTICATE_ROUTE = '/sign-in'

export function middleware(request:NextRequest){
   const path = request.nextUrl.pathname
   const publicRoute = publicRoutes.find(route => route.path === path)
   const authToken  = request.cookies.get('token')

   if(!authToken && publicRoute){
    return NextResponse.next()
   }

   if(!authToken && !publicRoute){
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname  = REDITECT_WHEN_NOT_AUTHENTICATE_ROUTE
    return NextResponse.redirect(redirectUrl)
   }
     
   if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect'){
     const redirectUrl  = request.nextUrl.clone()
     redirectUrl.pathname = '/dashboard'
     return NextResponse.redirect(redirectUrl)
   }

   if(authToken && !publicRoute){
    //Verificar de o token ou jwt Nao esta expirado nao 
    //se estiver expirado redirecionar o usurio para o login e apagar o token 
    return NextResponse.next()
   }
    return NextResponse.next()
}

export const config:MiddlewareConfig = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      ],
}