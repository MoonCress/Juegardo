# SPELL KEEPER

## EQUIPO DE DESARROLLO
***Spell Keeper*** fue concebido el 2 de febrero por el estudio **Spells & Bytes Studios** formado por Gonzalo Bertolín Díez, Sandra Conde González, Pablo Folgueira Galán y Alfonso García-Carrasco Puerta.

## SINOPSIS
Red, el ser más poderoso de Fadaith, ha sido hechizado y despojado de todos sus objetos mágicos por su mayor enemigo, Orkodan, que se ha hecho con el control de su castillo, trayendo con él todo tipo de criaturas que intentarán sembrar el caos. Ahora, sin memoria, debe adentrarse en el para recuperar todo el poder que le arrebataron, y así mantener el mal lejos de Fadaith. En su camino se encontrará con los enemigos que han invadido su hogar, pero también con armas y objetos mágicos que le ayudarán a derrotarlos y a superar los peligros que deberá afrontar para derrotar a Orkodan.

## GÉNERO
Juego roguelike (basado en salas creadas proceduralmente con enemigos, cuyo objetivo es avanzar y sobrevivir, y donde la muerte implica la pérdida de los objetos obtenidos hasta el momento) con una vista top-down al estilo de ["The binding of Isaac"](https://youtu.be/uV-w-Zf-mc8?si=l2bC0diawGzIUS6-) y ["Enter the gungeon"](https://youtu.be/IEsSICRjPdM?si=V5AlARiZy6Nbnkn1), en los que nos hemos inspirado, entre otros.

## RANGO DE EDAD
Desde los 12 años en adelante.

## PEGI Info
PEGI 12 debido a la violencia gráfica hacia los personajes de fantasía y el lenguaje soez leve empleado.

## ALCANCE
Este juego está dirigido principalmente a un público adolescente/joven que busque un desafío, así como para un público más adulto, con mayor experiencia en videojuegos, que quiera poner a prueba sus habilidades.

## LORE
El juego tendrá lugar en la guarida de Red, que se encuentra en Fadaith, un mundo de fantasía en el que la magia es una parte fundamental de la vida de sus habitantes. En él, los magos son los seres más poderosos, capaces de cambiar la realidad a su antojo. Red es el más poderoso de todos ellos, y ha dedicado su vida a proteger Fadaith de las fuerzas del mal. Sin embargo, Orkodan ha decidido que es hora de que el mal gobierne, y ha hechizado a Red para hacerse con su poder e invadir su castillo con las criaturas más malignas del reino, desde esqueletos y fantasmas, hasta plantas carnívoras gigantes y dragones. 
Red deberá recuperar su poder y derrotar a Orkodan para devolver la paz a Fadaith.
El castillo de Red es un lugar mágico y misterioso, compuesto por 4 plantas distintas, cada una de ellas con numerosas salas, llenas de trampas y peligros, pero también de tesoros y objetos mágicos que le ayudarán en su aventura. La primera de ellas es la entrada, que servirá como tutorial, después encontramos **Los Jardines** (colores cálidos), **La Biblioteca** (colores oscuros y temática fantasmagórica o misteriosa), y por último, **La Sala del Trono** (colores grises y rojos, temática solemne). 
Además, el mercader tratará de ayudarle vendiéndole objetos mágicos y armas que le puedan ser de ayuda a lo largo de las diferentes salas.

## JUGADOR
### MECÁNICAS DEL JUGADOR
- **Moverse** en las 8 direcciones (norte, sur, este, oeste, noreste, noroeste, sureste y suroeste) con las teclas WASD.
- **Recoger** objetos pasando por encima de ellos.
- **Atacar** cuerpo a cuerpo y a distancia con el click izquierdo para el ataque cuerpo a cuerpo y con el click derecho para el ataque a distancia. Los ataques a distancia consumen un recurso/estadística del jugador, el maná, que se consume usando ataques a distancia.
- **Equiparse** armas y cambiarlas usando las teclas Q y E para rotarlas a izquierda o derecha del tipo que estés usando en ese momento (si estás con un arma cuerpo a cuerpo y pulsas Q y E rotarás sobre las armas cuerpo a cuerpo y lo mismo para cuando uses armas a distancia).
- **Interactuar** con ciertos objetos del entorno mediante la tecla F. En estos objetos verás un reborde blanco para poder interactuar con ellos (o no, jeje).
- **Escudarse** del daño presionando la tecla SHIFT. Será imnune durante 3 segundos a todo daño que te venga y cuando acaba esa duración el escudo entra en enfriamiento durante 10 segundos en los cuales no podrás usar esta mecánica.

DEPRECADO
- **Comprar** objetos en la tienda.
- **Robar** en la tienda.

### ESTADÍSTICAS Y RECURSOS DEL JUGADOR
- **Vida:** número que indica la cantidad de golpes que el jugador puede recbir antes de morir. Este número esta capado inferiormente a 2 y superiormente a 20. La vida está representada con sprites de corazones, donde cada uno representa dos unidades de vida.
- **Maná:** número capado inferiormente a 10 y superiormente a 1000 que indica cuántos ataques a distancia puedes realizar según con qué arma. El maná se recupera con los ataques cuerpo a cuerpo y está representado mediante una barra con su cantidad, la cual se va vaciando o rellenando según lo que cueste/recupere el ataque realizado.
- **Velocidad de movimiento:** velocidad a la que se mueve el jugador mediante un movimiento rectilíneo uniforme, es decir, un cambio a la velocidad es inmediato (no es gradual) y no hay aceleración. La velocidad de movimiento está capada inferiormente a 30 y superiormente a 200.
- **Suerte:** probabilidad que influirá en los objetos y armas que podrá conseguir el jugador. Cuanto más alta, mejores objetos y más botín.
- **"Inventario":** es un recurso donde el jugador tiene guardadas sus armas. En todo momento tiene todas las armas que ha conseguido a su disposición.


## ENEMIGOS
### ESTADÍSTICAS DE LOS ENEMIGOS
- **Vida:** número que representa la vida del enemigo.
- **Ataque:** número que representa el daño que hace el enemigo.
- **Probabilidad de loot:** probabilidad de que el enemigo deje un objeto al morir.
- **Velocidad de movimiento:** velocidad a la que se mueve el enemigo.
- ### ARMERIA
    - Esqueleto arquero
    - Caballero
    - Goblin Venenoso
- ### JARDINES
    - Plantas Carnívoras
    - Sapos (DEPRECADO)
    - Arañas (DEPRECADO)
    - Insectos (DEPRECADO)
    - Minotauros (DEPRECADO)
    - Slime
    - Goblin Venenoso
    - Golem de lava
- ### BIBLIOTECA
    - Fantasmas (DEPRECADO)
    - Libros 
    - Candelabros (DEPRECADO)
    - Murciélagos (DEPRECADO)
    - Caballero
    - Esqueleto mágico
    - Esqueleto
    - Esqueleto normal
- ### CASTILLO (DEPRECADO)
    - Caballeros
    - Dragones
    - Gárgolas
    - Diablo

### ESPECIFICACIÓN DE LOS ENEMIGOS
- **archerSkeleton:** enemigo que tiene 15 de vida y 30 de velocidad de movimiento, este enemigo persigue al jugador hasta que esta dentro de un rango donde empieza a disparar flechas que infligen 1 de daño cada 1000 milisegundos hacia donde se encuentra el jugador.
- **book:** enemigo que tiene 20 de vida y 70 de velocidad de movimiento, este enemigo se dirige al jugador hasta que está al lado de él y le ataca, si puede atacar más de una vez lo hace cada 2000 milisegundos.
- **carnivorousPlant:** enemigo que tiene 30 de vida y 0 de velocidad de movimeinto por lo que no se mueve pero que cuando se encuentra dentro de un rango de ataque empieza a lanzar proyectiles cada 1500 milisegundos con un daño de 1 por proyectil y si te acercas a una distancia todavía menor hace un ataque cuerpo a cuerpo cada 1500 milisegundos.
- **slime:** enemigo que tiene 10 de vida y 30 de velocidad de movimiento, este enemigo se acerca al jugador y cuando está en rango cada 1500 milsegundos hace un ataque cuerpo a cuerpo infligiendo 1 de daño, cuando muere crea 3 hijos suyos.
- **childSlime:** Tienen un tamaño menor que su padre slime, con 2 de vida y 50 de velocidad de movimiento cada uno, tienen el mismo comportamiento que su padre.
- **knight:** enemigo que tiene 20 de vida y 40 de velocidad de movimiento, el enemigo se va acercando al jugador y cuando puede atacar desde cualquier ángulo aunque no te vea (por ejemplo, si te encuentras por debajo de él) también te puede atacar infligiendo 1 de daño cada 1500 milisegundos.
- **lavaGolem:** enemigo que tiene 50 de vida y 20 de velocidad de movimiento, el enemigo se acerca al jugador y cuando puede atacar, ataca al jugador cada 1500 milisegundos haciendo 1 de daño por ataque. 
- **magicSkeleton:** enemigo que tiene 15 de vida y 20 de velocidad de movimiento, se mueve lentamente y ataca al jugador creando un proyectil desde donde esté en direccion del jugador cada 1000 milisegundos donde si impacta hace 1 de daño.
- **poisonousGoblin:** enemigo con 10 de vida y 40 de velocidad de movimiento, que ataca al jugador lanzado flechas/proyectiles cada 900 milisegundos que si impactan en el jugador le hacen 1 de daño.
- **standardSkeleton:** enemigo con 20 de vida y 40 de velocidad de movimiento donde va persiguiendo al jugador y cuando puede atacar cada 1500 milisegundos ataca al jugador haciéndole 1 de daño si impacta.

## ARMAS
### ESTADÍSTICAS DE LAS ARMAS
- **Daño:** daño que hace el arma.
- **Alcance:** distancia a la que el arma puede alcanzar al enemigo, básicamente cuanto ocupa el ataque, si es cuerpo a cuerpo, cuanto es el area de la hitbox y, si es a distancia, cuanto ocupa su proyectil.

### CARACTERÍSTICAS DE LAS ARMAS
Las armas se dividen en dos subgrupos grandes: cuerpo a cuerpo y a distancia. Las armas cuerpo a cuerpo tienen distintas características que las diferencian unas de otras, mientras que las armas a distancia se distinguen por el proyectil que lanzan.

### ESPECIFICACIÓN DE LAS ARMAS
ARMAS INICIALES
- **dagger**: arma inicial cuerpo a cuerpo, la cual tiene la propiedad _havePuncture_.Básicamente hace que el ataque del arma arremeta hacia delante y no la blande de por sí, tiene un daño de 2, regenera 20 de maná por golpe y tiene un delay por ataque de 250 milisegundos.
- **fireStaff**: arma incial a distancia, simplemente lanza una bola de fuego cada 350 milisegundos, cada proyectil cuesta 5 de maná y hace 4 de daño.

ARMAS CUERPO A CUERPO:
con propiedad _haveSlash_
- **chargeSword**: arma que hace 6 de daño y cada 4 ataques hace el cuádruple de daño que el daño original, con un delay de 800 milisegundos por ataque y regenera 10 de maná por golpe.
- **drainSword**: arma que hace 4 de daño con la característica de que se cura la mitad del daño infligido a los enemigos, con un delay de 500 milisegundos por ataque y no regenera maná.
- **ChofSword**: arma básica que no hace nada mas que hacer 1 de daño, con un delay de 300 milisegundos y regenerando 45 de maná por golpe.
- **HOE**: el arma definitiva la cual, al equiparse, también viene incluida con un gorro de paja a juego. Cada ataque hace INFINITY de daño pero un área muy reducida con un delay de 100 milisegundos entre ataques. Si el ataque tiene éxito, regenera todo el maná del jugador.
- **lethalSword**: arma letal para tus enemigos, ya que hace un daño de 45 por ataque, con un delay de 200 milisegundos. Sin embargo, también es letal para el jugador, ya que si recibes daño de cualquier fuente del juego teniendo equipada este arma, morirás instantáneamente. Regenera 20 de maná por ataque.
- **magicSword**: arma que hace 15 de daño por ataque, con un delay de 300 milisegundos, con la característica de que si el jugador tiene toda la vida, lanza un proyectil adicional al ataque cuerpo a cuerpo que inflige un tercio del daño del ataque orginal, regenerando 12 de maná por golpe.
- **megaEspadaMortal**: el arma con el área de ataque más grande de todo el juego, haciendo 30 de daño por golpe, con un delay de 1000 milisegundos entre ataques y regenerando 170 de maná por golpe.

con propiedad _havePuncture_
- **posionDagger**: arma que inflige 4 + 2 de daño en 2 segundos en el tiempo a los enemigos impactados, con un delay de 250 milisegundos entre ataques y regenerando 20 de maná por golpe.
- **spear**: arma básica que hace 3 de daño, con un delay de 250 milisegundos entre ataques, regenerando 15 de maná por golpe.

ARMAS A DISTANCIA:
- **iceStaff**: arma que lanza un proyectil de hielo infligiendo 10 de daño con un delay de 250 milisegundos, con un coste por ataque de 75 de maná. Cuando su proyectil impacta con un enemigo, este se fragmenta, creando una zona que si pasan por encima les hace 4 de daño en el tiempo. Esta zona tiene una duración de 5000 milisegundos.
- **magicKnife**: arma que lanza un total de 10 proyectiles por ataque que convergen en el punto en el que han sido lanzados. Cada proyectil hace 2 de daño y tiene un delay de 250 milisegundos entre ataques, costando cada ataque 50 de maná.
- **poisonStaff**: arma que dispara un proyectil que hace 10 + 5  de daño en 2 segundos en el tiempo al enemigo impactado, con un delay de 300 milisegundos entre ataques, costando 20 de maná cada ataque.
- **shotgun**: arma que dispara 15 proyectiles de la manera en la que se dispararían los perdigones de una escopeta (porque es una) haciendo 4 de daño por proyectil, con un delay de 250 milisegundos entre ataques, costando cada ataque 35 de maná.
- **thompson**: arma que dispara proyectiles de manera muy rápida, ya que tiene un delay de 50 milisegundos, haciendo 5 de daño por proyectil, costando cada ataque 5 de maná.

## OBJETOS
Los objetos no pueden usarse para atacar y tienen efectos pasivos. Algunos los sueltan los enemigos al morir y otros están en los cofres escondidos.
## Especificacion de los objetos
- **4-leafsClub:** objeto que incrementa la suerte del jugador en 10 puntos.
- **broom:** objeto que te multiplica tu velocidad de movimiento actual por 1.4 veces.
- **halfHeart:** objeto que al obtenerlo te cura 1 unidad de vida.
- **heartAmulet:** objeto que incrementa tu vida máxima en 4 unidades de vida.
- **key:** objeto que sirve para poder abrir los cofres en el castillo. A excepción de los cofres que aparecen al matar a los bosses, que no necesitan llave para abrirse.
- **manaPotion:** objeto que al obtenerlo te regenera 50 de maná.
- **nowYouAreFat:** objeto que te disminuye la velocidad de movimiento en 30, y te aumenta la vida máxima en 4 y el maná máximo en 50.
- **shadowCloak:** objeto que te aumenta la velocidad de movimiento en 40.

## BOSSES
En el juego hay un jefe por zona, a excepción de la zona de la armería, por ser la introductoria. Estos jefes son: **_Bellotini y Dahto_**.
### BELLOTINI, EL ARBOL MALVADO
Bellotini antes de nacer era un árbol milenario, que protegía la vida de los jardines del castillo de nuestro protagonista. Sin embargo, nuestro antagonista le lanzó un hechizo, con el que nació Bellotini, listo para acabar con la vida de nuestro protagonista y amenazando la vida de los jardines que una vez protegió.
El boss cuenta con 3 ataques distintos, no se mueve y tiene 600 de vida.
Sus ataques son los siguientes: 
- **Acorn attack**: Bellotini lanza sus bellotas contra el jugador, haciéndo daño de impacto si caen sobre él y destruyéndose cuando impactan con el suelo. Además, estas bellotas tienen la probabilidad de tener un enemigo dentro de ellas, así que cuando se destruyen contra el suelo, sale el enemigo que había dentro de la misma.
- **Surprise roots attack**: Bellotini usa sus raíces para sorprender al jugador, atacándole al emerger justo en su posición.
- **Moving roots attack**: Bellotini invoca con su poder una hilera de raíces que se dirige rápidamente hacia el jugador en varias oleadas.

### DAHTO, EL MAGO NEGRO
Nuestro antagonista, en un último intento de defender lo que había robado, se corrompe. Para ello, usa su propia magia para ganar más poder, convirtiéndose en Dahto, el mago negro.
El boss cuenta con 3 ataques distintos, se mueve siguiendo al jugador y tiene 1000 de vida.
Sus ataques son los siguientes:
- **Lava attack**: En este ataque, Dahto convoca su poder demoníaco para crear unos charcos de lava por toda la habitación que te matan al contacto.
- **Mortal punch attack**: Dahto carga energía demoniaca en su brazo izquierdo para embestir al jugador, dando un increíble salto a su vez hacia él. Mientras embiste, libera la energía del brazo invocando a sus subditos.
- **Rumble attack**: Dahto muestra su furia golpeando el suelo con sus puños y creando ráfagas de fuego en círculos, que el jugador deberá evitar para sobrevivir.

Estad atentos a los secretos, nunca se sabe que se puede ocultar a simple vista ;)
