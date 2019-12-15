// METODOS PRINCIPALES

function listar_cookies() {
	// TODO: Llamar al metodo get_cookies, para obtener el array de cookies
	// TODO: Llamar al metodo print_cookies, para modificar la tabla y agregar las cookies
}

function agregar_cookie(cookie, valor, exp_days, ruta, dominio, segura) {
	// TODO: Metodo igual la de los ejercicios de clase (SelectorColorCookie.html)
}

function modificar_cookie(cookie, valor) {
	// TODO: Llama a agregar_cookie con el valor nuevo
}

function eliminar_cookie(cookie) {
	// TODO: Llama a agregar_cookie con el expires en negativo
}

// METODOS AUXILIARES

function get_cookies() {
	/* TODO: Metodo que obtiene todas las cookies
	* y las devuelve en un array de objetos con estructura:
	* {cookie: "nombre_cookie", valor: "valor_cokie"}
	*/
}

function print_cookies(cookies) {
	// TODO: Metodo que modifica el DOM para crear filas en la tabla con el array de cookies que se pasan por parametros
}