HERMELINDA 3

Se trata de una imagen vectorial compuesta por 304 piezas, cada una una con un tono gris particular. Las piezas estan creadas  con  etiquetas < path >. Estas a su vez están contenidas dentro un contenedor tipo < g >. El contenedor < g > va dentro de un contenedor tipo < defs >. Los contenedores  < g >  y < defs >  a su vez los contiene la etiqueta contenedora  < svg >. 

A < g > se le pueden aplicar clases que van a incidir en todos los < path > que envuelve. La etiqueta < defs > nos permite usar la imágen las veces que se quieran invocando  las siguientes lineas de código antes de cerrar la etiqueta < svg > :

< use xlink:href="#momUno" >< / use >

"#momUno" se refiere al id dentro del contenedor < g >
 
El atributo "fill" de cada path (el tono gris  de cada pieza) es el que mas  se destaca al activar la animación pensada para  la imagen. Con javascript se agregan 5 clases diferentes al elemento envolvente de los path. Las clases, al momento de insertarse, activan las animaciones creadas dentro del archivo de estilos. La inserción se produce justo al cliquear sobre el ícono "play". 

Cada animación, cinco en total, actúa sobre grupos de paths diferentes apelando al uso de la pseudo-clase :nth-child. Con la etiqueta < g > se pueden organizar grupos de < path > , tantos como se deseen, y en cada uno de ellos aplicar estilos o aimaciones diferentes. Las posibilidades de animación de la imagen son realmente muchas si usamos < g > de la mano con la  pseudoclase nth:child, solamente. Javascript, en este caso, solo se usa para insertar las clases de manera dinámica. 

Si acudimos a los métodos  que javascript ofrece tendríamos un menú  tan diverso como gigante a lo ahora de craer una animación. Quizá lo complejo es  lograr animaciones creativas e interesantes. Arte, en últimas. He ahí el reto.  

La imágen corresponde a mi madre. Ella ya no está. De ella recibí mucha paciencia para no desfallecer en la construcción de cada una de las 304 piezas.  
