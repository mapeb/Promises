# Práctica: _Cuando Viene_

Esta práctica consiste en detectar y corregir las fallas tanto arquitecturales como de implementacion de un proyecto simple en nodejs.

Existe más de una manera de encarar esta práctica, y queda a criterio de cada equipo. Por ejemplo, la misma se puede encarar con Promises o con CPS.

## Dominio

Se tiene un sistema que permite a los usuarios:

  * conocer el estado de lineas de colectivos (si está funcionando),
  * y cuándo llega el próximo colectivo a una estación.

Los **clientes** son nodos _bobos_ que pueden realizar estas dos operaciones, y que las resolverán llamando a los endpoints correspondientes en el **servidor** `frontend_server`.

El `frontend_server` recibe los pedidos y los delega en un servicio `journey_server` que posee el estado y la informacion actual de los colectivos .

El `journey_server` tiene este comportamiento:

- Cada 55 segundos se actualizan el estado de las lineas
- Cada 30 segundos se actualiza el estado de cuando llegan los colectivos a destino
- Cuando se hace la solicitud del servidor que da respuesta a los clientes y este servidor con el estado el tiempo de respuesta puede ser de hasta 5 segs.

Además, `frontend_server` utiliza `get.js` para realizar las conexiones HTTP.

## Obetivo

Sin embargo, el código no está completo y presenta errores. Se pide:

- Completar los servidores, detectar errores de control de flujo y corregirlos.
- Mejorar la arquitectura:
   - Implementar manejo de errores
   - Implementar timeouts en todos los endpoints

## Pasos Sugeridos

 0. Levantar el `frontend_server` y `journey_server` y probar utilizarlos.
 1. Detectar errores en el código en cuanto al manejo de promises, en cualquiera de los servidores o `get.js`. Muchas de ellas no funcionan: corregirlas o eliminarlas.
 2. Responder: Que modelo de procesos tiene node-schedule
 3. ¿Qué sucede si alguno de los servidores se cae?
 4. Implementar manejo de errores.
 5. Implementar timeouts
 6. [Opcional] Implementar un _supervisor_.
 7. [Opcional] Levantar con `cluster`
 8. [Opcional] Investigar y utilizar `promisfy`.
