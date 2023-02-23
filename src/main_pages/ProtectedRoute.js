/** @format */

import { Navigate, Outlet } from 'react-router-dom';

// A Function to Get a Cookie => https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return '';
}

export default function ProtectedRoute() {
  return getCookie('user') ? <Outlet /> : <Navigate to='/auth' />;
}
