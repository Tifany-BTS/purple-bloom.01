# Purple Bloom - AI Integration & Cloud Deployment

Aplicacion web multipagina desarrollada con React, TypeScript y Vite que integra recomendaciones asistidas por inteligencia artificial (Asistente de Colores) y despliegue automatizado en la nube mediante GitHub Actions, Amazon S3 y AWS Amplify.

## 1. Instalacion y ejecucion local
- Requisitos previos: Node.js 18 LTS o superior, npm y Git.
- Clonar repositorio: git clone https://github.com/Tifany-BTS/purple-bloom.01.git && cd purple-bloom.01
- Instalar dependencias: npm install --legacy-peer-deps
- Ejecutar en desarrollo: npm run dev
- Compilar para produccion (genera carpeta dist/): npm run build

## 2. Configuracion publica
- La aplicacion utiliza configuracion publica para el servicio de recomendaciones/IA y el modo de simulacion (mock).
- Ninguna llave privada, token de sesion (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN) ni clave de API se almacena en el repositorio. Las credenciales de despliegue se gestionan exclusivamente mediante GitHub Secrets.

## 3. Arquitectura y flujo CI/CD
- Frontend: Sitio estatico multipagina generado con Vite en dist/ (index.html, catalogo.html, asistente-colores.html, entre otras).
- Modulo de IA (Asistente de Colores): Consume un servicio de analisis/recomendacion estructurada con manejo de estados de carga y errores controlados.
- Alojamiento: Amazon S3 (Static Website Hosting) y AWS Amplify.
- Flujo git push -> CI/CD: Al hacer git push origin main, GitHub Actions instala dependencias, verifica tipos (tsc --noEmit), compila (npm run build), guarda dist/ como artifact y sincroniza los archivos hacia Amazon S3 mientras AWS Amplify publica automaticamente la nueva version.

## 4. Limitaciones conocidas
- Protocolo HTTP en S3: El endpoint de Static Website Hosting de Amazon S3 opera unicamente sobre HTTP; HTTPS requiere CDN o AWS Amplify.
- Caducidad de credenciales en AWS Academy: Los tokens temporales (AWS_SESSION_TOKEN) expiran al finalizar cada sesion del Learner Lab y requieren renovacion en GitHub Secrets.
- Enrutamiento multipagina: Las rutas sin extension .html requieren reglas explicitas de reescritura en el servidor para evitar redirecciones hacia index.html.
