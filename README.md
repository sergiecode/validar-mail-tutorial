![enter image description here](https://raw.githubusercontent.com/sergiecode/validar-mail-tutorial/master/1.png)
![enter image description here](https://raw.githubusercontent.com/sergiecode/validar-mail-tutorial/master/2.png)

# Validación de correo electrónico en JavaScript

Este tutorial te guiará a través de los pasos para crear una función que valide una dirección de correo electrónico en JavaScript.

## Introducción

La validación de correo electrónico es una tarea común en muchas aplicaciones web. Puede ser necesaria para asegurarse de que los usuarios ingresen una dirección de correo electrónico válida antes de enviar un formulario, por ejemplo.

En este tutorial, crearemos una función que valida una dirección de correo electrónico en JavaScript. La función comprobará si la dirección de correo electrónico es válida utilizando expresiones regulares.

## Requisitos previos

Para seguir este tutorial, necesitarás conocimientos básicos de JavaScript.

## Paso 1: Crear la función de validación

Primero, crearemos una función llamada `validarEmail` que tomará una dirección de correo electrónico como argumento y devolverá `true` si la dirección es válida, o `false` si no lo es. Aquí está el código para crear la función:

    `function validarEmail(email) {
      // expresión regular para validar correo electrónico
      const expresion = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
      return expresion.test(String(email).toLowerCase());
    }` 

En esta función, estamos utilizando una expresión regular para validar la dirección de correo electrónico. La expresión regular que hemos utilizado es bastante simple y comúnmente utilizada en la validación de correo electrónico, pero puede haber otras expresiones regulares más complejas que puedan ser más adecuadas para tus necesidades.

## Paso 2: Utilizar la función de validación

Una vez que hemos creado la función `validarEmail`, podemos utilizarla en cualquier lugar de nuestro código. Aquí hay un ejemplo de cómo utilizar la función en un formulario web:

    `<!DOCTYPE html>
    <html>
    <head>
      <title>Validación de correo electrónico</title>
    </head>
    <body>
      <form>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required>
        <button type="submit" onclick="return validarEmail(document.getElementById('email').value)">Enviar</button>
      </form>
    </body>
    </html>` 

En este ejemplo, estamos utilizando la función `validarEmail` en el evento `onclick` del botón de envío del formulario. La función se llama con el valor del campo de entrada de correo electrónico como argumento. Si la dirección de correo electrónico es válida, el formulario se enviará correctamente. Si no es válida, el formulario no se enviará y se mostrará un mensaje de error al usuario.

## Conclusión

En este tutorial, hemos creado una función de validación de correo electrónico en JavaScript utilizando expresiones regulares. Esperamos que este tutorial haya sido útil y que puedas utilizar la función de validación de correo electrónico en tus propias aplicaciones web. Si tienes alguna pregunta o comentario, no dudes en dejarnos un mensaje en la sección de problemas del repositorio.
