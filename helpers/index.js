// fichier permettant de vérifier si les cookies existe et de les récupérer
import cookie from 'cookie';

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}