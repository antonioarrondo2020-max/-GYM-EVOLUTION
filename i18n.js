(()=> {
"use strict";
const labels = {
"es":{},
"en":{
"Inicio":"Home","Rutina":"Workout","Nutrición":"Nutrition","Progreso":"Progress","Perfil":"Profile","Tu evolución empieza aquí":"Your evolution starts here","Tu misión de hoy":"Today's mission","Abrir MODO SUPERVIVENCIA":"Open SURVIVAL MODE","Plan semanal · 4 días":"Weekly plan · 4 days","Regla de progresión":"Progression rule","Mi rutina":"My workout","Día":"Day","Fase":"Phase","Vuelta · 2 series":"Return · 2 sets","Normal · 3 series":"Normal · 3 sets","Vuelta progresiva: 2 series y RIR 3–4.":"Gradual return: 2 sets and RIR 3–4.","Sesión de entrenamiento":"Training session","Sesión sin iniciar":"Session not started","Iniciar sesión":"Start session","Finalizar y guardar":"Finish and save","Nutrición Evolution":"Nutrition Evolution","Configura tus comidas":"Set up your meals","Elige cuántas comidas quieres repartir durante el día. Puedes cambiarlo cuando quieras.":"Choose how many meals you want throughout the day. You can change this at any time.","Comidas al día":"Meals per day","3 comidas":"3 meals","4 comidas":"4 meals","5 comidas":"5 meals","Guardar alimentación":"Save meal plan","Calculadora de nutrición":"Nutrition calculator","Fórmula fisiológica":"Physiological formula","Masculina":"Male","Femenina":"Female","Actividad habitual":"Usual activity","Muy baja":"Very low","Ligera (1–3 días)":"Light (1–3 days)","Moderada (3–5 días)":"Moderate (3–5 days)","Alta (6–7 días)":"High (6–7 days)","Calcular mis objetivos":"Calculate my targets","Guía sencilla":"Simple guide","Menú orientativo y lista de compra":"Suggested menu and shopping list","Lista de compra del día":"Daily shopping list","Copiar lista de compra":"Copy shopping list","EVO AI COMMANDER":"EVO AI COMMANDER","VOZ DE COMANDANTE":"COMMANDER VOICE","MODO SUPERVIVENCIA":"SURVIVAL MODE","Disciplina. Constancia. Evolución.":"Discipline. Consistency. Evolution.","Escuchar mensaje":"Play message","Silenciar":"Mute","Reto diario":"Daily challenge","Reto semanal":"Weekly challenge","Generar nuevos retos":"Generate new challenges","Órdenes del comandante":"Commander's orders","¿Qué necesitas?":"What do you need?","Motivación para entrenar":"Motivation to train","Estoy cansado":"I'm tired","Cómo progresar":"How to progress","Consejo de alimentación":"Nutrition advice","Dar orden":"Give order","Registrar peso corporal":"Record body weight","Peso de hoy (kg)":"Today's weight (kg)","Guardar peso":"Save weight","Medidas corporales":"Body measurements","Registra las medidas siempre en condiciones parecidas, sin apretar la cinta.":"Take measurements under similar conditions each time, without tightening the tape.","Cintura (cm)":"Waist (cm)","Pecho (cm)":"Chest (cm)","Brazo (cm)":"Arm (cm)","Muslo (cm)":"Thigh (cm)","Guardar medidas":"Save measurements","Sesiones completadas":"Completed sessions","Historial de ejercicios":"Exercise history","Crear copia de seguridad":"Create backup","Restaurar copia":"Restore backup","Borrar historial":"Clear history","Mi perfil":"My profile","Nombre":"Name","Edad":"Age","Altura (cm)":"Height (cm)","Peso actual (kg)":"Current weight (kg)","Peso objetivo (kg)":"Target weight (kg)","Nivel":"Level","Principiante":"Beginner","Intermedio":"Intermediate","Avanzado":"Advanced","Objetivo":"Goal","Ganar masa muscular":"Build muscle","Definir y ganar músculo":"Get leaner and build muscle","Mejorar fuerza":"Improve strength","Guardar perfil":"Save profile","Privacidad y datos":"Privacy and data","Peso actual":"Current weight","Objetivo":"Target","Desayuno":"Breakfast","Comida":"Meal","Cena":"Dinner","Media mañana":"Mid-morning snack","Merienda":"Afternoon snack","Pecho":"Chest","Espalda":"Back","Hombros":"Shoulders","Bíceps":"Biceps","Tríceps":"Triceps","Cuádriceps/glúteo":"Quads/glutes","Isquios":"Hamstrings","Gemelos":"Calves","Abdomen":"Abs","Máquina":"Machine","Polea":"Cable","Peso corporal":"Bodyweight","Carga kg (0 si peso corporal)":"Weight kg (0 for bodyweight)","Reps por serie":"Reps per set","Segundos por serie":"Seconds per set","Guardar ejercicio":"Save exercise","RIR final":"Final RIR","Totales del menú":"Menu totals","Proteínas":"Protein","Grasas":"Fat","Hidratos":"Carbs","Energía":"Energy","Mantenimiento":"Maintenance","Objetivo orientativo":"Suggested target","Lista copiada.":"List copied.","Calcula primero tus objetivos para generar un menú con cantidades adaptadas.":"Calculate your targets first to generate a menu with adjusted quantities.","La lista de compra aparecerá después de calcular tus objetivos.":"The shopping list will appear after you calculate your targets.","Calcula tus objetivos para ver el reparto por comida.":"Calculate your targets to see the meal breakdown.","Reparto real del menú por comida":"Actual menu breakdown by meal","Aún no hay registros.":"No records yet.","Todavía no hay pesos registrados.":"No weights recorded yet.","Perfil guardado correctamente. Nutrición actualizada.":"Profile saved. Nutrition updated.","Guardar alimentación":"Save meal plan","Comandante, tu misión empieza hoy. No necesitas hacerlo perfecto; necesitas cumplir el siguiente paso.":"Commander, your mission starts today. You don't need to be perfect; you need to take the next step.",
"Press de pecho en máquina":"Machine chest press",
"Jalón al pecho":"Lat pulldown",
"Remo sentado":"Seated row",
"Elevación lateral":"Lateral raise",
"Curl de bíceps":"Biceps curl",
"Extensión de tríceps":"Triceps extension",
"Prensa de piernas":"Leg press",
"Curl femoral sentado":"Seated leg curl",
"Extensión de cuádriceps":"Leg extension",
"Gemelos en prensa":"Calf press",
"Crunch abdominal":"Abdominal crunch",
"Press inclinado en máquina":"Incline machine press",
"Remo con apoyo de pecho":"Chest-supported row",
"Jalón agarre neutro":"Neutral-grip pulldown",
"Press de hombros":"Shoulder press",
"Curl de bíceps en polea":"Cable biceps curl",
"Extensión de tríceps sobre cabeza":"Overhead triceps extension",
"Sentadilla hack o prensa":"Hack squat or leg press",
"Curl femoral tumbado":"Lying leg curl",
"Abductores":"Hip abduction",
"Gemelos sentado":"Seated calf raise",
"Plancha":"Plank",
"Sesión en curso":"Session in progress",
"Ejemplo práctico de un día con cantidades aproximadas.":"A practical one-day example with approximate quantities.",
"Las cantidades y macros son aproximados y pueden variar por marca y preparación.":"Amounts and macros are approximate and may vary by brand and preparation.",
"Torso/pierna, con máquinas como base y sin press banca con barra. Ajusta los días a tus turnos de trabajo.":"Upper/lower split, mainly using machines and no barbell bench press. Adjust the days to your work shifts.",
"Primeras 2 semanas de vuelta: 2 series por ejercicio, técnica controlada y 3–4 repeticiones en reserva. No busques récords todavía.":"First 2 weeks back: 2 sets per exercise, controlled technique and 3–4 reps in reserve. Don't chase records yet.",
"Cuando completes todas las series en el rango alto, con técnica limpia y al menos 2 repeticiones en reserva, prueba el incremento mínimo de la máquina en la siguiente sesión.":"When you complete all sets at the top of the rep range with clean technique and at least 2 reps in reserve, try the smallest machine weight increase next session.",
"Seleccionar":"Select",
"Completa edad, altura y peso en tu perfil para calcular una estimación.":"Enter your age, height and weight in your profile to calculate an estimate.",
"Incluye una fuente de proteína en cada comida, hidratos suficientes para entrenar y frutas/verduras a diario. Ajusta las cantidades según evolución del peso, hambre y rendimiento.":"Include a protein source in every meal, enough carbohydrates to train, and fruit and vegetables daily. Adjust portions based on weight, hunger and performance.",
"La calculadora de arriba estima tus calorías y macronutrientes. Usa el resultado como punto de partida y revisa tu evolución durante 2–3 semanas antes de ajustar. Esta guía es orientativa y no sustituye una valoración profesional.":"The calculator above estimates your calories and macronutrients. Use the result as a starting point and review your progress for 2–3 weeks before adjusting. This guide is general information and does not replace professional advice.",
"Ejemplo práctico de un día con cantidades aproximadas. Puedes cambiar alimentos por las alternativas indicadas. Ajusta las raciones a tus objetivos y a tu hambre.":"A practical one-day example with approximate quantities. You can swap foods for the suggested alternatives. Adjust portions to your goals and appetite.",
"Calcula tus objetivos para ver el reparto por comida.":"Calculate your targets to see the breakdown by meal.",
"Alternativas: pollo ↔ pavo ↔ tofu; arroz ↔ patata ↔ pasta; yogur skyr ↔ queso fresco batido; fruta según temporada. La crema de arroz (50–60 g) puede sustituir a la avena o a parte del arroz, no hace falta añadirla además.":"Alternatives: chicken ↔ turkey ↔ tofu; rice ↔ potato ↔ pasta; skyr yogurt ↔ quark; seasonal fruit. Cream of rice (50–60 g) can replace oats or some of the rice; you don't need to add it on top.",
"La voz utiliza las voces disponibles en tu dispositivo. La selección masculina depende de las voces instaladas.":"Voice uses the voices available on your device. Male voice selection depends on the installed voices.",
"Dificultad automática: los retos se ajustan de forma orientativa al nivel de tu perfil.":"Automatic difficulty: challenges are adapted approximately to your profile level.",
"Asistente local de demostración. La conexión a un motor de IA real se integrará en una fase posterior.":"Local demo assistant. Connection to a real AI engine will be added in a later phase.",
"Registra las medidas siempre en condiciones parecidas, sin apretar la cinta.":"Take measurements under similar conditions each time, without tightening the tape.",
"Guarda un archivo de respaldo para no perder perfil, rutinas registradas, medidas, peso y retos. La restauración reemplaza los datos actuales de esta app.":"Save a backup file to protect your profile, logged workouts, measurements, weight and challenges. Restoring a backup replaces this app's current data.",
"Esta versión guarda perfil, comidas e historial en este dispositivo. Todavía no hay cuentas ni sincronización en la nube.":"This version stores your profile, meals and history on this device. Accounts and cloud sync are not available yet.",
"VOZ DE COMANDANTE":"COMMANDER VOICE",
"Comandante, tu misión empieza hoy. No necesitas hacerlo perfecto; necesitas cumplir el siguiente paso.":"Commander, your mission starts today. You don't need to be perfect; you need to take the next step.",
"▶ Escuchar mensaje":"▶ Play message",
"■ Silenciar":"■ Mute",
"Tu distribución de":"Your",
"comidas está guardada.":"meal plan is saved.",
"Fase normal: 3 series y RIR 1–3.":"Normal phase: 3 sets and RIR 1–3.",
"Has completado el rango alto con margen suficiente. Puedes probar el incremento mínimo la próxima vez.":"You've completed the top of the rep range with enough reserve. You can try the smallest increase next time.",
"Mantén la carga y busca mejorar poco a poco, sin perder técnica.":"Keep the same weight and aim to improve gradually without losing technique.",
"Registro actualizado en esta sesión.":"Entry updated in this session.",
"Guardado en esta sesión.":"Saved in this session.",
"Aún no has registrado ejercicios.":"You haven't logged any exercises yet.",
"Aún no hay sesiones guardadas.":"No sessions saved yet.",
"La estimación guardada necesita actualizarse. Comprueba tu perfil y los ajustes de nutrición.":"The saved estimate needs updating. Check your profile and nutrition settings.",
"Completa edad, altura y peso en Mi perfil y selecciona la fórmula fisiológica para calcular una estimación.":"Enter your age, height and weight in My Profile and select the physiological formula to calculate an estimate.",
"No se ha podido calcular. Revisa edad, altura y peso en Mi perfil; deben ser valores válidos.":"Could not calculate. Check that age, height and weight in My Profile are valid.",
"Revisa la medida de":"Check the measurement for",
"Introduce al menos una medida.":"Enter at least one measurement.",
"Medidas guardadas.":"Measurements saved.",
"Misión semanal cumplida":"Weekly mission completed",
" de 3 sesiones completadas":" of 3 sessions completed",
"Marcar activación como completada":"Mark activation as complete",
"Pendiente de completar":"Not completed yet",
"Misión cumplida":"Mission completed",
"Tu dispositivo no ofrece lectura de voz en este navegador.":"Your device does not support text-to-speech in this browser.",
"Sesión guardada sin ejercicios registrados; no contará para la misión semanal.":"Session saved without logged exercises; it won't count towards the weekly mission.",
"Perfil guardado correctamente. Nutrición actualizada.":"Profile saved. Nutrition updated.",
"Revisa edad, altura y peso en Mi perfil":"Check age, height and weight in My Profile",
"Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Review portions and use substitutions if needed.",
"Las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Amounts are approximate and macros may differ; review the menu before using it.",
"Idioma / Language":"Language",
"Selecciona el idioma de la aplicación":"Choose the app language",
"El cambio se guarda en este dispositivo. Puedes volver al español cuando quieras.":"Your choice is saved on this device. You can switch back to Spanish at any time."
},
"fr":{
"Inicio":"Accueil","Rutina":"Entraînement","Nutrición":"Nutrition","Progreso":"Progrès","Perfil":"Profil","Tu evolución empieza aquí":"Votre évolution commence ici","Tu misión de hoy":"Votre mission du jour","Abrir MODO SUPERVIVENCIA":"Ouvrir le MODE SURVIE","Plan semanal · 4 días":"Programme hebdomadaire · 4 jours","Regla de progresión":"Règle de progression","Mi rutina":"Mon entraînement","Día":"Jour","Fase":"Phase","Vuelta · 2 series":"Reprise · 2 séries","Normal · 3 series":"Normal · 3 séries","Vuelta progresiva: 2 series y RIR 3–4.":"Reprise progressive : 2 séries et RIR 3–4.","Sesión de entrenamiento":"Séance d'entraînement","Sesión sin iniciar":"Séance non commencée","Iniciar sesión":"Commencer la séance","Finalizar y guardar":"Terminer et enregistrer","Nutrición Evolution":"Nutrition Evolution","Configura tus comidas":"Configurez vos repas","Elige cuántas comidas quieres repartir durante el día. Puedes cambiarlo cuando quieras.":"Choisissez le nombre de repas par jour. Vous pouvez le modifier à tout moment.","Comidas al día":"Repas par jour","3 comidas":"3 repas","4 comidas":"4 repas","5 comidas":"5 repas","Guardar alimentación":"Enregistrer le plan alimentaire","Calculadora de nutrición":"Calculateur nutritionnel","Fórmula fisiológica":"Formule physiologique","Masculina":"Masculin","Femenina":"Féminin","Actividad habitual":"Activité habituelle","Muy baja":"Très faible","Ligera (1–3 días)":"Légère (1–3 jours)","Moderada (3–5 días)":"Modérée (3–5 jours)","Alta (6–7 días)":"Élevée (6–7 jours)","Calcular mis objetivos":"Calculer mes objectifs","Guía sencilla":"Guide simple","Menú orientativo y lista de compra":"Menu indicatif et liste de courses","Lista de compra del día":"Liste de courses du jour","Copiar lista de compra":"Copier la liste de courses","EVO AI COMMANDER":"EVO AI COMMANDER","VOZ DE COMANDANTE":"VOIX DU COMMANDANT","MODO SUPERVIVENCIA":"MODE SURVIE","Disciplina. Constancia. Evolución.":"Discipline. Régularité. Évolution.","Escuchar mensaje":"Écouter le message","Silenciar":"Couper le son","Reto diario":"Défi quotidien","Reto semanal":"Défi hebdomadaire","Generar nuevos retos":"Générer de nouveaux défis","Órdenes del comandante":"Ordres du commandant","¿Qué necesitas?":"De quoi avez-vous besoin ?","Motivación para entrenar":"Motivation pour s'entraîner","Estoy cansado":"Je suis fatigué","Cómo progresar":"Comment progresser","Consejo de alimentación":"Conseil nutritionnel","Dar orden":"Donner un ordre","Registrar peso corporal":"Enregistrer le poids corporel","Peso de hoy (kg)":"Poids du jour (kg)","Guardar peso":"Enregistrer le poids","Medidas corporales":"Mensurations","Cintura (cm)":"Tour de taille (cm)","Pecho (cm)":"Poitrine (cm)","Brazo (cm)":"Bras (cm)","Muslo (cm)":"Cuisse (cm)","Guardar medidas":"Enregistrer les mensurations","Sesiones completadas":"Séances terminées","Historial de ejercicios":"Historique des exercices","Crear copia de seguridad":"Créer une sauvegarde","Restaurar copia":"Restaurer une sauvegarde","Borrar historial":"Effacer l'historique","Mi perfil":"Mon profil","Nombre":"Nom","Edad":"Âge","Altura (cm)":"Taille (cm)","Peso actual (kg)":"Poids actuel (kg)","Peso objetivo (kg)":"Poids cible (kg)","Nivel":"Niveau","Principiante":"Débutant","Intermedio":"Intermédiaire","Avanzado":"Avancé","Objetivo":"Objectif","Ganar masa muscular":"Prendre de la masse musculaire","Definir y ganar músculo":"S'affiner et gagner du muscle","Mejorar fuerza":"Améliorer la force","Guardar perfil":"Enregistrer le profil","Privacidad y datos":"Confidentialité et données","Desayuno":"Petit-déjeuner","Comida":"Déjeuner","Cena":"Dîner","Media mañana":"Collation du matin","Merienda":"Goûter","Pecho":"Pectoraux","Espalda":"Dos","Hombros":"Épaules","Bíceps":"Biceps","Tríceps":"Triceps","Máquina":"Machine","Polea":"Poulie","Guardar ejercicio":"Enregistrer l'exercice","Totales del menú":"Totaux du menu","Proteínas":"Protéines","Grasas":"Lipides","Hidratos":"Glucides","Energía":"Énergie","Mantenimiento":"Maintien","Objetivo orientativo":"Objectif indicatif","Lista copiada.":"Liste copiée.","Aún no hay registros.":"Aucun enregistrement pour le moment.","Todavía no hay pesos registrados.":"Aucun poids enregistré pour le moment.",
"Press de pecho en máquina":"Presse pectorale à la machine",
"Jalón al pecho":"Tirage vertical",
"Remo sentado":"Rowing assis",
"Elevación lateral":"Élévation latérale",
"Curl de bíceps":"Curl biceps",
"Extensión de tríceps":"Extension triceps",
"Prensa de piernas":"Presse à jambes",
"Curl femoral sentado":"Leg curl assis",
"Extensión de cuádriceps":"Extension des quadriceps",
"Gemelos en prensa":"Mollets à la presse",
"Crunch abdominal":"Crunch abdominal",
"Press inclinado en máquina":"Presse inclinée à la machine",
"Remo con apoyo de pecho":"Rowing avec appui poitrine",
"Jalón agarre neutro":"Tirage prise neutre",
"Press de hombros":"Développé épaules",
"Curl de bíceps en polea":"Curl biceps à la poulie",
"Extensión de tríceps sobre cabeza":"Extension triceps au-dessus de la tête",
"Sentadilla hack o prensa":"Hack squat ou presse",
"Curl femoral tumbado":"Leg curl allongé",
"Abductores":"Abducteurs",
"Gemelos sentado":"Mollets assis",
"Plancha":"Gainage",
"Sesión en curso":"Séance en cours",
"Torso/pierna, con máquinas como base y sin press banca con barra. Ajusta los días a tus turnos de trabajo.":"Haut/bas du corps, principalement sur machines et sans développé couché à la barre. Adaptez les jours à vos horaires de travail.",
"Primeras 2 semanas de vuelta: 2 series por ejercicio, técnica controlada y 3–4 repeticiones en reserva. No busques récords todavía.":"Les 2 premières semaines de reprise : 2 séries par exercice, technique contrôlée et 3–4 répétitions en réserve. Ne cherchez pas encore de records.",
"Cuando completes todas las series en el rango alto, con técnica limpia y al menos 2 repeticiones en reserva, prueba el incremento mínimo de la máquina en la siguiente sesión.":"Lorsque vous terminez toutes les séries dans le haut de la fourchette avec une technique correcte et au moins 2 répétitions en réserve, essayez la plus petite augmentation à la prochaine séance.",
"Seleccionar":"Sélectionner",
"Completa edad, altura y peso en tu perfil para calcular una estimación.":"Saisissez votre âge, votre taille et votre poids dans votre profil pour obtenir une estimation.",
"Incluye una fuente de proteína en cada comida, hidratos suficientes para entrenar y frutas/verduras a diario. Ajusta las cantidades según evolución del peso, hambre y rendimiento.":"Incluez une source de protéines à chaque repas, suffisamment de glucides pour l'entraînement et des fruits et légumes chaque jour. Ajustez les portions selon le poids, la faim et les performances.",
"La calculadora de arriba estima tus calorías y macronutrientes. Usa el resultado como punto de partida y revisa tu evolución durante 2–3 semanas antes de ajustar. Esta guía es orientativa y no sustituye una valoración profesional.":"Le calculateur ci-dessus estime vos calories et macronutriments. Utilisez le résultat comme point de départ et observez votre évolution pendant 2 à 3 semaines avant d'ajuster. Ce guide est indicatif et ne remplace pas un avis professionnel.",
"Ejemplo práctico de un día con cantidades aproximadas. Puedes cambiar alimentos por las alternativas indicadas. Ajusta las raciones a tus objetivos y a tu hambre.":"Exemple pratique d'une journée avec des quantités approximatives. Vous pouvez remplacer les aliments par les alternatives proposées. Adaptez les portions à vos objectifs et à votre faim.",
"Calcula tus objetivos para ver el reparto por comida.":"Calculez vos objectifs pour voir la répartition par repas.",
"Alternativas: pollo ↔ pavo ↔ tofu; arroz ↔ patata ↔ pasta; yogur skyr ↔ queso fresco batido; fruta según temporada. La crema de arroz (50–60 g) puede sustituir a la avena o a parte del arroz, no hace falta añadirla además.":"Alternatives : poulet ↔ dinde ↔ tofu ; riz ↔ pomme de terre ↔ pâtes ; yaourt skyr ↔ fromage frais ; fruits de saison. La crème de riz (50–60 g) peut remplacer les flocons d'avoine ou une partie du riz.",
"La voz utiliza las voces disponibles en tu dispositivo. La selección masculina depende de las voces instaladas.":"La voix utilise les voix disponibles sur votre appareil. Le choix d'une voix masculine dépend des voix installées.",
"Dificultad automática: los retos se ajustan de forma orientativa al nivel de tu perfil.":"Difficulté automatique : les défis sont adaptés à titre indicatif au niveau de votre profil.",
"Asistente local de demostración. La conexión a un motor de IA real se integrará en una fase posterior.":"Assistant local de démonstration. La connexion à un véritable moteur d'IA sera ajoutée ultérieurement.",
"Registra las medidas siempre en condiciones parecidas, sin apretar la cinta.":"Prenez vos mensurations dans des conditions similaires, sans serrer le mètre.",
"Guarda un archivo de respaldo para no perder perfil, rutinas registradas, medidas, peso y retos. La restauración reemplaza los datos actuales de esta app.":"Enregistrez une sauvegarde pour protéger votre profil, vos séances, mensurations, poids et défis. La restauration remplace les données actuelles de l'application.",
"Esta versión guarda perfil, comidas e historial en este dispositivo. Todavía no hay cuentas ni sincronización en la nube.":"Cette version stocke votre profil, vos repas et votre historique sur cet appareil. Les comptes et la synchronisation cloud ne sont pas encore disponibles.",
"▶ Escuchar mensaje":"▶ Écouter le message",
"■ Silenciar":"■ Couper le son",
"Fase normal: 3 series y RIR 1–3.":"Phase normale : 3 séries et RIR 1–3.",
"Has completado el rango alto con margen suficiente. Puedes probar el incremento mínimo la próxima vez.":"Vous avez atteint le haut de la fourchette avec une marge suffisante. Essayez la plus petite augmentation la prochaine fois.",
"Mantén la carga y busca mejorar poco a poco, sin perder técnica.":"Gardez la charge et progressez progressivement sans perdre la technique.",
"Registro actualizado en esta sesión.":"Entrée mise à jour dans cette séance.",
"Guardado en esta sesión.":"Enregistré dans cette séance.",
"Aún no has registrado ejercicios.":"Vous n'avez pas encore enregistré d'exercices.",
"Aún no hay sesiones guardadas.":"Aucune séance enregistrée.",
"Revisa la medida de":"Vérifiez la mesure de",
"Introduce al menos una medida.":"Saisissez au moins une mesure.",
"Medidas guardadas.":"Mensurations enregistrées.",
"Misión semanal cumplida":"Mission hebdomadaire accomplie",
"Misión cumplida":"Mission accomplie",
"Pendiente de completar":"À accomplir",
"Tu dispositivo no ofrece lectura de voz en este navegador.":"Votre appareil ne prend pas en charge la lecture vocale dans ce navigateur.",
"Perfil guardado correctamente. Nutrición actualizada.":"Profil enregistré. Nutrition mise à jour.",
"Idioma / Language":"Langue",
"Selecciona el idioma de la aplicación":"Choisissez la langue de l'application",
"El cambio se guarda en este dispositivo. Puedes volver al español cuando quieras.":"Votre choix est enregistré sur cet appareil. Vous pouvez revenir à l'espagnol à tout moment."
},
"de":{
"Inicio":"Start","Rutina":"Training","Nutrición":"Ernährung","Progreso":"Fortschritt","Perfil":"Profil","Tu evolución empieza aquí":"Deine Entwicklung beginnt hier","Tu misión de hoy":"Deine Mission heute","Abrir MODO SUPERVIVENCIA":"ÜBERLEBENSMODUS öffnen","Plan semanal · 4 días":"Wochenplan · 4 Tage","Regla de progresión":"Progressionsregel","Mi rutina":"Mein Trainingsplan","Día":"Tag","Fase":"Phase","Vuelta · 2 series":"Wiedereinstieg · 2 Sätze","Normal · 3 series":"Normal · 3 Sätze","Vuelta progresiva: 2 series y RIR 3–4.":"Schrittweiser Wiedereinstieg: 2 Sätze und RIR 3–4.","Sesión de entrenamiento":"Trainingseinheit","Sesión sin iniciar":"Einheit nicht gestartet","Iniciar sesión":"Einheit starten","Finalizar y guardar":"Beenden und speichern","Nutrición Evolution":"Ernährung Evolution","Configura tus comidas":"Mahlzeiten einstellen","Elige cuántas comidas quieres repartir durante el día. Puedes cambiarlo cuando quieras.":"Wähle, auf wie viele Mahlzeiten du den Tag verteilen möchtest. Du kannst das jederzeit ändern.","Comidas al día":"Mahlzeiten pro Tag","3 comidas":"3 Mahlzeiten","4 comidas":"4 Mahlzeiten","5 comidas":"5 Mahlzeiten","Guardar alimentación":"Ernährung speichern","Calculadora de nutrición":"Ernährungsrechner","Fórmula fisiológica":"Physiologische Formel","Masculina":"Männlich","Femenina":"Weiblich","Actividad habitual":"Übliche Aktivität","Muy baja":"Sehr gering","Ligera (1–3 días)":"Leicht (1–3 Tage)","Moderada (3–5 días)":"Mittel (3–5 Tage)","Alta (6–7 días)":"Hoch (6–7 Tage)","Calcular mis objetivos":"Meine Ziele berechnen","Guía sencilla":"Einfacher Leitfaden","Menú orientativo y lista de compra":"Beispielmenü und Einkaufsliste","Lista de compra del día":"Einkaufsliste für heute","Copiar lista de compra":"Einkaufsliste kopieren","EVO AI COMMANDER":"EVO AI COMMANDER","VOZ DE COMANDANTE":"KOMMANDANTENSTIMME","MODO SUPERVIVENCIA":"ÜBERLEBENSMODUS","Disciplina. Constancia. Evolución.":"Disziplin. Beständigkeit. Entwicklung.","Escuchar mensaje":"Nachricht anhören","Silenciar":"Stummschalten","Reto diario":"Tägliche Herausforderung","Reto semanal":"Wöchentliche Herausforderung","Generar nuevos retos":"Neue Herausforderungen erstellen","Órdenes del comandante":"Befehle des Kommandanten","¿Qué necesitas?":"Was brauchst du?","Motivación para entrenar":"Motivation zum Training","Estoy cansado":"Ich bin müde","Cómo progresar":"Wie du Fortschritte machst","Consejo de alimentación":"Ernährungstipp","Dar orden":"Befehl geben","Registrar peso corporal":"Körpergewicht erfassen","Peso de hoy (kg)":"Heutiges Gewicht (kg)","Guardar peso":"Gewicht speichern","Medidas corporales":"Körpermaße","Cintura (cm)":"Taille (cm)","Pecho (cm)":"Brust (cm)","Brazo (cm)":"Arm (cm)","Muslo (cm)":"Oberschenkel (cm)","Guardar medidas":"Maße speichern","Sesiones completadas":"Abgeschlossene Einheiten","Historial de ejercicios":"Übungsverlauf","Crear copia de seguridad":"Sicherung erstellen","Restaurar copia":"Sicherung wiederherstellen","Borrar historial":"Verlauf löschen","Mi perfil":"Mein Profil","Nombre":"Name","Edad":"Alter","Altura (cm)":"Größe (cm)","Peso actual (kg)":"Aktuelles Gewicht (kg)","Peso objetivo (kg)":"Zielgewicht (kg)","Nivel":"Niveau","Principiante":"Anfänger","Intermedio":"Mittelstufe","Avanzado":"Fortgeschritten","Objetivo":"Ziel","Ganar masa muscular":"Muskelmasse aufbauen","Definir y ganar músculo":"Muskeln aufbauen und definieren","Mejorar fuerza":"Kraft verbessern","Guardar perfil":"Profil speichern","Privacidad y datos":"Datenschutz und Daten","Desayuno":"Frühstück","Comida":"Mittagessen","Cena":"Abendessen","Media mañana":"Vormittagssnack","Merienda":"Nachmittagssnack","Pecho":"Brust","Espalda":"Rücken","Hombros":"Schultern","Bíceps":"Bizeps","Tríceps":"Trizeps","Máquina":"Maschine","Polea":"Kabelzug","Guardar ejercicio":"Übung speichern","Totales del menú":"Menü-Gesamtwerte","Proteínas":"Eiweiß","Grasas":"Fett","Hidratos":"Kohlenhydrate","Energía":"Energie","Mantenimiento":"Erhaltung","Objetivo orientativo":"Richtwert","Lista copiada.":"Liste kopiert.","Aún no hay registros.":"Noch keine Einträge.","Todavía no hay pesos registrados.":"Noch keine Gewichte gespeichert.",
"Press de pecho en máquina":"Brustpresse an der Maschine",
"Jalón al pecho":"Latzug",
"Remo sentado":"Sitzendes Rudern",
"Elevación lateral":"Seitheben",
"Curl de bíceps":"Bizepscurls",
"Extensión de tríceps":"Trizepsdrücken",
"Prensa de piernas":"Beinpresse",
"Curl femoral sentado":"Beinbeuger sitzend",
"Extensión de cuádriceps":"Beinstrecker",
"Gemelos en prensa":"Wadenpresse",
"Crunch abdominal":"Bauch-Crunch",
"Press inclinado en máquina":"Schrägbank-Brustpresse",
"Remo con apoyo de pecho":"Brustgestütztes Rudern",
"Jalón agarre neutro":"Neutraler Latzug",
"Press de hombros":"Schulterdrücken",
"Curl de bíceps en polea":"Bizepscurls am Kabel",
"Extensión de tríceps sobre cabeza":"Überkopf-Trizepsstrecken",
"Sentadilla hack o prensa":"Hackenschmidt-Kniebeuge oder Beinpresse",
"Curl femoral tumbado":"Beinbeuger liegend",
"Abductores":"Abduktoren",
"Gemelos sentado":"Wadenheben sitzend",
"Plancha":"Unterarmstütz",
"Sesión en curso":"Training läuft",
"Torso/pierna, con máquinas como base y sin press banca con barra. Ajusta los días a tus turnos de trabajo.":"Ober-/Unterkörper-Split, überwiegend an Maschinen und ohne Langhantel-Bankdrücken. Passe die Tage an deine Arbeitsschichten an.",
"Primeras 2 semanas de vuelta: 2 series por ejercicio, técnica controlada y 3–4 repeticiones en reserva. No busques récords todavía.":"Die ersten 2 Wochen nach der Pause: 2 Sätze pro Übung, kontrollierte Technik und 3–4 Wiederholungen in Reserve. Noch keine Rekorde anstreben.",
"Cuando completes todas las series en el rango alto, con técnica limpia y al menos 2 repeticiones en reserva, prueba el incremento mínimo de la máquina en la siguiente sesión.":"Wenn du alle Sätze am oberen Ende des Wiederholungsbereichs mit sauberer Technik und mindestens 2 Wiederholungen in Reserve schaffst, teste beim nächsten Training die kleinste Gewichtserhöhung.",
"Seleccionar":"Auswählen",
"Completa edad, altura y peso en tu perfil para calcular una estimación.":"Gib Alter, Größe und Gewicht in deinem Profil ein, um eine Schätzung zu berechnen.",
"Incluye una fuente de proteína en cada comida, hidratos suficientes para entrenar y frutas/verduras a diario. Ajusta las cantidades según evolución del peso, hambre y rendimiento.":"Iss zu jeder Mahlzeit eine Proteinquelle, ausreichend Kohlenhydrate fürs Training und täglich Obst und Gemüse. Passe die Mengen an Gewicht, Hunger und Leistung an.",
"La calculadora de arriba estima tus calorías y macronutrientes. Usa el resultado como punto de partida y revisa tu evolución durante 2–3 semanas antes de ajustar. Esta guía es orientativa y no sustituye una valoración profesional.":"Der Rechner oben schätzt Kalorien und Makronährstoffe. Nutze das Ergebnis als Ausgangspunkt und beobachte deine Entwicklung 2–3 Wochen, bevor du etwas anpasst. Dieser Leitfaden ersetzt keine professionelle Beratung.",
"Ejemplo práctico de un día con cantidades aproximadas. Puedes cambiar alimentos por las alternativas indicadas. Ajusta las raciones a tus objetivos y a tu hambre.":"Praktisches Tagesbeispiel mit ungefähren Mengen. Du kannst Lebensmittel durch die angegebenen Alternativen ersetzen. Passe die Portionen an deine Ziele und deinen Hunger an.",
"Calcula tus objetivos para ver el reparto por comida.":"Berechne deine Ziele, um die Verteilung pro Mahlzeit zu sehen.",
"Alternativas: pollo ↔ pavo ↔ tofu; arroz ↔ patata ↔ pasta; yogur skyr ↔ queso fresco batido; fruta según temporada. La crema de arroz (50–60 g) puede sustituir a la avena o a parte del arroz, no hace falta añadirla además.":"Alternativen: Hähnchen ↔ Pute ↔ Tofu; Reis ↔ Kartoffeln ↔ Nudeln; Skyr ↔ Quark; Obst der Saison. Reiscreme (50–60 g) kann Haferflocken oder einen Teil des Reises ersetzen.",
"La voz utiliza las voces disponibles en tu dispositivo. La selección masculina depende de las voces instaladas.":"Die Sprachausgabe nutzt die auf deinem Gerät verfügbaren Stimmen. Eine männliche Stimme hängt von den installierten Stimmen ab.",
"Dificultad automática: los retos se ajustan de forma orientativa al nivel de tu perfil.":"Automatischer Schwierigkeitsgrad: Herausforderungen orientieren sich am Niveau deines Profils.",
"Asistente local de demostración. La conexión a un motor de IA real se integrará en una fase posterior.":"Lokaler Demo-Assistent. Die Verbindung zu einer echten KI wird später integriert.",
"Registra las medidas siempre en condiciones parecidas, sin apretar la cinta.":"Miss immer unter ähnlichen Bedingungen und ziehe das Maßband nicht fest.",
"Guarda un archivo de respaldo para no perder perfil, rutinas registradas, medidas, peso y retos. La restauración reemplaza los datos actuales de esta app.":"Erstelle eine Sicherungsdatei für Profil, Trainingseinträge, Maße, Gewicht und Herausforderungen. Beim Wiederherstellen werden die aktuellen App-Daten ersetzt.",
"Esta versión guarda perfil, comidas e historial en este dispositivo. Todavía no hay cuentas ni sincronización en la nube.":"Diese Version speichert Profil, Mahlzeiten und Verlauf auf diesem Gerät. Konten und Cloud-Synchronisierung sind noch nicht verfügbar.",
"▶ Escuchar mensaje":"▶ Nachricht anhören",
"■ Silenciar":"■ Stummschalten",
"Fase normal: 3 series y RIR 1–3.":"Normale Phase: 3 Sätze und RIR 1–3.",
"Has completado el rango alto con margen suficiente. Puedes probar el incremento mínimo la próxima vez.":"Du hast den oberen Wiederholungsbereich mit genügend Reserve erreicht. Beim nächsten Mal kannst du die kleinste Erhöhung testen.",
"Mantén la carga y busca mejorar poco a poco, sin perder técnica.":"Behalte das Gewicht bei und verbessere dich schrittweise mit sauberer Technik.",
"Registro actualizado en esta sesión.":"Eintrag in dieser Einheit aktualisiert.",
"Guardado en esta sesión.":"In dieser Einheit gespeichert.",
"Aún no has registrado ejercicios.":"Du hast noch keine Übungen eingetragen.",
"Aún no hay sesiones guardadas.":"Noch keine Einheiten gespeichert.",
"Revisa la medida de":"Prüfe das Maß für",
"Introduce al menos una medida.":"Gib mindestens ein Maß ein.",
"Medidas guardadas.":"Maße gespeichert.",
"Misión semanal cumplida":"Wochenmission erfüllt",
"Misión cumplida":"Mission erfüllt",
"Pendiente de completar":"Noch offen",
"Tu dispositivo no ofrece lectura de voz en este navegador.":"Dein Gerät unterstützt in diesem Browser keine Sprachausgabe.",
"Perfil guardado correctamente. Nutrición actualizada.":"Profil gespeichert. Ernährung aktualisiert.",
"Idioma / Language":"Sprache",
"Selecciona el idioma de la aplicación":"Wähle die App-Sprache",
"El cambio se guarda en este dispositivo. Puedes volver al español cuando quieras.":"Deine Auswahl wird auf diesem Gerät gespeichert. Du kannst jederzeit zu Spanisch zurückwechseln."
},
"it":{
"Inicio":"Home","Rutina":"Allenamento","Nutrición":"Nutrizione","Progreso":"Progressi","Perfil":"Profilo","Tu evolución empieza aquí":"La tua evoluzione inizia qui","Tu misión de hoy":"La tua missione di oggi","Abrir MODO SUPERVIVENCIA":"Apri MODALITÀ SOPRAVVIVENZA","Plan semanal · 4 días":"Programma settimanale · 4 giorni","Regla de progresión":"Regola di progressione","Mi rutina":"Il mio allenamento","Día":"Giorno","Fase":"Fase","Vuelta · 2 series":"Ripresa · 2 serie","Normal · 3 series":"Normale · 3 serie","Vuelta progresiva: 2 series y RIR 3–4.":"Ripresa graduale: 2 serie e RIR 3–4.","Sesión de entrenamiento":"Sessione di allenamento","Sesión sin iniciar":"Sessione non iniziata","Iniciar sesión":"Inizia sessione","Finalizar y guardar":"Termina e salva","Nutrición Evolution":"Nutrizione Evolution","Configura tus comidas":"Configura i tuoi pasti","Elige cuántas comidas quieres repartir durante el día. Puedes cambiarlo cuando quieras.":"Scegli in quanti pasti suddividere la giornata. Puoi cambiarlo quando vuoi.","Comidas al día":"Pasti al giorno","3 comidas":"3 pasti","4 comidas":"4 pasti","5 comidas":"5 pasti","Guardar alimentación":"Salva piano alimentare","Calculadora de nutrición":"Calcolatore nutrizionale","Fórmula fisiológica":"Formula fisiologica","Masculina":"Maschile","Femenina":"Femminile","Actividad habitual":"Attività abituale","Muy baja":"Molto bassa","Ligera (1–3 días)":"Leggera (1–3 giorni)","Moderada (3–5 días)":"Moderata (3–5 giorni)","Alta (6–7 días)":"Alta (6–7 giorni)","Calcular mis objetivos":"Calcola i miei obiettivi","Guía sencilla":"Guida semplice","Menú orientativo y lista de compra":"Menu indicativo e lista della spesa","Lista de compra del día":"Lista della spesa del giorno","Copiar lista de compra":"Copia lista della spesa","EVO AI COMMANDER":"EVO AI COMMANDER","VOZ DE COMANDANTE":"VOCE DEL COMANDANTE","MODO SUPERVIVENCIA":"MODALITÀ SOPRAVVIVENZA","Disciplina. Constancia. Evolución.":"Disciplina. Costanza. Evoluzione.","Escuchar mensaje":"Ascolta il messaggio","Silenciar":"Silenzia","Reto diario":"Sfida giornaliera","Reto semanal":"Sfida settimanale","Generar nuevos retos":"Genera nuove sfide","Órdenes del comandante":"Ordini del comandante","¿Qué necesitas?":"Di cosa hai bisogno?","Motivación para entrenar":"Motivazione per allenarti","Estoy cansado":"Sono stanco","Cómo progresar":"Come migliorare","Consejo de alimentación":"Consiglio alimentare","Dar orden":"Dai ordine","Registrar peso corporal":"Registra il peso corporeo","Peso de hoy (kg)":"Peso di oggi (kg)","Guardar peso":"Salva peso","Medidas corporales":"Misure corporee","Cintura (cm)":"Vita (cm)","Pecho (cm)":"Petto (cm)","Brazo (cm)":"Braccio (cm)","Muslo (cm)":"Coscia (cm)","Guardar medidas":"Salva misure","Sesiones completadas":"Sessioni completate","Historial de ejercicios":"Cronologia esercizi","Crear copia de seguridad":"Crea backup","Restaurar copia":"Ripristina backup","Borrar historial":"Cancella cronologia","Mi perfil":"Il mio profilo","Nombre":"Nome","Edad":"Età","Altura (cm)":"Altezza (cm)","Peso actual (kg)":"Peso attuale (kg)","Peso objetivo (kg)":"Peso obiettivo (kg)","Nivel":"Livello","Principiante":"Principiante","Intermedio":"Intermedio","Avanzado":"Avanzato","Objetivo":"Obiettivo","Ganar masa muscular":"Aumentare la massa muscolare","Definir y ganar músculo":"Definire e aumentare i muscoli","Mejorar fuerza":"Migliorare la forza","Guardar perfil":"Salva profilo","Privacidad y datos":"Privacy e dati","Desayuno":"Colazione","Comida":"Pranzo","Cena":"Cena","Media mañana":"Spuntino mattutino","Merienda":"Merenda","Pecho":"Petto","Espalda":"Schiena","Hombros":"Spalle","Bíceps":"Bicipiti","Tríceps":"Tricipiti","Máquina":"Macchina","Polea":"Cavo","Guardar ejercicio":"Salva esercizio","Totales del menú":"Totali del menu","Proteínas":"Proteine","Grasas":"Grassi","Hidratos":"Carboidrati","Energía":"Energia","Mantenimiento":"Mantenimento","Objetivo orientativo":"Obiettivo indicativo","Lista copiada.":"Lista copiata.","Aún no hay registros.":"Non ci sono ancora registrazioni.","Todavía no hay pesos registrados.":"Non ci sono ancora pesi registrati.",
"Press de pecho en máquina":"Chest press alla macchina",
"Jalón al pecho":"Lat machine",
"Remo sentado":"Rematore da seduto",
"Elevación lateral":"Alzate laterali",
"Curl de bíceps":"Curl per bicipiti",
"Extensión de tríceps":"Estensione tricipiti",
"Prensa de piernas":"Leg press",
"Curl femoral sentado":"Leg curl da seduto",
"Extensión de cuádriceps":"Leg extension",
"Gemelos en prensa":"Polpacci alla pressa",
"Crunch abdominal":"Crunch addominale",
"Press inclinado en máquina":"Chest press inclinata alla macchina",
"Remo con apoyo de pecho":"Rematore con supporto al petto",
"Jalón agarre neutro":"Lat machine presa neutra",
"Press de hombros":"Shoulder press",
"Curl de bíceps en polea":"Curl bicipiti ai cavi",
"Extensión de tríceps sobre cabeza":"Estensione tricipiti sopra la testa",
"Sentadilla hack o prensa":"Hack squat o leg press",
"Curl femoral tumbado":"Leg curl sdraiato",
"Abductores":"Abduttori",
"Gemelos sentado":"Calf raise da seduto",
"Plancha":"Plank",
"Sesión en curso":"Sessione in corso",
"Torso/pierna, con máquinas como base y sin press banca con barra. Ajusta los días a tus turnos de trabajo.":"Split parte superiore/inferiore, principalmente con macchine e senza panca con bilanciere. Adatta i giorni ai tuoi turni di lavoro.",
"Primeras 2 semanas de vuelta: 2 series por ejercicio, técnica controlada y 3–4 repeticiones en reserva. No busques récords todavía.":"Prime 2 settimane di ripresa: 2 serie per esercizio, tecnica controllata e 3–4 ripetizioni in riserva. Non cercare record per ora.",
"Cuando completes todas las series en el rango alto, con técnica limpia y al menos 2 repeticiones en reserva, prueba el incremento mínimo de la máquina en la siguiente sesión.":"Quando completi tutte le serie nella parte alta dell'intervallo con tecnica corretta e almeno 2 ripetizioni in riserva, prova il minimo aumento di peso alla sessione successiva.",
"Seleccionar":"Seleziona",
"Completa edad, altura y peso en tu perfil para calcular una estimación.":"Inserisci età, altezza e peso nel profilo per calcolare una stima.",
"Incluye una fuente de proteína en cada comida, hidratos suficientes para entrenar y frutas/verduras a diario. Ajusta las cantidades según evolución del peso, hambre y rendimiento.":"Includi una fonte proteica in ogni pasto, carboidrati sufficienti per allenarti e frutta e verdura ogni giorno. Regola le porzioni in base a peso, fame e prestazioni.",
"La calculadora de arriba estima tus calorías y macronutrientes. Usa el resultado como punto de partida y revisa tu evolución durante 2–3 semanas antes de ajustar. Esta guía es orientativa y no sustituye una valoración profesional.":"Il calcolatore stima calorie e macronutrienti. Usa il risultato come punto di partenza e controlla i progressi per 2–3 settimane prima di modificare. Questa guida è indicativa e non sostituisce un parere professionale.",
"Ejemplo práctico de un día con cantidades aproximadas. Puedes cambiar alimentos por las alternativas indicadas. Ajusta las raciones a tus objetivos y a tu hambre.":"Esempio pratico di una giornata con quantità approssimative. Puoi sostituire gli alimenti con le alternative indicate. Regola le porzioni in base ai tuoi obiettivi e alla fame.",
"Calcula tus objetivos para ver el reparto por comida.":"Calcola i tuoi obiettivi per vedere la ripartizione per pasto.",
"Alternativas: pollo ↔ pavo ↔ tofu; arroz ↔ patata ↔ pasta; yogur skyr ↔ queso fresco batido; fruta según temporada. La crema de arroz (50–60 g) puede sustituir a la avena o a parte del arroz, no hace falta añadirla además.":"Alternative: pollo ↔ tacchino ↔ tofu; riso ↔ patate ↔ pasta; yogurt skyr ↔ formaggio fresco; frutta di stagione. La crema di riso (50–60 g) può sostituire l'avena o parte del riso.",
"La voz utiliza las voces disponibles en tu dispositivo. La selección masculina depende de las voces instaladas.":"La voce usa quelle disponibili sul dispositivo. La selezione di una voce maschile dipende dalle voci installate.",
"Dificultad automática: los retos se ajustan de forma orientativa al nivel de tu perfil.":"Difficoltà automatica: le sfide si adattano indicativamente al livello del tuo profilo.",
"Asistente local de demostración. La conexión a un motor de IA real se integrará en una fase posterior.":"Assistente locale dimostrativo. Il collegamento a un vero motore IA sarà integrato in una fase successiva.",
"Registra las medidas siempre en condiciones parecidas, sin apretar la cinta.":"Registra le misure sempre in condizioni simili, senza stringere il metro.",
"Guarda un archivo de respaldo para no perder perfil, rutinas registradas, medidas, peso y retos. La restauración reemplaza los datos actuales de esta app.":"Salva un backup per proteggere profilo, allenamenti, misure, peso e sfide. Il ripristino sostituisce i dati attuali dell'app.",
"Esta versión guarda perfil, comidas e historial en este dispositivo. Todavía no hay cuentas ni sincronización en la nube.":"Questa versione salva profilo, pasti e cronologia su questo dispositivo. Account e sincronizzazione cloud non sono ancora disponibili.",
"▶ Escuchar mensaje":"▶ Ascolta il messaggio",
"■ Silenciar":"■ Silenzia",
"Fase normal: 3 series y RIR 1–3.":"Fase normale: 3 serie e RIR 1–3.",
"Has completado el rango alto con margen suficiente. Puedes probar el incremento mínimo la próxima vez.":"Hai completato il range alto con margine sufficiente. La prossima volta puoi provare il minimo aumento.",
"Mantén la carga y busca mejorar poco a poco, sin perder técnica.":"Mantieni il carico e migliora gradualmente senza perdere la tecnica.",
"Registro actualizado en esta sesión.":"Voce aggiornata in questa sessione.",
"Guardado en esta sesión.":"Salvato in questa sessione.",
"Aún no has registrado ejercicios.":"Non hai ancora registrato esercizi.",
"Aún no hay sesiones guardadas.":"Non ci sono ancora sessioni salvate.",
"Revisa la medida de":"Controlla la misura di",
"Introduce al menos una medida.":"Inserisci almeno una misura.",
"Medidas guardadas.":"Misure salvate.",
"Misión semanal cumplida":"Missione settimanale completata",
"Misión cumplida":"Missione completata",
"Pendiente de completar":"Da completare",
"Tu dispositivo no ofrece lectura de voz en este navegador.":"Il dispositivo non supporta la lettura vocale in questo browser.",
"Perfil guardado correctamente. Nutrición actualizada.":"Profilo salvato. Nutrizione aggiornata.",
"Idioma / Language":"Lingua",
"Selecciona el idioma de la aplicación":"Seleziona la lingua dell'app",
"El cambio se guarda en este dispositivo. Puedes volver al español cuando quieras.":"La scelta viene salvata su questo dispositivo. Puoi tornare allo spagnolo in qualsiasi momento."
},
"pt":{
"Inicio":"Início","Rutina":"Treino","Nutrición":"Nutrição","Progreso":"Progresso","Perfil":"Perfil","Tu evolución empieza aquí":"A tua evolução começa aqui","Tu misión de hoy":"A tua missão de hoje","Abrir MODO SUPERVIVENCIA":"Abrir MODO SOBREVIVÊNCIA","Plan semanal · 4 días":"Plano semanal · 4 dias","Regla de progresión":"Regra de progressão","Mi rutina":"O meu treino","Día":"Dia","Fase":"Fase","Vuelta · 2 series":"Regresso · 2 séries","Normal · 3 series":"Normal · 3 séries","Vuelta progresiva: 2 series y RIR 3–4.":"Regresso gradual: 2 séries e RIR 3–4.","Sesión de entrenamiento":"Sessão de treino","Sesión sin iniciar":"Sessão não iniciada","Iniciar sesión":"Iniciar sessão","Finalizar y guardar":"Terminar e guardar","Nutrición Evolution":"Nutrição Evolution","Configura tus comidas":"Configura as tuas refeições","Elige cuántas comidas quieres repartir durante el día. Puedes cambiarlo cuando quieras.":"Escolhe quantas refeições queres distribuir ao longo do dia. Podes alterar quando quiseres.","Comidas al día":"Refeições por dia","3 comidas":"3 refeições","4 comidas":"4 refeições","5 comidas":"5 refeições","Guardar alimentación":"Guardar plano alimentar","Calculadora de nutrición":"Calculadora de nutrição","Fórmula fisiológica":"Fórmula fisiológica","Masculina":"Masculina","Femenina":"Feminina","Actividad habitual":"Atividade habitual","Muy baja":"Muito baixa","Ligera (1–3 días)":"Ligeira (1–3 dias)","Moderada (3–5 días)":"Moderada (3–5 dias)","Alta (6–7 días)":"Alta (6–7 dias)","Calcular mis objetivos":"Calcular os meus objetivos","Guía sencilla":"Guia simples","Menú orientativo y lista de compra":"Menu orientativo e lista de compras","Lista de compra del día":"Lista de compras do dia","Copiar lista de compra":"Copiar lista de compras","EVO AI COMMANDER":"EVO AI COMMANDER","VOZ DE COMANDANTE":"VOZ DE COMANDANTE","MODO SUPERVIVENCIA":"MODO SOBREVIVÊNCIA","Disciplina. Constancia. Evolución.":"Disciplina. Consistência. Evolução.","Escuchar mensaje":"Ouvir mensagem","Silenciar":"Silenciar","Reto diario":"Desafio diário","Reto semanal":"Desafio semanal","Generar nuevos retos":"Gerar novos desafios","Órdenes del comandante":"Ordens do comandante","¿Qué necesitas?":"Do que precisas?","Motivación para entrenar":"Motivação para treinar","Estoy cansado":"Estou cansado","Cómo progresar":"Como progredir","Consejo de alimentación":"Conselho alimentar","Dar orden":"Dar ordem","Registrar peso corporal":"Registar peso corporal","Peso de hoy (kg)":"Peso de hoje (kg)","Guardar peso":"Guardar peso","Medidas corporales":"Medidas corporais","Cintura (cm)":"Cintura (cm)","Pecho (cm)":"Peito (cm)","Brazo (cm)":"Braço (cm)","Muslo (cm)":"Coxa (cm)","Guardar medidas":"Guardar medidas","Sesiones completadas":"Sessões concluídas","Historial de ejercicios":"Histórico de exercícios","Crear copia de seguridad":"Criar cópia de segurança","Restaurar copia":"Restaurar cópia","Borrar historial":"Apagar histórico","Mi perfil":"O meu perfil","Nombre":"Nome","Edad":"Idade","Altura (cm)":"Altura (cm)","Peso actual (kg)":"Peso atual (kg)","Peso objetivo (kg)":"Peso desejado (kg)","Nivel":"Nível","Principiante":"Iniciante","Intermedio":"Intermédio","Avanzado":"Avançado","Objetivo":"Objetivo","Ganar masa muscular":"Ganhar massa muscular","Definir y ganar músculo":"Definir e ganhar músculo","Mejorar fuerza":"Melhorar força","Guardar perfil":"Guardar perfil","Privacidad y datos":"Privacidade e dados","Desayuno":"Pequeno-almoço","Comida":"Almoço","Cena":"Jantar","Media mañana":"Lanche da manhã","Merienda":"Lanche","Pecho":"Peito","Espalda":"Costas","Hombros":"Ombros","Bíceps":"Bíceps","Tríceps":"Tríceps","Máquina":"Máquina","Polea":"Polia","Guardar ejercicio":"Guardar exercício","Totales del menú":"Totais do menu","Proteínas":"Proteínas","Grasas":"Gorduras","Hidratos":"Hidratos de carbono","Energía":"Energia","Mantenimiento":"Manutenção","Objetivo orientativo":"Objetivo indicativo","Lista copiada.":"Lista copiada.","Aún no hay registros.":"Ainda não existem registos.","Todavía no hay pesos registrados.":"Ainda não existem pesos registados.",
"Press de pecho en máquina":"Chest press na máquina",
"Jalón al pecho":"Puxada frontal",
"Remo sentado":"Remada sentada",
"Elevación lateral":"Elevação lateral",
"Curl de bíceps":"Rosca de bíceps",
"Extensión de tríceps":"Extensão de tríceps",
"Prensa de piernas":"Leg press",
"Curl femoral sentado":"Flexora sentada",
"Extensión de cuádriceps":"Extensora",
"Gemelos en prensa":"Gémeos na prensa",
"Crunch abdominal":"Abdominal crunch",
"Press inclinado en máquina":"Chest press inclinado na máquina",
"Remo con apoyo de pecho":"Remada com apoio no peito",
"Jalón agarre neutro":"Puxada com pega neutra",
"Press de hombros":"Desenvolvimento de ombros",
"Curl de bíceps en polea":"Rosca de bíceps na polia",
"Extensión de tríceps sobre cabeza":"Extensão de tríceps acima da cabeça",
"Sentadilla hack o prensa":"Agachamento hack ou leg press",
"Curl femoral tumbado":"Flexora deitada",
"Abductores":"Abdutores",
"Gemelos sentado":"Gémeos sentado",
"Plancha":"Prancha",
"Sesión en curso":"Sessão em curso",
"Torso/pierna, con máquinas como base y sin press banca con barra. Ajusta los días a tus turnos de trabajo.":"Divisão superior/inferior, principalmente com máquinas e sem supino com barra. Ajusta os dias aos teus turnos de trabalho.",
"Primeras 2 semanas de vuelta: 2 series por ejercicio, técnica controlada y 3–4 repeticiones en reserva. No busques récords todavía.":"Primeiras 2 semanas de regresso: 2 séries por exercício, técnica controlada e 3–4 repetições em reserva. Ainda não procures recordes.",
"Cuando completes todas las series en el rango alto, con técnica limpia y al menos 2 repeticiones en reserva, prueba el incremento mínimo de la máquina en la siguiente sesión.":"Quando completares todas as séries no limite superior com boa técnica e pelo menos 2 repetições em reserva, experimenta o menor aumento de peso na próxima sessão.",
"Seleccionar":"Selecionar",
"Completa edad, altura y peso en tu perfil para calcular una estimación.":"Introduz a tua idade, altura e peso no perfil para calcular uma estimativa.",
"Incluye una fuente de proteína en cada comida, hidratos suficientes para entrenar y frutas/verduras a diario. Ajusta las cantidades según evolución del peso, hambre y rendimiento.":"Inclui uma fonte de proteína em cada refeição, hidratos suficientes para treinar e fruta e legumes diariamente. Ajusta as quantidades conforme o peso, a fome e o desempenho.",
"La calculadora de arriba estima tus calorías y macronutrientes. Usa el resultado como punto de partida y revisa tu evolución durante 2–3 semanas antes de ajustar. Esta guía es orientativa y no sustituye una valoración profesional.":"A calculadora estima as tuas calorias e macronutrientes. Usa o resultado como ponto de partida e acompanha a evolução durante 2–3 semanas antes de ajustar. Este guia é informativo e não substitui aconselhamento profissional.",
"Ejemplo práctico de un día con cantidades aproximadas. Puedes cambiar alimentos por las alternativas indicadas. Ajusta las raciones a tus objetivos y a tu hambre.":"Exemplo prático de um dia com quantidades aproximadas. Podes trocar alimentos pelas alternativas indicadas. Ajusta as porções aos teus objetivos e à tua fome.",
"Calcula tus objetivos para ver el reparto por comida.":"Calcula os teus objetivos para ver a distribuição por refeição.",
"Alternativas: pollo ↔ pavo ↔ tofu; arroz ↔ patata ↔ pasta; yogur skyr ↔ queso fresco batido; fruta según temporada. La crema de arroz (50–60 g) puede sustituir a la avena o a parte del arroz, no hace falta añadirla además.":"Alternativas: frango ↔ peru ↔ tofu; arroz ↔ batata ↔ massa; iogurte skyr ↔ queijo fresco batido; fruta da época. O creme de arroz (50–60 g) pode substituir a aveia ou parte do arroz.",
"La voz utiliza las voces disponibles en tu dispositivo. La selección masculina depende de las voces instaladas.":"A voz utiliza as vozes disponíveis no teu dispositivo. A seleção masculina depende das vozes instaladas.",
"Dificultad automática: los retos se ajustan de forma orientativa al nivel de tu perfil.":"Dificuldade automática: os desafios são ajustados de forma indicativa ao nível do teu perfil.",
"Asistente local de demostración. La conexión a un motor de IA real se integrará en una fase posterior.":"Assistente local de demonstração. A ligação a um motor de IA real será integrada numa fase posterior.",
"Registra las medidas siempre en condiciones parecidas, sin apretar la cinta.":"Regista as medidas sempre em condições semelhantes, sem apertar a fita métrica.",
"Guarda un archivo de respaldo para no perder perfil, rutinas registradas, medidas, peso y retos. La restauración reemplaza los datos actuales de esta app.":"Guarda um ficheiro de cópia de segurança para proteger o perfil, treinos, medidas, peso e desafios. A reposição substitui os dados atuais da aplicação.",
"Esta versión guarda perfil, comidas e historial en este dispositivo. Todavía no hay cuentas ni sincronización en la nube.":"Esta versão guarda o perfil, refeições e histórico neste dispositivo. Ainda não existem contas nem sincronização na nuvem.",
"▶ Escuchar mensaje":"▶ Ouvir mensagem",
"■ Silenciar":"■ Silenciar",
"Fase normal: 3 series y RIR 1–3.":"Fase normal: 3 séries e RIR 1–3.",
"Has completado el rango alto con margen suficiente. Puedes probar el incremento mínimo la próxima vez.":"Completaste o limite superior com margem suficiente. Podes experimentar o menor aumento na próxima vez.",
"Mantén la carga y busca mejorar poco a poco, sin perder técnica.":"Mantém a carga e procura melhorar gradualmente sem perder a técnica.",
"Registro actualizado en esta sesión.":"Registo atualizado nesta sessão.",
"Guardado en esta sesión.":"Guardado nesta sessão.",
"Aún no has registrado ejercicios.":"Ainda não registaste exercícios.",
"Aún no hay sesiones guardadas.":"Ainda não existem sessões guardadas.",
"Revisa la medida de":"Verifica a medida de",
"Introduce al menos una medida.":"Introduz pelo menos uma medida.",
"Medidas guardadas.":"Medidas guardadas.",
"Misión semanal cumplida":"Missão semanal cumprida",
"Misión cumplida":"Missão cumprida",
"Pendiente de completar":"Por concluir",
"Tu dispositivo no ofrece lectura de voz en este navegador.":"O teu dispositivo não suporta leitura de voz neste navegador.",
"Perfil guardado correctamente. Nutrición actualizada.":"Perfil guardado. Nutrição atualizada.",
"Idioma / Language":"Idioma",
"Selecciona el idioma de la aplicación":"Seleciona o idioma da aplicação",
"El cambio se guarda en este dispositivo. Puedes volver al español cuando quieras.":"A tua escolha fica guardada neste dispositivo. Podes voltar ao espanhol quando quiseres."
}};

const nutritionExtra={
en:{
"Estimación orientativa de energía y macronutrientes, con superávit moderado para ganar masa. No es una prescripción médica ni sustituye a un dietista-nutricionista.":"Approximate estimate of energy and macronutrients, with a moderate surplus for muscle gain. This is not a medical prescription and does not replace advice from a registered dietitian.",
"Estimación diaria · V7.3":"Daily estimate · V7.3","Mantenimiento:":"Maintenance:","Objetivo orientativo:":"Suggested target:","Cálculo realizado con:":"Calculated using:","Estimación orientativa. Revisa la media del peso, el hambre, la energía y el rendimiento durante 2–3 semanas.":"Approximate estimate. Review average weight, hunger, energy and performance over 2–3 weeks.",
"Objetivo diario:":"Daily target:","Cada comida muestra los valores calculados de sus propias raciones.":"Each meal shows the calculated values for its own portions.",
"Totales del menú":"Menu totals","Energía:":"Energy:","objetivo ":"target ","proteína":"protein","grasas":"fat","hidratos":"carbs","Aviso:":"Notice:","Los objetivos se salen del rango de ajuste de esta plantilla. Las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"These targets are outside this template's adjustment range. Portions are estimates and macros may vary; review the menu before using it.",
"Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"To meet these targets, some portions may be too small or too large. Review quantities and use substitutions if needed.",
"Las cantidades y macros son aproximados y pueden variar por marca y preparación.":"Quantities and macros are approximate and may vary by brand and preparation.",
"Calcula primero tus objetivos para generar un menú con cantidades adaptadas.":"Calculate your targets first to generate a menu with adjusted portions.",
"Comida 1":"Meal 1","Comida 2":"Meal 2","Comida 3":"Meal 3","Comida 4":"Meal 4","Comida 5":"Meal 5",
"Proteína whey":"Whey protein","Crema de arroz (en seco)":"Cream of rice (dry)","Plátano":"Banana","Leche entera":"Whole milk","Almendras":"Almonds","Pollo":"Chicken","Arroz (en seco)":"Rice (dry)","Verduras variadas":"Mixed vegetables","Manzana":"Apple","Aguacate":"Avocado","Aceite de oliva":"Olive oil","Atún al natural escurrido":"Drained tuna in water","Pan integral":"Wholemeal bread","Patata":"Potato"
},
fr:{
"Estimación orientativa de energía y macronutrientes, con superávit moderado para ganar masa. No es una prescripción médica ni sustituye a un dietista-nutricionista.":"Estimation indicative de l’énergie et des macronutriments, avec un léger surplus pour prendre du muscle. Ceci ne constitue pas une prescription médicale et ne remplace pas l’avis d’un diététicien-nutritionniste.",
"Estimación diaria · V7.3":"Estimation quotidienne · V7.3","Mantenimiento:":"Maintien :","Objetivo orientativo:":"Objectif indicatif :","Cálculo realizado con:":"Calcul effectué avec :","Estimación orientativa. Revisa la media del peso, el hambre, la energía y el rendimiento durante 2–3 semanas.":"Estimation indicative. Suivez le poids moyen, la faim, l’énergie et les performances pendant 2 à 3 semaines.",
"Objetivo diario:":"Objectif quotidien :","Cada comida muestra los valores calculados de sus propias raciones.":"Chaque repas affiche les valeurs calculées pour ses propres portions.",
"Totales del menú":"Totaux du menu","Energía:":"Énergie :","objetivo ":"objectif ","proteína":"protéines","grasas":"lipides","hidratos":"glucides","Aviso:":"Attention :","Los objetivos se salen del rango de ajuste de esta plantilla. Las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Ces objectifs dépassent la plage prévue par ce modèle. Les portions sont indicatives et les macros peuvent varier ; vérifiez le menu avant utilisation.",
"Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Pour atteindre ces objectifs, certaines portions peuvent être trop petites ou trop grandes. Vérifiez les quantités et utilisez des équivalences si nécessaire.",
"Las cantidades y macros son aproximados y pueden variar por marca y preparación.":"Les quantités et les macros sont approximatifs et peuvent varier selon la marque et la préparation.",
"Calcula primero tus objetivos para generar un menú con cantidades adaptadas.":"Calculez d’abord vos objectifs pour générer un menu avec des portions adaptées.",
"Comida 1":"Repas 1","Comida 2":"Repas 2","Comida 3":"Repas 3","Comida 4":"Repas 4","Comida 5":"Repas 5",
"Proteína whey":"Protéine whey","Crema de arroz (en seco)":"Crème de riz (sèche)","Plátano":"Banane","Leche entera":"Lait entier","Almendras":"Amandes","Pollo":"Poulet","Arroz (en seco)":"Riz (sec)","Verduras variadas":"Légumes variés","Manzana":"Pomme","Aguacate":"Avocat","Aceite de oliva":"Huile d’olive","Atún al natural escurrido":"Thon au naturel égoutté","Pan integral":"Pain complet","Patata":"Pomme de terre"
},
de:{
"Estimación orientativa de energía y macronutrientes, con superávit moderado para ganar masa. No es una prescripción médica ni sustituye a un dietista-nutricionista.":"Ungefähre Schätzung von Energie und Makronährstoffen mit moderatem Überschuss für Muskelaufbau. Dies ist keine medizinische Verordnung und ersetzt keine Ernährungsberatung.",
"Estimación diaria · V7.3":"Tages-Schätzung · V7.3","Mantenimiento:":"Erhaltungsbedarf:","Objetivo orientativo:":"Empfohlener Zielwert:","Cálculo realizado con:":"Berechnet mit:","Estimación orientativa. Revisa la media del peso, el hambre, la energía y el rendimiento durante 2–3 semanas.":"Ungefähre Schätzung. Beobachte Durchschnittsgewicht, Hunger, Energie und Leistung über 2–3 Wochen.",
"Objetivo diario:":"Tagesziel:","Cada comida muestra los valores calculados de sus propias raciones.":"Jede Mahlzeit zeigt die berechneten Werte ihrer eigenen Portionen.",
"Totales del menú":"Menü-Gesamtwerte","Energía:":"Energie:","objetivo ":"Ziel ","proteína":"Protein","grasas":"Fett","hidratos":"Kohlenhydrate","Aviso:":"Hinweis:","Los objetivos se salen del rango de ajuste de esta plantilla. Las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Diese Ziele liegen außerhalb des Anpassungsbereichs dieser Vorlage. Mengen sind Richtwerte und Makros können abweichen; prüfe den Menüplan vor der Verwendung.",
"Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Um diese Ziele zu erreichen, können manche Portionen zu klein oder zu groß sein. Prüfe die Mengen und nutze bei Bedarf Alternativen.",
"Las cantidades y macros son aproximados y pueden variar por marca y preparación.":"Mengen und Makros sind Näherungswerte und können je nach Marke und Zubereitung variieren.",
"Calcula primero tus objetivos para generar un menú con cantidades adaptadas.":"Berechne zuerst deine Ziele, um einen Menüplan mit angepassten Mengen zu erstellen.",
"Comida 1":"Mahlzeit 1","Comida 2":"Mahlzeit 2","Comida 3":"Mahlzeit 3","Comida 4":"Mahlzeit 4","Comida 5":"Mahlzeit 5",
"Proteína whey":"Whey-Protein","Crema de arroz (en seco)":"Reiscreme (Trockengewicht)","Plátano":"Banane","Leche entera":"Vollmilch","Almendras":"Mandeln","Pollo":"Hähnchen","Arroz (en seco)":"Reis (Trockengewicht)","Verduras variadas":"Gemischtes Gemüse","Manzana":"Apfel","Aguacate":"Avocado","Aceite de oliva":"Olivenöl","Atún al natural escurrido":"Thunfisch in Wasser, abgetropft","Pan integral":"Vollkornbrot","Patata":"Kartoffel"
},
it:{
"Estimación orientativa de energía y macronutrientes, con superávit moderado para ganar masa. No es una prescripción médica ni sustituye a un dietista-nutricionista.":"Stima indicativa di energia e macronutrienti, con un surplus moderato per aumentare la massa muscolare. Non è una prescrizione medica e non sostituisce il parere di un dietista.",
"Estimación diaria · V7.3":"Stima giornaliera · V7.3","Mantenimiento:":"Mantenimento:","Objetivo orientativo:":"Obiettivo consigliato:","Cálculo realizado con:":"Calcolo effettuato con:","Estimación orientativa. Revisa la media del peso, el hambre, la energía y el rendimiento durante 2–3 semanas.":"Stima indicativa. Controlla il peso medio, la fame, l’energia e le prestazioni per 2–3 settimane.",
"Objetivo diario:":"Obiettivo giornaliero:","Cada comida muestra los valores calculados de sus propias raciones.":"Ogni pasto mostra i valori calcolati per le proprie porzioni.",
"Totales del menú":"Totali del menu","Energía:":"Energia:","objetivo ":"obiettivo ","proteína":"proteine","grasas":"grassi","hidratos":"carboidrati","Aviso:":"Avviso:","Los objetivos se salen del rango de ajuste de esta plantilla. Las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Questi obiettivi sono fuori dall’intervallo previsto dal modello. Le quantità sono indicative e i macronutrienti possono variare; controlla il menu prima di usarlo.",
"Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Per raggiungere questi obiettivi alcune porzioni potrebbero essere troppo piccole o grandi. Controlla le quantità e usa equivalenze se necessario.",
"Las cantidades y macros son aproximados y pueden variar por marca y preparación.":"Quantità e macronutrienti sono approssimativi e possono variare in base alla marca e alla preparazione.",
"Calcula primero tus objetivos para generar un menú con cantidades adaptadas.":"Calcola prima i tuoi obiettivi per generare un menu con quantità personalizzate.",
"Comida 1":"Pasto 1","Comida 2":"Pasto 2","Comida 3":"Pasto 3","Comida 4":"Pasto 4","Comida 5":"Pasto 5",
"Proteína whey":"Proteine whey","Crema de arroz (en seco)":"Crema di riso (peso a secco)","Plátano":"Banana","Leche entera":"Latte intero","Almendras":"Mandorle","Pollo":"Pollo","Arroz (en seco)":"Riso (peso a secco)","Verduras variadas":"Verdure miste","Manzana":"Mela","Aguacate":"Avocado","Aceite de oliva":"Olio d’oliva","Atún al natural escurrido":"Tonno al naturale sgocciolato","Pan integral":"Pane integrale","Patata":"Patata"
},
pt:{
"Estimación orientativa de energía y macronutrientes, con superávit moderado para ganar masa. No es una prescripción médica ni sustituye a un dietista-nutricionista.":"Estimativa indicativa de energia e macronutrientes, com um excedente moderado para ganhar massa muscular. Não é uma prescrição médica nem substitui o aconselhamento de um nutricionista.",
"Estimación diaria · V7.3":"Estimativa diária · V7.3","Mantenimiento:":"Manutenção:","Objetivo orientativo:":"Objetivo sugerido:","Cálculo realizado con:":"Cálculo efetuado com:","Estimación orientativa. Revisa la media del peso, el hambre, la energía y el rendimiento durante 2–3 semanas.":"Estimativa indicativa. Acompanha o peso médio, a fome, a energia e o desempenho durante 2–3 semanas.",
"Objetivo diario:":"Objetivo diário:","Cada comida muestra los valores calculados de sus propias raciones.":"Cada refeição apresenta os valores calculados para as suas próprias porções.",
"Totales del menú":"Totais do menu","Energía:":"Energia:","objetivo ":"objetivo ","proteína":"proteína","grasas":"gorduras","hidratos":"hidratos de carbono","Aviso:":"Aviso:","Los objetivos se salen del rango de ajuste de esta plantilla. Las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Estes objetivos estão fora do intervalo de ajuste deste modelo. As quantidades são indicativas e os macronutrientes podem variar; revê o menu antes de o utilizar.",
"Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Para atingir estes objetivos, algumas porções podem ser pequenas ou grandes. Revê as quantidades e utiliza equivalências se necessário.",
"Las cantidades y macros son aproximados y pueden variar por marca y preparación.":"As quantidades e os macronutrientes são aproximados e podem variar conforme a marca e a preparação.",
"Calcula primero tus objetivos para generar un menú con cantidades adaptadas.":"Calcula primeiro os teus objetivos para gerar um menu com quantidades ajustadas.",
"Comida 1":"Refeição 1","Comida 2":"Refeição 2","Comida 3":"Refeição 3","Comida 4":"Refeição 4","Comida 5":"Refeição 5",
"Proteína whey":"Proteína whey","Crema de arroz (en seco)":"Creme de arroz (peso seco)","Plátano":"Banana","Leche entera":"Leite gordo","Almendras":"Amêndoas","Pollo":"Frango","Arroz (en seco)":"Arroz (peso seco)","Verduras variadas":"Legumes variados","Manzana":"Maçã","Aguacate":"Abacate","Aceite de oliva":"Azeite","Atún al natural escurrido":"Atum ao natural escorrido","Pan integral":"Pão integral","Patata":"Batata"
}};
Object.keys(nutritionExtra).forEach(k=>Object.assign(labels[k],nutritionExtra[k]));
const nutritionNotes={"en":"Macros and kcal are calculated using the app’s internal nutrition database; brands and preparation methods may vary. Rice, oats and cream of rice are weighed dry; tuna is drained; potatoes and vegetables are weighed raw. Milk is measured in ml.","fr":"Les macros et les kcal sont calculés à partir de la base nutritionnelle interne de l’application ; les marques et les modes de préparation peuvent varier. Le riz, l’avoine et la crème de riz sont pesés secs ; le thon égoutté ; les pommes de terre et les légumes crus. Le lait est mesuré en ml.","de":"Makros und kcal werden anhand der internen Nährwertdatenbank der App berechnet; Marken und Zubereitung können variieren. Reis, Haferflocken und Reiscreme werden trocken gewogen; Thunfisch abgetropft; Kartoffeln und Gemüse roh. Milch wird in ml gemessen.","it":"I macronutrienti e le kcal sono calcolati con il database nutrizionale interno dell’app; marche e preparazioni possono variare. Riso, avena e crema di riso si pesano a secco; il tonno sgocciolato; patate e verdure crude. Il latte si misura in ml.","pt":"Os macronutrientes e as kcal são calculados com a base nutricional interna da aplicação; as marcas e preparações podem variar. Arroz, aveia e creme de arroz são pesados secos; atum escorrido; batata e legumes crus. O leite é medido em ml."};
Object.keys(nutritionNotes).forEach(k=>{labels[k]["Los macros y kcal se calculan con la base nutricional interna de la app; las marcas y preparaciones pueden variar. Arroz, avena y crema de arroz se pesan en seco; atún escurrido; patata y verduras en crudo. Leche en ml."]=nutritionNotes[k];});


const nutritionPhrases={"en":{" g proteínas · ":" g protein · "," años · ":" years · "," · actividad ":" · activity ","proteína · ":"protein · "," grasas · ":" fat · "," hidratos. Cada comida":"carbs. Each meal"," g proteína · ":" g protein · "," g grasas · ":" g fat · "," g hidratos":" g carbs","Proteínas:":"Protein:","Proteínas: ":"Protein: ","Grasas:":"Fat:","Grasas: ":"Fat: ","Hidratos:":"Carbs:","Hidratos: ":"Carbs: ","Objetivo diario: ":"Daily target: ","Comida 1":"Meal 1","Comida 2":"Meal 2","Comida 3":"Meal 3","Comida 4":"Meal 4","Comida 5":"Meal 5"},"fr":{" g proteínas · ":" g protéines · "," años · ":" ans · "," · actividad ":" · activité ","proteína · ":"protéines · "," grasas · ":" lipides · "," hidratos. Cada comida":"glucides. Chaque repas"," g proteína · ":" g protéines · "," g grasas · ":" g lipides · "," g hidratos":" g glucides","Proteínas:":"Protéines :","Proteínas: ":"Protéines : ","Grasas:":"Lipides :","Grasas: ":"Lipides : ","Hidratos:":"Glucides :","Hidratos: ":"Glucides : ","Objetivo diario: ":"Objectif quotidien : ","Comida 1":"Repas 1","Comida 2":"Repas 2","Comida 3":"Repas 3","Comida 4":"Repas 4","Comida 5":"Repas 5"},"de":{" g proteínas · ":" g Protein · "," años · ":" Jahre · "," · actividad ":" · Aktivität ","proteína · ":"Protein · "," grasas · ":" Fett · "," hidratos. Cada comida":"Kohlenhydrate. Jede Mahlzeit"," g proteína · ":" g Protein · "," g grasas · ":" g Fett · "," g hidratos":" g Kohlenhydrate","Proteínas:":"Protein:","Proteínas: ":"Protein: ","Grasas:":"Fett:","Grasas: ":"Fett: ","Hidratos:":"Kohlenhydrate:","Hidratos: ":"Kohlenhydrate: ","Objetivo diario: ":"Tagesziel: ","Comida 1":"Mahlzeit 1","Comida 2":"Mahlzeit 2","Comida 3":"Mahlzeit 3","Comida 4":"Mahlzeit 4","Comida 5":"Mahlzeit 5"},"it":{" g proteínas · ":" g proteine · "," años · ":" anni · "," · actividad ":" · attività ","proteína · ":"proteine · "," grasas · ":" grassi · "," hidratos. Cada comida":"carboidrati. Ogni pasto"," g proteína · ":" g proteine · "," g grasas · ":" g grassi · "," g hidratos":" g carboidrati","Proteínas:":"Proteine:","Proteínas: ":"Proteine: ","Grasas:":"Grassi:","Grasas: ":"Grassi: ","Hidratos:":"Carboidrati:","Hidratos: ":"Carboidrati: ","Objetivo diario: ":"Obiettivo giornaliero: ","Comida 1":"Pasto 1","Comida 2":"Pasto 2","Comida 3":"Pasto 3","Comida 4":"Pasto 4","Comida 5":"Pasto 5"},"pt":{" g proteínas · ":" g proteína · "," años · ":" anos · "," · actividad ":" · atividade ","proteína · ":"proteína · "," grasas · ":" gorduras · "," hidratos. Cada comida":"hidratos de carbono. Cada refeição"," g proteína · ":" g proteína · "," g grasas · ":" g gorduras · "," g hidratos":" g hidratos de carbono","Proteínas:":"Proteínas:","Proteínas: ":"Proteínas: ","Grasas:":"Gorduras:","Grasas: ":"Gorduras: ","Hidratos:":"Hidratos de carbono:","Hidratos: ":"Hidratos de carbono: ","Objetivo diario: ":"Objetivo diário: ","Comida 1":"Refeição 1","Comida 2":"Refeição 2","Comida 3":"Refeição 3","Comida 4":"Refeição 4","Comida 5":"Refeição 5"}};
const nutritionFoodWords={
en:{"Plátano":"Banana","Leche entera":"Whole milk","Pollo":"Chicken","Arroz (en seco)":"Rice (dry)","Manzana":"Apple","Aguacate":"Avocado","Atún al natural escurrido":"Tuna in water, drained","Patata":"Potato","Avena":"Oats","proteínas":"protein","grasas":"fat","hidratos":"carbs","proteína":"protein"},
fr:{"Plátano":"Banane","Leche entera":"Lait entier","Pollo":"Poulet","Arroz (en seco)":"Riz (sec)","Manzana":"Pomme","Aguacate":"Avocat","Atún al natural escurrido":"Thon au naturel égoutté","Patata":"Pomme de terre","Avena":"Avoine","proteínas":"protéines","grasas":"lipides","hidratos":"glucides","proteína":"protéines"},
de:{"Plátano":"Banane","Leche entera":"Vollmilch","Pollo":"Hähnchen","Arroz (en seco)":"Reis (trocken)","Manzana":"Apfel","Aguacate":"Avocado","Atún al natural escurrido":"Thunfisch in Wasser, abgetropft","Patata":"Kartoffel","Avena":"Haferflocken","proteínas":"Protein","grasas":"Fett","hidratos":"Kohlenhydrate","proteína":"Protein"},
it:{"Plátano":"Banana","Leche entera":"Latte intero","Pollo":"Pollo","Arroz (en seco)":"Riso (secco)","Manzana":"Mela","Aguacate":"Avocado","Atún al natural escurrido":"Tonno al naturale sgocciolato","Patata":"Patata","Avena":"Avena","proteínas":"proteine","grasas":"grassi","hidratos":"carboidrati","proteína":"proteine"},
pt:{"Plátano":"Banana","Leche entera":"Leite gordo","Pollo":"Frango","Arroz (en seco)":"Arroz (seco)","Manzana":"Maçã","Aguacate":"Abacate","Atún al natural escurrido":"Atum ao natural escorrido","Patata":"Batata","Avena":"Aveia","proteínas":"proteína","grasas":"gorduras","hidratos":"hidratos de carbono","proteína":"proteína"}
};
Object.keys(nutritionFoodWords).forEach(k=>Object.assign(labels[k],nutritionFoodWords[k]));
const extraNutritionFoodWords={
en:{"Proteína whey":"Whey protein","Crema de arroz (en seco)":"Cream of rice (dry)","Verduras variadas":"Mixed vegetables","Almendras":"Almonds","Aceite de oliva":"Olive oil","Pan integral":"Wholemeal bread","Yogur tipo skyr natural":"Plain skyr yogurt","Pavo":"Turkey","Salmón":"Salmon"},
fr:{"Proteína whey":"Protéine whey","Crema de arroz (en seco)":"Crème de riz (sec)","Verduras variadas":"Légumes variés","Almendras":"Amandes","Aceite de oliva":"Huile d’olive","Pan integral":"Pain complet","Yogur tipo skyr natural":"Yaourt skyr nature","Pavo":"Dinde","Salmón":"Saumon"},
de:{"Proteína whey":"Whey-Protein","Crema de arroz (en seco)":"Reiscreme (trocken)","Verduras variadas":"Gemischtes Gemüse","Almendras":"Mandeln","Aceite de oliva":"Olivenöl","Pan integral":"Vollkornbrot","Yogur tipo skyr natural":"Natur-Skyr","Pavo":"Pute","Salmón":"Lachs"},
it:{"Proteína whey":"Proteine del siero","Crema de arroz (en seco)":"Crema di riso (secca)","Verduras variadas":"Verdure miste","Almendras":"Mandorle","Aceite de oliva":"Olio d’oliva","Pan integral":"Pane integrale","Yogur tipo skyr natural":"Yogurt skyr naturale","Pavo":"Tacchino","Salmón":"Salmone"},
pt:{"Proteína whey":"Proteína whey","Crema de arroz (en seco)":"Creme de arroz (seco)","Verduras variadas":"Legumes variados","Almendras":"Amêndoas","Aceite de oliva":"Azeite","Pan integral":"Pão integral","Yogur tipo skyr natural":"Iogurte skyr natural","Pavo":"Peru","Salmón":"Salmão"}
};
Object.keys(extraNutritionFoodWords).forEach(k=>Object.assign(labels[k],extraNutritionFoodWords[k]));

Object.assign(nutritionPhrases.en,{"años":"years","actividad":"activity","los objetivos se salen del rango de ajuste de esta plantilla. las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"targets are outside this template's adjustment range. Amounts are approximate and macros may vary; review the menu before using it.","Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Some portions may be too small or too large to meet these targets. Review amounts and use substitutions if needed.","Mantén pulsada la lista para copiarla.":"Press and hold the list to copy it."});
Object.assign(nutritionPhrases.fr,{"años":"ans","actividad":"activité","los objetivos se salen del rango de ajuste de esta plantilla. las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"les objectifs dépassent la plage d’ajustement de ce modèle. Les quantités sont indicatives et les macros peuvent varier ; vérifiez le menu avant utilisation.","Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Certaines portions peuvent être trop petites ou trop grandes pour atteindre ces objectifs. Vérifiez les quantités et utilisez des équivalences si nécessaire.","Mantén pulsada la lista para copiarla.":"Maintenez la liste appuyée pour la copier."});
Object.assign(nutritionPhrases.de,{"años":"Jahre","actividad":"Aktivität","los objetivos se salen del rango de ajuste de esta plantilla. las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Die Ziele liegen außerhalb des Anpassungsbereichs dieser Vorlage. Mengen sind Richtwerte und Makros können abweichen; prüfe den Menüplan vor der Verwendung.","Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Einige Portionen können zu klein oder zu groß sein, um diese Ziele zu erreichen. Prüfe die Mengen und nutze bei Bedarf Alternativen.","Mantén pulsada la lista para copiarla.":"Halte die Liste gedrückt, um sie zu kopieren."});
Object.assign(nutritionPhrases.it,{"años":"anni","actividad":"attività","los objetivos se salen del rango de ajuste de esta plantilla. las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Gli obiettivi sono fuori dall’intervallo di regolazione del modello. Le quantità sono indicative e i macro possono variare; controlla il menu prima di utilizzarlo.","Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Alcune porzioni potrebbero essere troppo piccole o grandi per raggiungere questi obiettivi. Controlla le quantità e usa equivalenze se necessario.","Mantén pulsada la lista para copiarla.":"Tieni premuto l’elenco per copiarlo."});
Object.assign(nutritionPhrases.pt,{"años":"anos","actividad":"atividade","los objetivos se salen del rango de ajuste de esta plantilla. las cantidades mostradas son orientativas y los macros pueden desviarse; revisa el menú antes de usarlo.":"Os objetivos estão fora do intervalo de ajuste deste modelo. As quantidades são indicativas e os macronutrientes podem variar; revê o menu antes de o utilizar.","Para alcanzar estos objetivos algunas raciones pueden quedar pequeñas o grandes. Revisa las cantidades y utiliza equivalencias si lo necesitas.":"Algumas porções podem ser demasiado pequenas ou grandes para atingir estes objetivos. Revê as quantidades e utiliza equivalências se necessário.","Mantén pulsada la lista para copiarla.":"Mantém a lista premida para a copiar."});

Object.keys(nutritionPhrases).forEach(k=>Object.assign(labels[k],nutritionPhrases[k]));
// Correcciones de textos de marca y nombres de comidas.
const globalUiTranslations={
 en:{"Entrena con cabeza. Evoluciona cada semana. · V7.3":"Train smart. Evolve every week. · V7.3","GYM EVOLUTION · Versión 7.3 · Desarrollo profesional":"GYM EVOLUTION · Version 7.3 · Professional development","Comida":"Lunch"},
 fr:{"Entrena con cabeza. Evoluciona cada semana. · V7.3":"Entraînez-vous intelligemment. Évoluez chaque semaine. · V7.3","GYM EVOLUTION · Versión 7.3 · Desarrollo profesional":"GYM EVOLUTION · Version 7.3 · Développement professionnel","Comida":"Déjeuner"},
 de:{"Entrena con cabeza. Evoluciona cada semana. · V7.3":"Trainiere mit Köpfchen. Entwickle dich jede Woche weiter. · V7.3","GYM EVOLUTION · Versión 7.3 · Desarrollo profesional":"GYM EVOLUTION · Version 7.3 · Professionelle Entwicklung","Comida":"Mittagessen"},
 it:{"Entrena con cabeza. Evoluciona cada semana. · V7.3":"Allenati con intelligenza. Evolviti ogni settimana. · V7.3","GYM EVOLUTION · Versión 7.3 · Desarrollo profesional":"GYM EVOLUTION · Versione 7.3 · Sviluppo professionale","Comida":"Pranzo"},
 pt:{"Entrena con cabeza. Evoluciona cada semana. · V7.3":"Treina com inteligência. Evolui a cada semana. · V7.3","GYM EVOLUTION · Versión 7.3 · Desarrollo profesional":"GYM EVOLUTION · Versão 7.3 · Desenvolvimento profissional","Comida":"Almoço"}
};
Object.keys(globalUiTranslations).forEach(k=>Object.assign(labels[k],globalUiTranslations[k]));

/* Cobertura centralizada de textos generados por las secciones de la app. */
const sectionLabels={
en:{
"Glúteos":"Glutes","Cuádriceps":"Quadriceps","Máquina/polea":"Machine/cable","Misión semanal":"Weekly mission","Activación diaria":"Daily activation","Reto de disciplina":"Discipline challenge","Consistencia de la semana":"Weekly consistency","Formato no válido":"Invalid format","Introduce un peso válido.":"Enter a valid weight.","Primero inicia la sesión de entrenamiento.":"Start the training session first.","Ya tienes una sesión iniciada.":"You already have a session in progress.","Todavía no hay medidas registradas.":"No measurements recorded yet.","Peso guardado y nutrición actualizada.":"Weight saved and nutrition updated.","¿Borrar todo el historial de ejercicios?":"Delete the entire exercise history?","GYM EVOLUTION: entrenamiento, nutrición, progreso y retos.":"GYM EVOLUTION: training, nutrition, progress and challenges.","Registros guardados. Busca mejoras pequeñas y constantes.":"records saved. Look for small, consistent improvements.","Marcar activación como completada":"Mark activation as complete","Misión semanal cumplida":"Weekly mission completed","Pendiente de completar":"Pending completion","Sesión guardada sin ejercicios registrados; no contará para la misión semanal.":"Session saved without logged exercises; it will not count toward the weekly mission.","¿Restaurar esta copia? Los datos actuales de GYM EVOLUTION serán sustituidos.":"Restore this backup? Current GYM EVOLUTION data will be replaced.","Planifica y completa 3 sesiones de entrenamiento o actividad física adaptada a tu recuperación.":"Plan and complete 3 training sessions or physical activities adapted to your recovery.","Orden: registra cargas y repeticiones. Sube el peso solo cuando completes el rango con técnica limpia y margen suficiente.":"Order: log your weights and reps. Increase the load only when you complete the range with clean technique and enough reps in reserve.","Comandante. Ponte en marcha. Hoy no buscamos excusas ni récords. Cumple tu misión con técnica, constancia y cabeza. Evoluciona.":"Commander. Move out. Today is not about excuses or records. Complete your mission with good technique, consistency and focus. Evolve.","Orden: reparte proteína en tus comidas, acompaña con hidratos y mantén una alimentación variada. Ajustaremos cantidades según tu evolución.":"Order: include protein in your meals, add carbohydrates and keep your diet varied. We will adjust portions according to your progress.","Orden: escucha al cuerpo. Si hay fatiga intensa, dolor o mal descanso, baja la intensidad o recupera. La disciplina también es saber descansar.":"Order: listen to your body. If you feel intense fatigue, pain or poor sleep, reduce intensity or recover. Discipline also means knowing when to rest.","Los macros y kcal se calculan con la base nutricional interna de la app; las marcas y preparaciones pueden variar. Arroz, avena y crema de arroz se pesan en seco; atún escurrido; patata y verduras en crudo. Leche en ml.":"Macros and kcal are calculated using the app's internal nutrition database; brands and preparation methods may vary. Rice, oats and cream of rice are weighed dry; tuna drained; potatoes and vegetables raw. Milk is measured in ml."
},
fr:{
"Glúteos":"Fessiers","Cuádriceps":"Quadriceps","Máquina/polea":"Machine/poulie","Misión semanal":"Mission hebdomadaire","Activación diaria":"Activation quotidienne","Reto de disciplina":"Défi de discipline","Consistencia de la semana":"Régularité de la semaine","Formato no válido":"Format invalide","Introduce un peso válido.":"Saisissez un poids valide.","Primero inicia la sesión de entrenamiento.":"Commencez d’abord la séance d’entraînement.","Ya tienes una sesión iniciada.":"Une séance est déjà en cours.","Todavía no hay medidas registradas.":"Aucune mesure enregistrée pour le moment.","Peso guardado y nutrición actualizada.":"Poids enregistré et nutrition mise à jour.","¿Borrar todo el historial de ejercicios?":"Supprimer tout l’historique des exercices ?","GYM EVOLUTION: entrenamiento, nutrición, progreso y retos.":"GYM EVOLUTION : entraînement, nutrition, progrès et défis.","Registros guardados. Busca mejoras pequeñas y constantes.":"enregistrements sauvegardés. Cherchez de petites améliorations régulières.","Marcar activación como completada":"Marquer l’activation comme terminée","Misión semanal cumplida":"Mission hebdomadaire accomplie","Pendiente de completar":"À terminer","Sesión guardada sin ejercicios registrados; no contará para la misión semanal.":"Séance enregistrée sans exercice saisi ; elle ne comptera pas pour la mission hebdomadaire.","¿Restaurar esta copia? Los datos actuales de GYM EVOLUTION serán sustituidos.":"Restaurer cette sauvegarde ? Les données actuelles de GYM EVOLUTION seront remplacées.","Planifica y completa 3 sesiones de entrenamiento o actividad física adaptada a tu recuperación.":"Planifiez et effectuez 3 séances d’entraînement ou activités physiques adaptées à votre récupération.","Orden: registra cargas y repeticiones. Sube el peso solo cuando completes el rango con técnica limpia y margen suficiente.":"Ordre : notez les charges et les répétitions. Augmentez le poids uniquement lorsque vous terminez la plage avec une technique propre et une marge suffisante.","Comandante. Ponte en marcha. Hoy no buscamos excusas ni récords. Cumple tu misión con técnica, constancia y cabeza. Evoluciona.":"Commandant. En avant. Aujourd’hui, pas d’excuses ni de records. Accomplissez votre mission avec technique, régularité et bon sens. Évoluez.","Orden: reparte proteína en tus comidas, acompaña con hidratos y mantén una alimentación variada. Ajustaremos cantidades según tu evolución.":"Ordre : répartissez les protéines dans vos repas, ajoutez des glucides et gardez une alimentation variée. Nous ajusterons les quantités selon vos progrès.","Orden: escucha al cuerpo. Si hay fatiga intensa, dolor o mal descanso, baja la intensidad o recupera. La disciplina también es saber descansar.":"Ordre : écoutez votre corps. En cas de fatigue intense, de douleur ou de mauvais sommeil, réduisez l’intensité ou récupérez. La discipline consiste aussi à savoir se reposer.","Los macros y kcal se calculan con la base nutricional interna de la app; las marcas y preparaciones pueden variar. Arroz, avena y crema de arroz se pesan en seco; atún escurrido; patata y verduras en crudo. Leche en ml.":"Les macros et les kcal sont calculés à partir de la base nutritionnelle interne de l’application ; les marques et préparations peuvent varier. Le riz, l’avoine et la crème de riz sont pesés secs ; le thon égoutté ; les pommes de terre et légumes crus. Le lait est mesuré en ml."
},
de:{
"Glúteos":"Gesäß","Cuádriceps":"Quadrizeps","Máquina/polea":"Maschine/Kabelzug","Misión semanal":"Wochenmission","Activación diaria":"Tägliche Aktivierung","Reto de disciplina":"Disziplin-Challenge","Consistencia de la semana":"Wöchentliche Beständigkeit","Formato no válido":"Ungültiges Format","Introduce un peso válido.":"Gib ein gültiges Gewicht ein.","Primero inicia la sesión de entrenamiento.":"Starte zuerst die Trainingseinheit.","Ya tienes una sesión iniciada.":"Du hast bereits eine Sitzung gestartet.","Todavía no hay medidas registradas.":"Noch keine Messwerte gespeichert.","Peso guardado y nutrición actualizada.":"Gewicht gespeichert und Ernährung aktualisiert.","¿Borrar todo el historial de ejercicios?":"Den gesamten Trainingsverlauf löschen?","GYM EVOLUTION: entrenamiento, nutrición, progreso y retos.":"GYM EVOLUTION: Training, Ernährung, Fortschritt und Challenges.","Registros guardados. Busca mejoras pequeñas y constantes.":"Einträge gespeichert. Achte auf kleine, stetige Verbesserungen.","Marcar activación como completada":"Aktivierung als erledigt markieren","Misión semanal cumplida":"Wochenmission erfüllt","Pendiente de completar":"Noch offen","Sesión guardada sin ejercicios registrados; no contará para la misión semanal.":"Einheit ohne protokollierte Übungen gespeichert; sie zählt nicht für die Wochenmission.","¿Restaurar esta copia? Los datos actuales de GYM EVOLUTION serán sustituidos.":"Dieses Backup wiederherstellen? Die aktuellen GYM-EVOLUTION-Daten werden ersetzt.","Planifica y completa 3 sesiones de entrenamiento o actividad física adaptada a tu recuperación.":"Plane und absolviere 3 Trainingseinheiten oder an deine Erholung angepasste körperliche Aktivitäten.","Orden: registra cargas y repeticiones. Sube el peso solo cuando completes el rango con técnica limpia y margen suficiente.":"Anweisung: Notiere Gewichte und Wiederholungen. Erhöhe das Gewicht erst, wenn du den Bereich mit sauberer Technik und ausreichender Reserve schaffst.","Comandante. Ponte en marcha. Hoy no buscamos excusas ni récords. Cumple tu misión con técnica, constancia y cabeza. Evoluciona.":"Kommandant. Los geht’s. Heute geht es nicht um Ausreden oder Rekorde. Erfülle deine Mission mit Technik, Beständigkeit und Köpfchen. Entwickle dich weiter.","Orden: reparte proteína en tus comidas, acompaña con hidratos y mantén una alimentación variada. Ajustaremos cantidades según tu evolución.":"Anweisung: Verteile Protein auf deine Mahlzeiten, ergänze Kohlenhydrate und ernähre dich abwechslungsreich. Wir passen die Mengen an deinen Fortschritt an.","Orden: escucha al cuerpo. Si hay fatiga intensa, dolor o mal descanso, baja la intensidad o recupera. La disciplina también es saber descansar.":"Anweisung: Höre auf deinen Körper. Bei starker Müdigkeit, Schmerzen oder schlechtem Schlaf reduziere die Intensität oder erhole dich. Disziplin bedeutet auch, Pausen zu kennen.","Los macros y kcal se calculan con la base nutricional interna de la app; las marcas y preparaciones pueden variar. Arroz, avena y crema de arroz se pesan en seco; atún escurrido; patata y verduras en crudo. Leche en ml.":"Makros und kcal werden anhand der internen Nährwertdatenbank der App berechnet; Marken und Zubereitung können variieren. Reis, Haferflocken und Reiscreme werden trocken gewogen; Thunfisch abgetropft; Kartoffeln und Gemüse roh. Milch wird in ml gemessen."
},
it:{
"Glúteos":"Glutei","Cuádriceps":"Quadricipiti","Máquina/polea":"Macchina/cavo","Misión semanal":"Missione settimanale","Activación diaria":"Attivazione quotidiana","Reto de disciplina":"Sfida di disciplina","Consistencia de la semana":"Costanza settimanale","Formato no válido":"Formato non valido","Introduce un peso válido.":"Inserisci un peso valido.","Primero inicia la sesión de entrenamiento.":"Avvia prima la sessione di allenamento.","Ya tienes una sesión iniciada.":"Hai già una sessione in corso.","Todavía no hay medidas registradas.":"Non ci sono ancora misurazioni registrate.","Peso guardado y nutrición actualizada.":"Peso salvato e nutrizione aggiornata.","¿Borrar todo el historial de ejercicios?":"Eliminare tutta la cronologia degli esercizi?","GYM EVOLUTION: entrenamiento, nutrición, progreso y retos.":"GYM EVOLUTION: allenamento, nutrizione, progressi e sfide.","Registros guardados. Busca mejoras pequeñas y constantes.":"registrazioni salvate. Cerca piccoli miglioramenti costanti.","Marcar activación como completada":"Segna l’attivazione come completata","Misión semanal cumplida":"Missione settimanale completata","Pendiente de completar":"Da completare","Sesión guardada sin ejercicios registrados; no contará para la misión semanal.":"Sessione salvata senza esercizi registrati; non conterà per la missione settimanale.","¿Restaurar esta copia? Los datos actuales de GYM EVOLUTION serán sustituidos.":"Ripristinare questo backup? I dati attuali di GYM EVOLUTION verranno sostituiti.","Planifica y completa 3 sesiones de entrenamiento o actividad física adaptada a tu recuperación.":"Pianifica e completa 3 sessioni di allenamento o attività fisica adatte al tuo recupero.","Orden: registra cargas y repeticiones. Sube el peso solo cuando completes el rango con técnica limpia y margen suficiente.":"Ordine: registra carichi e ripetizioni. Aumenta il peso solo quando completi il range con tecnica corretta e margine sufficiente.","Comandante. Ponte en marcha. Hoy no buscamos excusas ni récords. Cumple tu misión con técnica, constancia y cabeza. Evoluciona.":"Comandante. Si parte. Oggi niente scuse né record. Completa la missione con tecnica, costanza e lucidità. Evolviti.","Orden: reparte proteína en tus comidas, acompaña con hidratos y mantén una alimentación variada. Ajustaremos cantidades según tu evolución.":"Ordine: distribuisci le proteine nei pasti, aggiungi carboidrati e mantieni un’alimentazione varia. Adatteremo le quantità in base ai tuoi progressi.","Orden: escucha al cuerpo. Si hay fatiga intensa, dolor o mal descanso, baja la intensidad o recupera. La disciplina también es saber descansar.":"Ordine: ascolta il tuo corpo. In caso di forte stanchezza, dolore o poco riposo, riduci l’intensità o recupera. La disciplina significa anche saper riposare.","Los macros y kcal se calculan con la base nutricional interna de la app; las marcas y preparaciones pueden variar. Arroz, avena y crema de arroz se pesan en seco; atún escurrido; patata y verduras en crudo. Leche en ml.":"I macro e le kcal sono calcolati con il database nutrizionale interno dell’app; marche e preparazioni possono variare. Riso, avena e crema di riso si pesano a secco; tonno sgocciolato; patate e verdure crude. Il latte si misura in ml."
},
pt:{
"Glúteos":"Glúteos","Cuádriceps":"Quadríceps","Máquina/polea":"Máquina/cabo","Misión semanal":"Missão semanal","Activación diaria":"Ativação diária","Reto de disciplina":"Desafio de disciplina","Consistencia de la semana":"Consistência da semana","Formato no válido":"Formato inválido","Introduce un peso válido.":"Introduz um peso válido.","Primero inicia la sesión de entrenamiento.":"Começa primeiro a sessão de treino.","Ya tienes una sesión iniciada.":"Já tens uma sessão iniciada.","Todavía no hay medidas registradas.":"Ainda não existem medidas registadas.","Peso guardado y nutrición actualizada.":"Peso guardado e nutrição atualizada.","¿Borrar todo el historial de ejercicios?":"Apagar todo o histórico de exercícios?","GYM EVOLUTION: entrenamiento, nutrición, progreso y retos.":"GYM EVOLUTION: treino, nutrição, progresso e desafios.","Registros guardados. Busca mejoras pequeñas y constantes.":"registos guardados. Procura pequenas melhorias constantes.","Marcar activación como completada":"Marcar ativação como concluída","Misión semanal cumplida":"Missão semanal cumprida","Pendiente de completar":"Por concluir","Sesión guardada sin ejercicios registrados; no contará para la misión semanal.":"Sessão guardada sem exercícios registados; não contará para a missão semanal.","¿Restaurar esta copia? Los datos actuales de GYM EVOLUTION serán sustituidos.":"Restaurar esta cópia de segurança? Os dados atuais do GYM EVOLUTION serão substituídos.","Planifica y completa 3 sesiones de entrenamiento o actividad física adaptada a tu recuperación.":"Planeia e completa 3 sessões de treino ou atividade física adaptada à tua recuperação.","Orden: registra cargas y repeticiones. Sube el peso solo cuando completes el rango con técnica limpia y margen suficiente.":"Ordem: regista cargas e repetições. Aumenta o peso apenas quando completares o intervalo com técnica correta e margem suficiente.","Comandante. Ponte en marcha. Hoy no buscamos excusas ni récords. Cumple tu misión con técnica, constancia y cabeza. Evoluciona.":"Comandante. Vamos a isso. Hoje não procuramos desculpas nem recordes. Cumpre a tua missão com técnica, consistência e cabeça. Evolui.","Orden: reparte proteína en tus comidas, acompaña con hidratos y mantén una alimentación variada. Ajustaremos cantidades según tu evolución.":"Ordem: distribui proteína pelas refeições, acompanha com hidratos e mantém uma alimentação variada. Ajustaremos as quantidades conforme a tua evolução.","Orden: escucha al cuerpo. Si hay fatiga intensa, dolor o mal descanso, baja la intensidad o recupera. La disciplina también es saber descansar.":"Ordem: ouve o teu corpo. Se sentires fadiga intensa, dor ou dormires mal, reduz a intensidade ou recupera. A disciplina também é saber descansar.","Los macros y kcal se calculan con la base nutricional interna de la app; las marcas y preparaciones pueden variar. Arroz, avena y crema de arroz se pesan en seco; atún escurrido; patata y verduras en crudo. Leche en ml.":"Os macros e as kcal são calculados com a base nutricional interna da aplicação; as marcas e preparações podem variar. Arroz, aveia e creme de arroz são pesados secos; atum escorrido; batata e legumes crus. O leite é medido em ml."
}};
Object.keys(sectionLabels).forEach(code=>Object.assign(labels[code],sectionLabels[code]));
const dynamicText={
en:{
mealCount:n=>`Your ${n}-meal plan has been saved.`,
sessionState:d=>`Workout in progress · ${t(d)}`,
sessionSaved:(m,e)=>`Session saved: ${m} minutes and ${e} exercises logged.`,
savedRecords:n=>`${n} records saved. Look for small, consistent improvements.`,
sessionDay:d=>`This session belongs to ${t(d)}. Finish it before changing the day.`,
dailyTitle:s=>`Daily challenge · ${t(s)}`,
weeklyTitle:s=>`Weekly challenge · ${t(s)}`,
weeklyCount:n=>`${n} of 3 sessions completed`,
savedExercise:s=>`Saved in this session. ${t(s)}`,
updatedExercise:s=>`Updated in this session. ${t(s)}`
},
fr:{
mealCount:n=>`Votre répartition de ${n} repas est enregistrée.`,
sessionState:d=>`Séance en cours · ${t(d)}`,
sessionSaved:(m,e)=>`Séance enregistrée : ${m} minutes et ${e} exercices saisis.`,
savedRecords:n=>`${n} enregistrements sauvegardés. Cherchez de petites améliorations régulières.`,
sessionDay:d=>`Cette séance correspond à ${t(d)}. Terminez-la avant de changer de jour.`,
dailyTitle:s=>`Défi quotidien · ${t(s)}`,
weeklyTitle:s=>`Défi hebdomadaire · ${t(s)}`,
weeklyCount:n=>`${n} sur 3 séances terminées`,
savedExercise:s=>`Enregistré dans cette séance. ${t(s)}`,
updatedExercise:s=>`Mis à jour dans cette séance. ${t(s)}`
},
de:{
mealCount:n=>`Dein Plan mit ${n} Mahlzeiten wurde gespeichert.`,
sessionState:d=>`Einheit läuft · ${t(d)}`,
sessionSaved:(m,e)=>`Einheit gespeichert: ${m} Minuten und ${e} Übungen protokolliert.`,
savedRecords:n=>`${n} Einträge gespeichert. Achte auf kleine, stetige Verbesserungen.`,
sessionDay:d=>`Diese Einheit gehört zu ${t(d)}. Beende sie, bevor du den Tag wechselst.`,
dailyTitle:s=>`Tägliche Challenge · ${t(s)}`,
weeklyTitle:s=>`Wochen-Challenge · ${t(s)}`,
weeklyCount:n=>`${n} von 3 Einheiten abgeschlossen`,
savedExercise:s=>`In dieser Einheit gespeichert. ${t(s)}`,
updatedExercise:s=>`In dieser Einheit aktualisiert. ${t(s)}`
},
it:{
mealCount:n=>`Il tuo piano da ${n} pasti è stato salvato.`,
sessionState:d=>`Sessione in corso · ${t(d)}`,
sessionSaved:(m,e)=>`Sessione salvata: ${m} minuti e ${e} esercizi registrati.`,
savedRecords:n=>`${n} registrazioni salvate. Cerca piccoli miglioramenti costanti.`,
sessionDay:d=>`Questa sessione appartiene a ${t(d)}. Concludila prima di cambiare giorno.`,
dailyTitle:s=>`Sfida quotidiana · ${t(s)}`,
weeklyTitle:s=>`Sfida settimanale · ${t(s)}`,
weeklyCount:n=>`${n} di 3 sessioni completate`,
savedExercise:s=>`Salvato in questa sessione. ${t(s)}`,
updatedExercise:s=>`Aggiornato in questa sessione. ${t(s)}`
},
pt:{
mealCount:n=>`O teu plano de ${n} refeições foi guardado.`,
sessionState:d=>`Sessão em curso · ${t(d)}`,
sessionSaved:(m,e)=>`Sessão guardada: ${m} minutos e ${e} exercícios registados.`,
savedRecords:n=>`${n} registos guardados. Procura pequenas melhorias constantes.`,
sessionDay:d=>`Esta sessão pertence a ${t(d)}. Termina-a antes de mudares de dia.`,
dailyTitle:s=>`Desafio diário · ${t(s)}`,
weeklyTitle:s=>`Desafio semanal · ${t(s)}`,
weeklyCount:n=>`${n} de 3 sessões concluídas`,
savedExercise:s=>`Guardado nesta sessão. ${t(s)}`,
updatedExercise:s=>`Atualizado nesta sessão. ${t(s)}`
}
};
function translateDynamic(source){
 const p=dynamicText[lang];if(!p)return source;let m;
 if((m=source.match(/^Tu distribución de (\d+) comidas está guardada\.$/)))return p.mealCount(m[1]);
 if((m=source.match(/^Sesión en curso · (.+)$/)))return p.sessionState(m[1]);
 if((m=source.match(/^Sesión guardada: (\d+) minutos y (\d+) ejercicios registrados\.$/)))return p.sessionSaved(m[1],m[2]);
 if((m=source.match(/^(\d+) registros guardados\. Busca mejoras pequeñas y constantes\.$/)))return p.savedRecords(m[1]);
 if((m=source.match(/^Esta sesión pertenece a (.+)\. Finalízala antes de cambiar de día\.$/)))return p.sessionDay(m[1]);
 if((m=source.match(/^Reto diario · (.+)$/)))return p.dailyTitle(m[1]);
 if((m=source.match(/^Reto semanal · (.+)$/)))return p.weeklyTitle(m[1]);
 if((m=source.match(/^(\d+) de 3 sesiones completadas$/)))return p.weeklyCount(m[1]);
 if((m=source.match(/^Guardado en esta sesión\. (.+)$/)))return p.savedExercise(m[1]);
 if((m=source.match(/^Registro actualizado en esta sesión\. (.+)$/)))return p.updatedExercise(m[1]);
 return source;
}

const names={es:"Español",en:"English",fr:"Français",de:"Deutsch",it:"Italiano",pt:"Português"};
let lang=localStorage.getItem("ge_language")||"es";
const originals=new WeakMap(), attrOriginals=new WeakMap();
function t(s){
 const source=String(s);
 if(lang==="es")return source;
 const dictionary=labels[lang]||{};
 // Traducción por coincidencia completa: nunca sustituye fragmentos dentro de cifras,
 // nombres, macros, unidades o frases dinámicas.
 return Object.prototype.hasOwnProperty.call(dictionary,source)?dictionary[source]:translateDynamic(source);
}
function translate(){
 document.documentElement.lang=lang;
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let n;while(n=walker.nextNode()){if(n.parentElement&&n.parentElement.closest("#nutritionResult,#nutritionMenu,#nutritionPerMeal,#nutritionShopping"))continue;if(!originals.has(n))originals.set(n,n.nodeValue);const base=originals.get(n);const lead=(base.match(/^\s*/)||[""])[0],trail=(base.match(/\s*$/)||[""])[0],core=base.trim();const translated=lead+t(core)+trail;if(n.nodeValue!==translated)n.nodeValue=translated;}
 document.querySelectorAll("input[placeholder],textarea[placeholder],button[title],input[aria-label],select[aria-label]").forEach(el=>{let attrs=attrOriginals.get(el);if(!attrs){attrs={};["placeholder","title","aria-label"].forEach(k=>{if(el.hasAttribute(k))attrs[k]=el.getAttribute(k)});attrOriginals.set(el,attrs)}Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,t(v)));});
}
window.GymI18n={t:value=>t(String(value)),get language(){return lang;}};
function addSelector(){
 const profile=document.getElementById("profile");if(!profile||document.getElementById("geLanguage"))return;
 const card=document.createElement("div");card.className="card";card.innerHTML='<h2>Idioma / Language</h2><div class="field"><label for="geLanguage">Selecciona el idioma de la aplicación</label><select id="geLanguage"><option value="es">🇪🇸 Español</option><option value="en">🇬🇧 English</option><option value="fr">🇫🇷 Français</option><option value="de">🇩🇪 Deutsch</option><option value="it">🇮🇹 Italiano</option><option value="pt">🇵🇹 Português</option></select></div><p class="muted" id="geLanguageHint">El cambio se guarda en este dispositivo. Puedes volver al español cuando quieras.</p>';
 profile.insertBefore(card,profile.children[1]||null);
 const select=document.getElementById("geLanguage");select.value=lang;
 select.addEventListener("change",()=>{lang=select.value;localStorage.setItem("ge_language",lang);translate();select.value=lang;window.dispatchEvent(new Event("gym-language-change"));});
}
function boot(){addSelector();translate();window.dispatchEvent(new Event("gym-language-change"));new MutationObserver(()=>{addSelector();translate()}).observe(document.body,{childList:true,subtree:true,characterData:true});}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();