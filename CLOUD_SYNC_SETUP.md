# Configuración de nube para GYM EVOLUTION

La aplicación publicada en GitHub Pages es estática; la base de datos y la autenticación se alojan aparte en Supabase.

## 1. Crear el proyecto
1. Crear un proyecto en Supabase.
2. En Authentication > Providers, habilitar Email.
3. En Authentication > URL Configuration, añadir el dominio publicado de GYM EVOLUTION como Site URL y Redirect URL.
4. Abrir SQL Editor y ejecutar el contenido de `supabase/schema.sql`.

## 2. Datos públicos de conexión
Desde Project Settings > API, copiar:
- Project URL
- Publishable key (o la anon/public key heredada)

Estos dos valores están diseñados para estar en el cliente si la tabla tiene RLS correctamente activado. No copiar nunca la `service_role` o secret key al navegador, al repositorio ni al chat.

## 3. Comportamiento que debe implementar el cliente
- Registro e inicio/cierre de sesión por correo.
- Confirmación de correo y recuperación de contraseña.
- Al iniciar sesión: descargar solo la fila cuyo user_id corresponde a auth.uid().
- Sincronización de todo el objeto de datos de la app (perfil, nutrición, pesos, medidas, sesiones, ejercicios y retos).
- Guardado remoto con control de errores y marca de última sincronización.
- Mantener una copia local para uso sin conexión y sincronizar al recuperar conexión.
- Resolver conflictos con control de updated_at/version; no sobrescribir silenciosamente datos más recientes.
- Mantener el modo de pruebas separado y nunca sincronizar datos ficticios.
- No borrar la copia local al cerrar sesión; ofrecer al usuario exportarla o conservarla en el dispositivo.

## 4. Migración segura del usuario actual
En el primer inicio de sesión, si no existe una copia en la nube:
1. Mostrar que se encontraron datos locales.
2. Ofrecer subir esos datos a la cuenta.
3. Verificar que la subida terminó correctamente.
4. Descargar y comparar el objeto guardado antes de marcar la migración como completada.

Si ya existe información en la nube, no reemplazarla automáticamente: ofrecer elegir nube o dispositivo, o combinar mediante una estrategia explícita.

## Seguridad
La tabla usa Row Level Security y políticas que limitan cada operación a auth.uid(). La clave service_role nunca debe incluirse en el frontend. El archivo SQL es el esquema inicial; hay que probar políticas, autenticación, sincronización y recuperación antes de habilitarlo a todos los usuarios.
