#InfiniteProducts

InfiniteProducts es un web app que muestra una lista infinita de 96 productos.

#FrontEnd

Utilicé Angular como framework para el frontEnd. Utilizando un servicio de Angular para realizar los requests.

Utilicé un modulo de Angular, InfiniteScrollModule, el cual permite que al realizar un scroll down en una parte especifica del HTML se corra una función.

Esta función hace el request al backend, esperando solo 20 items. En el request se le pasa el numero de items esperados (20) y el numero de en que parte del maximo de items (96) nos encontramos, de tal forma que no se repitan los items en cada request. Este último número se modifica una vez que se recibe de vuelta el request, de tal forma que el próximo request no repita los mismos items. 

#BackEnd

Utilicé Node.js para el backEnd. El backEnd recibe el request del frontEnd, entra en la base de datos, y obtiene la lista de 96 items.

Utilizando el numero en la ruta, y el numero de items esperados (20) determina que parte del array de productos debe devolver al frontEnd, en caso no queden suficientes items en la lista, se llenan con los primeros de la lista, de tal forma que siempre se entregue el numero esperado (20).

#Ejecución del Proyecto 

Luego de clonar el repositorio, es necesario entrar en la terminal a la carpeta frontCar, dentro de la carpeta src. Correr el comando npm install para instalar los módulos de front end, incluyendo el modulo de angular que permite correr sus comandos en la terminal.

También es necesario correr el mismo comando en la carpeta backCar, también dentro de la carpeta src. Esto instalará los módulos necesarios para el backEnd.

Actualmente la información es obtenida de un array en el backEnd, pero el código podría ser modificado de forma mínima para obtener esta información de una Base de Datos. 

Después de haber instalado los módulos tanto en el front end, como en el back end, en el back end se debe correr el comando "npm start", desde la carpeta backCar, y para el front end se debe correr el comando "ng serve" desde la carpeta frontCar. Después de esto, se podrá acceder en un explorador a http://localhost:4200/ para ver el proyecto en ejecución.
