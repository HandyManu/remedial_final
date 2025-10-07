# 💰 Backend - App de Control de Gastos del Profesor Ricardo

Realizado por :

Manuel alejandro Ortega Rodriguez
Hector Alejandro Murcia Rivera 
Ronnie Javier Ramirez Alvarado 

Backend completo en Node.js + Express + MongoDB para llevar control de ingresos y gastos.

## 🐛 Solución de Problemas

### MongoDB no conecta
```bash
# Verifica que MongoDB esté corriendo
mongosh

# Si usas Windows
net start MongoDB

# Si usas macOS/Linux
sudo systemctl start mongod
```

### Error: Cannot find module
```bash
# Reinstala las dependencias
rm -rf node_modules package-lock.json
npm install
```

### Puerto en uso
```bash
# Cambia el puerto en .env
PORT=3001
```

## 🧪 Probar con Postman o Thunder Client

1. Importa esta colección de ejemplo
2. Primero ejecuta `POST /api/categories/seed`
3. Copia el ID de una categoría
4. Úsalo para crear transacciones

## 📱 Listo para Frontend

Este backend está listo para conectarse con:
- React Native (app móvil)
- React (web)
- Flutter
- Cualquier cliente HTTP

## 🔐 Próximas Mejoras

- [ ] Autenticación con JWT
- [ ] Usuarios múltiples
- [ ] Presupuestos por categoría
- [ ] Reportes en PDF
- [ ] Gráficas y estadísticas
- [ ] Notificaciones
- [ ] Exportar/Importar datos

## 👨‍🏫 Para el Profesor Ricardo

¡Tu app de gastos está lista! Ahora puedes:
- ✅ Registrar todos tus ingresos (salario, bonos, etc.)
- ✅ Controlar tus gastos diarios
- ✅ Categorizar cada movimiento
- ✅ Ver cuánto gastas por categoría
- ✅ Conocer tu balance en cualquier momento
- ✅ Filtrar por fechas para reportes mensuales

## 📞 Soporte

Si tienes dudas sobre el código o necesitas ayuda, cada archivo está bien comentado y estructurado siguiendo las mejores prácticas de Node.js.

---

**¡Desarrollado con ❤️ para el control financiero del Profesor Ricardo!**📁 Estructura del Proyecto

```
expense-tracker-backend/
│
├── models/
│   ├── Transaction.js    # Modelo de transacciones
│   └── Category.js        # Modelo de categorías
│
├── controllers/
│   ├── transaction.controller.js
│   └── category.controller.js
│
├── routes/
│   ├── transaction.routes.js
│   └── category.routes.js
│
├── app.js                 # Archivo principal
├── package.json
├── .env                   # Variables de entorno
└── README.md
```

## 🚀 Instalación

### 1. Clonar o crear el proyecto
```bash
mkdir expense-tracker-backend
cd expense-tracker-backend
```

### 2. Instalar dependencias
```bash
npm install
```

Esto instalará:
- **express**: Framework web
- **mongoose**: ODM para MongoDB
- **cors**: Middleware para CORS
- **dotenv**: Variables de entorno
- **nodemon**: Auto-reload en desarrollo

### 3. Configurar MongoDB
Opción A - MongoDB Local:
```bash
# Asegúrate de tener MongoDB instalado y corriendo
mongod
```

Opción B - MongoDB Atlas (Cloud):
1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un cluster gratuito
3. Obtén tu connection string
4. Actualiza el `.env` con tu URI

### 4. Configurar variables de entorno
Crea un archivo `.env` en la raíz:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/expense_tracker
```

### 5. Iniciar el servidor
```bash
# Modo desarrollo (con auto-reload)
npm run dev

# Modo producción
npm start
```

El servidor correrá en `http://localhost:3000`

## 📋 API Endpoints

### Categorías

**Crear categorías por defecto:**
```http
POST /api/categories/seed
```

**Crear categoría:**
```http
POST /api/categories
Content-Type: application/json

{
  "nombre": "Ropa",
  "tipo": "egreso",
  "icono": "👕",
  "color": "#e74c3c"
}
```

**Obtener todas las categorías:**
```http
GET /api/categories
GET /api/categories?tipo=egreso
GET /api/categories?activa=true
```

**Obtener categoría por ID:**
```http
GET /api/categories/:id
```

**Actualizar categoría:**
```http
PUT /api/categories/:id
Content-Type: application/json

{
  "nombre": "Vestimenta",
  "color": "#ff6b6b"
}
```

**Eliminar categoría:**
```http
DELETE /api/categories/:id
```

### Transacciones

**Crear transacción:**
```http
POST /api/transactions
Content-Type: application/json

{
  "tipo": "egreso",
  "monto": 25.50,
  "descripcion": "Almuerzo en restaurante",
  "categoria": "ID_DE_CATEGORIA",
  "fecha": "2025-10-06",
  "notas": "Almuerzo con colegas"
}
```

**Obtener todas las transacciones:**
```http
GET /api/transactions
GET /api/transactions?tipo=ingreso
GET /api/transactions?fechaInicio=2025-10-01&fechaFin=2025-10-31
GET /api/transactions?categoria=ID_DE_CATEGORIA
```

**Obtener transacción por ID:**
```http
GET /api/transactions/:id
```

**Actualizar transacción:**
```http
PUT /api/transactions/:id
Content-Type: application/json

{
  "monto": 30.00,
  "descripcion": "Almuerzo actualizado"
}
```

**Eliminar transacción:**
```http
DELETE /api/transactions/:id
```

**Obtener resumen financiero:**
```http
GET /api/transactions/summary
GET /api/transactions/summary?fechaInicio=2025-10-01&fechaFin=2025-10-31

Respuesta:
{
  "success": true,
  "data": {
    "totalIngresos": 2500.00,
    "totalEgresos": 1200.50,
    "balance": 1299.50
  }
}
```

**Obtener gastos por categoría:**
```http
GET /api/transactions/by-category
GET /api/transactions/by-category?tipo=egreso

Respuesta:
{
  "success": true,
  "data": [
    {
      "_id": "category_id",
      "total": 450.75,
      "cantidad": 15,
      "categoria": {
        "nombre": "Alimentación",
        "icono": "🍔",
        "color": "#e74c3c"
      }
    }
  ]
}
```

## 🎯 Ejemplos de Uso

### 1. Primeros pasos

```bash
# 1. Crear categorías por defecto
curl -X POST http://localhost:3000/api/categories/seed

# 2. Ver categorías creadas
curl http://localhost:3000/api/categories
```

### 2. Registrar un ingreso

```bash
curl -X POST http://localhost:3000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "tipo": "ingreso",
    "monto": 1500.00,
    "descripcion": "Salario mensual",
    "categoria": "ID_CATEGORIA_SALARIO",
    "fecha": "2025-10-01"
  }'
```

### 3. Registrar un gasto

```bash
curl -X POST http://localhost:3000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "tipo": "egreso",
    "monto": 35.00,
    "descripcion": "Gasolina",
    "categoria": "ID_CATEGORIA_TRANSPORTE",
    "notas": "Tanque lleno"
  }'
```

### 4. Ver balance del mes

```bash
curl "http://localhost:3000/api/transactions/summary?fechaInicio=2025-10-01&fechaFin=2025-10-31"
```

## 🔧 Características

✅ CRUD completo de transacciones
✅ CRUD completo de categorías
✅ Filtros por tipo, fecha y categoría
✅ Resumen financiero (ingresos, egresos, balance)
✅ Agrupación de gastos por categoría
✅ Validaciones con Mongoose
✅ Manejo de errores
✅ Populate automático de categorías
✅ Índices en MongoDB para mejor rendimiento

## 🛠️ Tecnologías

- **Node.js**: Runtime de JavaScript
- **Express**: Framework web
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB

## 📝 Modelos de Datos

### Transaction
```javascript
{
  tipo: 'ingreso' | 'egreso',
  monto: Number,
  descripcion: String,
  categoria: ObjectId,
  fecha: Date,
  notas: String
}
```

### Category
```javascript
{
  nombre: String,
  tipo: 'ingreso' | 'egreso' | 'ambos',
  icono: String,
  color: String,
  activa: Boolean
}
```

##
