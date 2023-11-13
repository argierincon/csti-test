# Prueba técnica FE

- [Descripción](#características)
- [Características](#características)
<!-- - [Capturas de Pantalla](#capturas-de-pantalla)
- [Proceso de desarrollo](#capturas-de-pantalla) -->

## Descripción

Culqi han creado un sistema de gestión de personal para las empresas que tienen como cliente. Este sistema está diseñado para satisfacer sus necesidades fundamentales y se compone de dos funcionalidades esenciales:

**Autenticación:** Brindar un sólido sistema de autenticación que garantiza la seguridad y la privacidad de los datos de la empresa.

**Listado de Empleados:** La plataforma proporciona una herramienta eficiente para gestionar empleados, facilitando el control y la organización de la fuerza laboral de las empresas.

## Características

#### Login

- Validación de Campos inválidos y vacíos: se ha implementado la validación de formularios de campos requeridos y un regEx para validar el formato del correo ingresado.

- Manejo de errores en caso de fallos en el Formulario: se ha implementado una validación en las peticiones del formulario para mostrar el debido mensaje de error en caso de cualquier fallo en el proceso de inicio de sesión.

- Redirección a la página principal: después de una autenticación exitosa, se aplica la redirección automática para llevar al usuario a la página principal de la plataforma y en caso de navegación directamente por las rutas o vencimiento del token la pagina redirige al usuario al login.

- Almacenamiento de datos de Usuario: al iniciar sesión, los datos del usuario se almacenan de manera segura en el sistema. Esto habilita un acceso rápido a la información del usuario autenticado, a su vez permite que las iniciales del usuario se muestren en el componente Header del layout de la página principal, \_el color de fondo de las iniciales es un color aleatorio calculado automáticamente con una función utilitaria.

#### Lista de empleado

- Componente tabla responsive con paginación: se ha creado un componente tabla adaptable que muestra de manera eficiente los datos de los empleados en diferentes tamaños de pantalla, garantizando una experiencia de usuario consistente.

- Navegación y paginación: se desarrolló la funcionalidad de navegación entre páginas para facilitar la visualización de la lista de empleados.

- Control de la cantidad de empleados a mostrar: Los usuarios pueden seleccionar la cantidad de empleados que desean visualizar a la vez mediante opciones de selección.

- Búsqueda: se aplicó una función de búsqueda en la página actual para encontrar a empleados específicos utilizando parámetros de nombre y departamento.

- Filtrado por Cargo: se ha incorporado un componente select de filtrado en la página actual basado en el nombre del cargo de los empleados.

- Descarga de la lista de empleado: se añadió una función utilitaria que permite descargar la lista de empleados visible en la página actual.


#### Página de reclutamiento

- El diseño de la página de reclutamiento no fue indicado, por lo que se construyó un placeholder con el fin de no dejar la página vacía ni el enlace sin funcionamiento.
