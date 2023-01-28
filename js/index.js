import { Router }  from "./routes.js"

const router = new Router()
router.add ('/', "/pages/home.html")
router.add ("/contact", "/pages/contact.html")
router.add (404, "/pages/404.html")


router.handle()
//Serve para navegar nas setas da pagina
window.onpopstate = () => router.handle()
window.route = () => router.route()