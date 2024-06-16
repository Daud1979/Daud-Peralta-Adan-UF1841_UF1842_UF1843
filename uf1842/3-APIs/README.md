# Juego del ahorcado

Este juego del ahorcado siempre tiene la misma palabra a adivinar.

Nos han comentado que existe una API que nos permite obtener una frase en inglés cada vez que le hacemos una petición GET

Su URL es https://puzzle.mead.io/puzzle

Además, dispone de un parámetro que permite indicar el número de palabras que queremos del concepto a advinar. El parémtro es wordCount. Por ejemplo, si queremos obtener siempre una concepto de 2 palabras a adivinar podemos hacer un GET a esta URL https://puzzle.mead.io/puzzle?wordCount=2


## Funcionalidades deseadas

[Ver vídeo funcionalidades deseadas](https://oscarm.tinytake.com/df/16401cd/thumbnail?type=attachments&version_no=0&file_version_no=0&thumbnail_size=preview)

**Solamente** debes modificar el fichero scripts/request.js . Es una buena idea, sin embargo, que eches un vistazo a cómo está montada la aplicación Web

1. Implementa una llamada a la API para que cada vez que se inicia el juego, se obtenga una palabra aletória
2. Fíjate que la función _getPuzzle_ tiene un parámetro, que indica el número de palabras a obtener. Usa el valor de dicho parámetro para hacer la petición a la API con el número de palabras deseados. 

Para probar el último punto, cambia el valor del parámetro de la función en __getPuzzle_ el fichero app.js

`const puzzle = await getPuzzle('3')`
