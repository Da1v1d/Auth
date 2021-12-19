export const routeUrls={
    Login:'/login',
    Main:'/',
    Registration:'/registration',
    Home:(page)=>page?`/home/${page}`:`/home`,
    Posts:'/home/posts'
}