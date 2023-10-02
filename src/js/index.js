/**
 * public js methods
 */
export const cleanLocalStorage=()=>{
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('login')
    window.localStorage.removeItem('userEmail')
    window.localStorage.removeItem('userType')
    window.localStorage.removeItem('hasFormDate')
    window.localStorage.removeItem('ticket')
    window.localStorage.removeItem('userId')

}
