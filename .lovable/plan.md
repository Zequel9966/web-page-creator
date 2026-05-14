## Plan: Paneles por rol para PawSpa

Portar el dashboard del HTML subido a React/TanStack con 4 roles: **admin, recepcionista, groomer, cliente**.

### 1. Base de datos
- Migración para añadir `'recepcionista'` al enum `app_role` (ya existen admin, groomer, cliente).

### 2. Layout autenticado (`/app`)
- Crear `src/routes/_authenticated.tsx` que:
  - Verifica sesión con `supabase.auth.getUser()`, si no hay sesión → redirige a `/iniciar-sesion`.
  - Carga rol del usuario desde `user_roles` y lo expone en contexto.
- Crear `src/routes/_authenticated/app.tsx` con shell del dashboard:
  - Sidebar shadcn (`SidebarProvider`) con navegación dinámica por rol.
  - Header con avatar, nombre, rol y botón Salir.
  - `<Outlet />` para subpáginas.

### 3. Navegación por rol (basada en el HTML)
- **admin**: Dashboard, Citas, Clientes, Mascotas, Servicios, Inventario, Reportes, Usuarios, Config.
- **recepcionista**: Dashboard, Citas, Clientes, Mascotas, Servicios.
- **groomer**: Mi Agenda, Mis Citas, Mascotas asignadas, Historial.
- **cliente**: Mi Cuenta, Mis Mascotas, Mis Citas, Reservar, Tienda.

### 4. Páginas del panel
Subrutas bajo `_authenticated/app/`:
- `dashboard.tsx` — KPIs + tabla de citas del día + ranking groomers (admin/recep).
- `citas.tsx` — tabla con filtros, estados, asignación de groomer.
- `clientes.tsx` — listado y alta de clientes.
- `mascotas.tsx` — fichas de mascotas con historial.
- `servicios.tsx` — catálogo de servicios y precios.
- `inventario.tsx` — stock de productos (admin).
- `reportes.tsx` — gráficas de ingresos / ocupación (admin).
- `usuarios.tsx` — gestión de empleados y roles (admin).
- `mi-agenda.tsx` — vista calendario del groomer.
- `mi-cuenta.tsx`, `mis-mascotas.tsx`, `mis-citas.tsx` — vistas del cliente.

Las stats, tablas y datos demo se portan tal cual del HTML como datos estáticos en una primera versión (sin tablas backend nuevas, para mantener el alcance manejable).

### 5. Login
- Tras login exitoso, en lugar de `/`, leer rol y redirigir a `/app/dashboard` (admin/recep/groomer) o `/app/mi-cuenta` (cliente).
- Botón "Reservar cita" del header sigue público.

### 6. Estilo
- Reusar tokens existentes (`primary`, `secondary`, etc.) — no introducir variables nuevas. Mapear los colores del HTML (caramelo/teal/crema) a los tokens ya definidos.
- Usar componentes shadcn (`Card`, `Table`, `Badge`, `Sidebar`, `Tabs`).

### Detalles técnicos
- El gating del rol se hace en el layout `_authenticated/app.tsx`: si la subruta requiere `admin` y el usuario es `cliente`, mostrar 403 / redirigir a su home.
- La consulta de rol va dentro de un `createServerFn` con `requireSupabaseAuth` para respetar RLS.
- Cliente browser para auth state listener en el layout.
- Sin tablas nuevas en esta iteración: las tablas de citas/clientes/etc. usan datos mock importados de `src/data/demo.ts`. Si después quieres persistencia real, lo añadimos en una segunda pasada.

¿Procedo?