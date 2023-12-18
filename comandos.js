/**
 * 
 * Actividad 1:
 * Diseño y operaciones CRUD en Bases de datos NoSQL
 * link: https://github.com/tbernardv/actividad1_db_avanc_iberoamericana/blob/main/actividad1_tyson_bernard.js
 * 
 * Actividad 2:
 * Diseño y operaciones CRUD en Bases de datos NoSQL: EJECUCIÓN DE LA ESTRATEGIA DE REPLICACIÓN >>
 * link: https://github.com/tbernardv/actividad2_ejemplo_replicacion_mongoDB
 * 
 * Actividad 3:
 * Conceptos y Comandos básicos del particionamiento en bases de datos NoSQL
 * Link: https://github.com/tbernardv/Actividad3_Conceptos_Comandos_b-sicos_Particionamiento
 * 
 * Estos comandos se deben ejecutar en el shell de MongoDB. 
 * Los resultados obtenidos se pueden verificar mediante consultas adicionales y análisis de la distribución de datos en los nodos del clúster.
 * 
 */

/**
 * Paso 1 - Arranque de la Consola de Mongo:
 * Iniciar la consola de mongo
 */
mongo

/**
 * Paso 2 - Creación del Grupo de Particionado:
 * Crear el grupo de particionado para pruebas (use admin)
 */
db.runCommand({ enableSharding: "torneoDB" })

/**
 * Paso 3 - Inserción de Datos sobre el Balanceador:
 */
// Habilitar el balanceador de carga
sh.enableSharding("torneoDB")

// Definir la clave de particionamiento por Categoría de Peso
sh.shardCollection("torneoDB.deportistas", { "categoria_peso": 1 })

// Insertar datos
db.deportistas.insert({ nombre: "Peleador1", categoria_peso: "Pluma", edad: 25 })

/**
 * Paso 4 - Comprobación de la Distribución de Datos:
 * Verificar la distribución de datos en los nodos (use torneoDB)
 */
db.deportistas.getShardDistribution()

/**
 * Paso 5 - Activación del Sharding:
 * Activar el sharding para la colección Encuentros Deportivos
 */
sh.shardCollection("torneoDB.encuentros", { "_id": "hashed" })

/**
 * Paso 6 - Activación del Balanceador de Carga:
 */
sh.startBalancer()

/**
 * Paso 7 - Parada del Clúster de Particionado de Datos:
 * Detener el clúster de particionado de datos
 */
sh.stopBalancer()

/**
 * Paso 8 - Conocer el Listado de Shards Activos:
 * Obtener el listado de shards activos
 */
sh.status()


