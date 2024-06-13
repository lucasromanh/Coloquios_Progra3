# Coloquio 1 de Programación 3

Este directorio contiene el proyecto del Coloquio 1 desarrollado como parte de los coloquios de Programación 3 utilizando React y Vite. El objetivo de este coloquio es practicar la creación de componentes sin estado en React.

## Componentes

### ProductItem

El componente `ProductItem` muestra los detalles de un producto y un botón para agregarlo al carrito.

**Props:**

- `name`: String, nombre del producto.
- `price`: Number, precio del producto.
- `imageUrl`: String, URL de la imagen del producto.
- `onAddToCart`: Function, manejador de evento para agregar el producto al carrito.

**Requisitos:**

- Mostrar el nombre del producto en un elemento `<p>` con mayor énfasis.
- Mostrar el precio del producto en un elemento `<p>` con un tamaño de texto más pequeño que el nombre.
- Mostrar la imagen del producto en un elemento `<img>`.
- Tener un botón que llame a `onAddToCart` cuando se haga clic.

### Comment

El componente `Comment` muestra el nombre del usuario, el contenido del comentario y la fecha.

**Props:**

- `username`: String, nombre del usuario.
- `content`: String, contenido del comentario.
- `date`: Date, fecha del comentario.

**Requisitos:**

- Mostrar el nombre del usuario en un elemento `<strong>`.
- Mostrar la fecha en un elemento `<small>`, formateada de manera legible para el usuario.
- Mostrar el contenido del comentario en un elemento `<p>`.

### Modal

El componente `Modal` muestra un contenido modal y un botón para cerrarlo.

**Props:**

- `title`: String, título del modal.
- `content`: String, contenido del modal.
- `onClose`: Function, manejador de evento para cerrar el modal.

**Requisitos:**

- Mostrar el título en un elemento `<h2>`.
- Mostrar el contenido en un elemento `<div>`.
- Tener un botón que llame a `onClose` cuando se haga clic.
- Tener un fondo de modal que cierre el modal al hacer clic.

### Alert

El componente `Alert` muestra un mensaje de alerta con un botón para cerrarlo.

**Props:**

- `type`: String, tipo de alerta (por ejemplo, "success", "danger").
- `message`: String, mensaje de la alerta.
- `onClose`: Function, manejador de evento para cerrar la alerta.

**Requisitos:**

- Renderizar un elemento `<div>`.
- Mostrar el mensaje de la alerta dentro del `<div>`.
- Tener un botón de cierre con la clase `delete` que llame a `onClose` cuando se haga clic.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clonar el repositorio principal y navegar al directorio del coloquio:

    ```bash
    git clone https://github.com/lucasromanh/Coloquios_Progra3.git
    cd Coloquios_Progra3/src/COLOQUIOS_PROGRA_3/COLOQUIO_1
    ```

2. Instalar las dependencias:

    ```bash
    npm install
    ```

## Ejecución del Proyecto

Para ejecutar el proyecto del Coloquio 1, utiliza el siguiente comando:

```bash
npm run dev:coloquio1
```
