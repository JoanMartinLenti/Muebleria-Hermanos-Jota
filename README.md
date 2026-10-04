
# Muebleria-Hermanos-Jota -Proyecto Grupal (ITBA)
## 👥 Integrantes
* Maia De Blasis
* Joan Martin Lenti
* Camila Paredez
* Ivan Campos Wainer
* Javier Barreto

## 👥 Desarrollo por Roles
- **Integrante 1:** DevOps, configuración inicial del repositorio, control de versiones y maquetación de componentes estructurales globales (`Navbar` y `Footer`).
- **Integrante 2:** Backend Developer (API y Rutas). Encargado de construir la base del servidor y los endpoints de productos de la mueblería.
- **Integrante 3:** Backend Developer (Middlewares y Errores). Implementación del middleware global de logging, manejo de rutas 404 y errores centralizados.
- **Integrante 4:** Listado dinámico de productos y comunicación con el backend mediante `fetch`.
- **Integrante 5:** Gestión de experiencia de usuario interactiva, detalles de productos, formulario de contacto controlado y estado global del carrito.

---

## 🏗️ Arquitectura del Proyecto
El proyecto está estructurado bajo una arquitectura cliente-servidor en un repositorio monolítico:
* **`/backend`**: Aplicación de Node.js con Express que funciona como API REST. Sirve los datos de los productos desde un archivo local estructurado y maneja middlewares de logging, CORS, rutas modulares (`express.Router`) y control de errores.
* **`/cliente`** (o `/client`): Aplicación de React desarrollada con componentes modulares, encargada de consumir la API del backend, gestionar el estado del carrito de compras, filtros de búsqueda y un formulario de contacto validado.

---

## ⚙️️ Instrucciones de Instalación y Ejecución

Para poner en marcha el proyecto de forma local, seguí estos pasos en dos terminales independientes (una para el backend y otra para el cliente):

### 1. Clonar el repositorio
```bash
git clone [https://github.com/JoanMartinLenti/Muebleria-Hermanos-Jota.git](https://github.com/JoanMartinLenti/Muebleria-Hermanos-Jota.git)
cd Muebleria-Hermanos-Jota

### 2.Configurar y ejecutar el Backend
cd backend
npm install
npm start

### 3.Configurar y ejecutar el Frontend(cliente)
cd cliente
npm install
npm start


## 🛠️ Tecnologías Utilizadas
- **Frontend:** React.js, HTML5, CSS3,Hooks / Estilos modulares.
- **Control de Versiones:** Git y GitHub (trabajo por ramas y Pull Requests).
- **Entorno(backend):** Node.js, npm, Express,Cors.
