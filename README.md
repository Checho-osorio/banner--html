# CustomBanner-Principal

Idea general: 
Componente de slider que permite añadir CTA de ser necesario, permitiendo agregar título, párrafo, y múltiples botones, que permita definir la posición del contenido CTA dentro del banner según se requiera


Objetivos: 
Permite visualizar un slider de banners  con la información cargada previamente en el Site Editor

## Procedimientos de instalación y prueba:

El componente se encuentra en el siguiente repositorio: https://gitlab.com/titadev/operation/prochampions-io/components/custombanner-principal

Para el proceso de instalación recuerde cambiar el VENDOR por el account name del ambiente a instalar, linkee o instale el componente 


## Site Editor
El componente creado en el site editor se compone de un array de  elementos, dentro de cada elemento se solicitará diferentes elementos:


+ Imagen para desktop : Este elemento utiliza el ui:widget: ‘image-uploader’ el cual permite carga la img para desktop desde el site editor
+ Imagen para mobile: Este elemento utiliza el ui:widget: ‘image-uploader’ el cual permite carga la img para mobile desde el site editor
+ Alt de la imagen: Este elemento permite cargar el Alt de la imagen para SEO
+ Título de la imagen: Este elemento permite cargar el TITLE de la imagen para SEO
+ ¿ Tiene CTA ?: Este elemento es un selector con dos opciones ( Si, No ) que permite definir si el banner tendra CTA

**Si la opción seleccionada es: No**

+ Url redireccionamiento: Este elemento es permite añadir al URl que tendrá todo el banner
+ ¿El link es externo ?: Este elemento es un campo Booleano que permite definir la forma que se abrirá e l link, renderizando la página o abriendo el enlace en una nueva pestaña

**Si la opción seleccionada es: Si**

+ Texto Principal: Este elemento permite cargar el Titulo que tendrá el bloque del CTA 
+ Texto Descripción: Este elemento permite cargar el párrafo que tendrá el bloque del CTA
+ Color Texto: Este elemento permite cargar el color en HEXADECIMAL que tendrá el texto del bloque del CTA
+ Alineación del Titulo: Este elemento es un selector que permite definir la orientación del título del bloque del CTA
+ Alineación horizontal del contenido: Este elemento es un selector que permite definir la orientación de la descripción y los btn del bloque CTA
+ Ancho Maximo del contenido: Este elemento permite definir el ancho maximo que tendrá el contenedor del bloque CTA, esta medida es en pixeles
+ Posición Horizontal: Este elemento es un selector que permite definir la posición horizontal del bloque CTA en el banner
+ Posición Vertical: Este elemento es un selector que permite definir la posición vertical del bloque CTA en el banner
+ Posición Horizontal Btn Mobile:  Este elemento es un selector que permite definir la posición horizontal del bloque CTA en el banner - Esto aplica únicamente para MOBILE 

**Dentro del Array de BTN CTA se permite minimo 1 elemento, maximo 5 , cada elemento tiene las siguientes características:**

+ Texto del boton: Este elemento permite definir el texto del btn del CTA
+ Link: Este elemento es permite añadir al URl que tendrá btn del CTA
+ ¿El link es externo ?: Este elemento es un campo Booleano que permite definir la forma que se abrirá el link, renderizando la página o abriendo el enlace en una nueva pestaña
+ Color Texto:  Este elemento permite cargar el color en HEXADECIMAL que tendrá el texto del btn del CTA
+ Color Fondo:  Este elemento permite cargar el color de fondo en HEXADECIMAL que tendrá el btn del CTA
+ Color Borde: Este elemento permite cargar el color del borde del btn  en HEXADECIMAL que tendrá el btn del CTA
+ Color texto - Efecto Hover: Este elemento permite cargar el color en HEXADECIMAL que tendrá el texto del btn del CTA cuando se haga la acción de hover
+ Color Fondo - Efecto Hover:  Este elemento permite cargar el color de fondo en HEXADECIMAL que tendrá el btn del CTA cuando se haga la acción de hover
+ Tamaño texto Desktop: Este elemento permite definir el tamaño del texto del btn del CTA en desktop, esta medida es en pixeles
+ Tamaño texto Mobile: Este elemento permite definir el tamaño del texto del btn del CTA en mobile, esta medida es en pixeles
