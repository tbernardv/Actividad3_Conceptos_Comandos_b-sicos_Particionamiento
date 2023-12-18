# REQUERIMIENTOS TORNEO MMA IBERO

## Descripción:
Se realiza un modelo básico de una base de datos en MongoDB de un torneo deportivo de mma, donde se tienen deportistas (peleadores), entrenadores, arbitros, encuentros deportivos y resultados.

Deportistas:

Edad Mínima:
Los deportistas deben tener al menos 18 años para participar en el torneo. Esto garantiza que los participantes sean adultos y cumplan con los requisitos legales para competir en eventos deportivos.

Categoría de Peso:
Cada deportista pertenece a una categoría de peso específica. Esto asegura enfrentamientos equitativos y promueve la seguridad de los participantes al evitar enfrentamientos desiguales en términos de tamaño y peso.

Historial de Desempeño:
Se debe mantener un registro detallado del historial de cada deportista, incluyendo victorias, derrotas y empates. Esto no solo proporciona información valiosa para el torneo actual, sino que también contribuye al seguimiento y desarrollo a lo largo de la carrera del deportista.


Entrenadores:

Especialidad:
Cada entrenador tiene una especialidad específica, como Jiu-Jitsu, Boxeo, Muay Thai, etc. Esta especialidad destaca el enfoque principal de entrenamiento del coach y puede influir en las estrategias adoptadas por los deportistas asociados a ese entrenador.

Asociación a un Equipo:
Cada entrenador está asociado a un equipo en particular. Esta asociación puede afectar la dinámica de entrenamiento y promover la cohesión entre los deportistas y el entrenador.


Árbitros:

Experiencia Mínima:
Los árbitros deben tener al menos 3 años de experiencia en arbitraje. Esta experiencia garantiza que los árbitros estén familiarizados con las reglas, normas y situaciones que puedan surgir durante los encuentros, contribuyendo así a un arbitraje justo y competente.

Asignación a Encuentros:
Cada encuentro deportivo debe tener asignado un árbitro. Esta asignación se realiza para garantizar que haya un control imparcial y efectivo durante el desarrollo de los combates.


Encuentros Deportivos:

Detalles del Encuentro:
Cada encuentro deportivo debe tener información detallada, incluyendo la fecha y el lugar donde se llevará a cabo. Esto es esencial para la organización y planificación logística del torneo.
Lista de Competidores:

Se debe mantener una lista de los competidores involucrados en cada encuentro. Esto facilita la preparación y ejecución eficiente de los combates.


Resultados:

Registro del Ganador:
Se debe registrar el nombre del deportista ganador de cada encuentro. Esto es fundamental para determinar el avance en las rondas del torneo.
Método de Victoria:

Se debe registrar el método de victoria utilizado por el ganador, ya sea por decisión, sumisión, nocaut, entre otros. Esto proporciona información sobre las habilidades y estrategias efectivas de los deportistas.
Ronda y Tiempo:

Además del resultado, se deben registrar la ronda en la que se produjo la victoria y el tiempo transcurrido. Esto ofrece detalles precisos sobre el desarrollo del combate.

## Instalación
Ejecutar archivo: actividad1_tyson_bernard.js en la interfaz de comandos (CLI) Mongo shell o en las herramientas de gestion de bases de datos NoSQL MongoDB Compass y/o Studio 3T.

## Licencia
MIT