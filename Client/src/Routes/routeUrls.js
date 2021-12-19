export const routeUrls={
    Login:'/login',
    Main:'/',
    Registration:'/registration',
    Home:(page)=>page?`/${page}`:`/`,
}