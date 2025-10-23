# Test de Integración Automatizado

Este proyecto ejecuta **pruebas de integración reales** con una base de datos **PostgreSQL** en un entorno automatizado utilizando **GitHub Actions**.

## 🧠 Tecnologías
- Node.js
- Vitest
- PostgreSQL (contenedor Docker)
- GitHub Actions (CI/CD)

## ⚙️ Flujo del pipeline
1. Levanta un contenedor Docker con PostgreSQL.
2. Instala las dependencias del proyecto (`npm install`).
3. Ejecuta las pruebas de integración (`npm run test`).

## 👨‍💻 Autor
Axel Reynoso
