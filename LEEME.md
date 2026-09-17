# Portafolio reorganizado

Se conserva HTML, CSS y JavaScript sin herramientas de compilacion.
Puedes abrir index.html directamente en el navegador, o usar tu servidor local habitual.

## Estructura
- index.html: contenido y estructura; el espanol sigue disponible sin JavaScript.
- css/base.css: variables, reglas generales y animaciones.
- css/components.css: secciones, botones, tarjetas, certificados e iconos.
- css/responsive.css: estilos para movil y movimiento reducido.
- js/translations.js: diccionario de textos en espanol e ingles.
- js/language.js: cambio de idioma y preferencia en localStorage.
- js/scroll.js: navegacion activa, barra de progreso y boton para volver arriba.
- js/projects.js: filtros por categorias.
- js/main.js: inicializacion de las funciones y de AOS.
- assets/images/: imagenes originales.
- assets/documents/: PDF del CV.

Los scripts usan defer y un espacio compartido window.Portfolio. Se cargan en el orden
del HTML y funcionan al abrir el archivo directamente, sin importaciones ni servidor obligatorio.
Los SVG repetidos usan simbolos definidos dentro del mismo HTML.

## Archivos que debes agregar
El adjunto contenia solamente el HTML. Copia estos archivos desde tu proyecto:
- assets/images/Aws_Badge.png
- assets/images/Coursera_HF6EP71F5SVW.png
- assets/images/Coursera_Pyhton.png
- assets/images/IMB_Badge _SinFondo.png
- assets/documents/CV-Saul-Vazquez.pdf

Respeta los nombres existentes, incluidos espacios y mayusculas.
No se han creado imagenes ni un CV de reemplazo.

## Como editar
- Cambia colores compartidos en :root dentro de css/base.css.
- Cambia estilos de secciones en css/components.css.
- Para editar un texto traducido, busca su data-i18n en index.html y su clave en
  js/translations.js. Actualiza tambien el espanol visible del HTML para mantener
  la misma version cuando JavaScript este desactivado.
- Para agregar un proyecto, copia una tarjeta .cv-project y conserva data-category:
  webdev, data o ambas separadas por espacio. Usa claves data-i18n nuevas para sus textos.
- Los textos del diccionario pueden contener strong y span, como en el original.
  Deben mantenerse como contenido de confianza escrito por el autor.
- AOS y Google Fonts siguen usando recursos externos; requieren internet.
  Si AOS no carga, el contenido permanece visible y las funciones propias siguen funcionando.

## Cambios
Se separaron estilos y comportamientos, se eliminaron estilos y eventos inline de certificados,
se reutilizaron iconos, se centralizaron traducciones conservando el espanol visible original,
se unificaron los eventos scroll con requestAnimationFrame y se quitaron reglas sin uso.
La navegacion conserva position: relative, que era el valor efectivo del archivo original.
Se mantuvieron contenido, proyectos, enlaces, colores y distribucion del portafolio.

## Verificacion
Se comprobaron la distribucion y los estilos frente al archivo original a 1440 y 390 px,
la geometria de los iconos, el contenido visible, el cambio de idioma, su persistencia,
los tres filtros y las funciones de desplazamiento. No se detectaron errores JavaScript.
Los recursos externos se simularon durante la comparacion para usar las mismas condiciones
en ambas versiones. La carga real de Google Fonts y AOS desde sus servidores no se verifico.
El archivo VALIDACION.json contiene el resultado de las comprobaciones.
