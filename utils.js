import { redirect } from "./redirectUtil"

export async function requireAuth(request){
    let isLoggedIn = localStorage.getItem('loggedIn');
    const url = new URL(request.url).pathname
    if (!isLoggedIn){
        throw redirect(`/login?message=You must log in first&redirectTo=${url}`)
    }
    return null
}