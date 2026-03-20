export { auth as proxy } from "./auth"

export const config = {
  // El guardia protege todo EXCEPTO las imágenes y archivos internos del sistema
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}