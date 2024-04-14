
import Cookie  from 'js-cookie';
export const signOut = () => {
    Cookie.remove('accessToken');
    window.location.href = '/'
}