# Ecommerce de Productos de Computación

Este es un proyecto de ecommerce desarrollado con **React.js**, **Firebase**, **Bootstrap** y otras herramientas modernas. La aplicación permite a los usuarios explorar una lista de productos, filtrarlos por categorías, ver detalles de los productos, gestionar un carrito de compras y finalizar la compra.

## Funcionalidades

- **Lista de productos:** Visualización de todos los productos disponibles.
- **Filtrado por categorías:** Permite a los usuarios explorar productos según categorías específicas.
- **Detalle de productos:** Muestra información detallada de cada producto seleccionado.
- **Carrito de compras:** 
  - Agregar productos al carrito.
  - Visualizar productos añadidos.
  - Eliminar productos del carrito.
- **Finalizar orden:** Confirmar la compra y guardar la orden en la base de datos.

## Tecnologías Utilizadas

- **[React.js](https://react.dev/):** Biblioteca para construir la interfaz de usuario.
- **[FortAwesome](https://fontawesome.com/docs):** Para íconos atractivos y funcionales.
- **[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/):** Framework CSS para un diseño responsive y moderno.
- **[Firebase](https://firebase.google.com/docs):** Backend para base de datos en tiempo real y almacenamiento de órdenes.
- **[React Router](https://reactrouter.com/en/main):** Manejo de rutas y navegación dentro de la aplicación.

## Instalación y Configuración

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
2. Navega al directorio del proyecto:
	```bash 
	cd tu-repositorio
3. Instala las dependencias:
	```bash
	npm install
4. Configura Firebase:
	-   Crea un proyecto en Firebase Console.
	-   Agrega una app web y copia las credenciales de configuración.
	-   Crea un archivo `config.js` en el directorio raíz del proyecto y agrega las credenciales:
	```env
	REACT_APP_FIREBASE_API_KEY=tu_api_key 
	REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain 
	REACT_APP_FIREBASE_PROJECT_ID=tu_project_id 
	REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket 
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id 
	REACT_APP_FIREBASE_APP_ID=tu_app_id
5. Inicia el proyecto:
	```bash
	npm start
## Estructura del Proyecto
   ```css
	src/
	├── components/
	│   ├── Cart.jsx
	│   ├── CartCount.jsx
	│   ├── CartItem.jsx
	│   ├── CartItems.jsx
	│   ├── CartWidget.jsx
	│   ├── Checkout.jsx
	│   ├── CheckoutAlert.jsx
	│   ├── CheckoutForm.jsx
	│   ├── Item.jsx
	│   ├── ItemCount.jsx
	│   ├── ItemDetail.jsx
	│   ├── ItemDetailsContainer.jsx
	│   ├── ItemList.jsx
	│   ├── ItemListContainer.jsx
	│   ├── NavBar.jsx
	│   ├── Page404.jsx
	├── contexts/
	│   ├── cartContext.js
	│   ├── CartProvider.jsx
	├── firebase/
	│   ├── config.js
	│   ├── db.js
	├──	
	├── App.jsx
	└── main.jsx
