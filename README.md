# Administrador de Clientes

Proyecto de Administrado de Clientes (CRM)

## Librerias utilizadas.

- [React Router Dom](https://reactrouter.com/en/main): Libreria que nos permite navegar entre los componentes de nuestra aplicacion sin perder el historial de navegacion.

- [Tailwind CSS](https://tailwindcss.com/docs/installation): Framework que permite a los desarrolladores y diseñadores aplicar estilos a los sitios web de una manera ágil y optimizada.

- [JSON Server](https://www.npmjs.com/package/json-server): Permite el uso de archivos .JSON para que hagan de base de datos, el archivo JSON es modificado en tiempo real, conforme se hacen POST, PUT, DELETE.

## ¿Cómo iniciar el proyecto en local?

1. Clonar el repositorio.

```
git clone https://github.com/KevSchmitz/crm-react.git
```

2. Instalar dependencias.

```
npm install
```

3. Instalar JSON Server

```
npm install -g json-server
```

4. Iniciar JSON Server

```
json-server --watch db.json
```

5. Correr el proyecto en el navegador.

```
npm run dev
```
