export type Cita = {
  id: string;
  fecha: string;
  hora: string;
  cliente: string;
  mascota: string;
  servicio: string;
  groomer: string;
  estado: "Pendiente" | "En proceso" | "Completada" | "Cancelada";
};

export const citasDemo: Cita[] = [
  { id: "C-1042", fecha: "2026-05-14", hora: "09:00", cliente: "Ana Torres", mascota: "Luna (Poodle)", servicio: "Baño + corte", groomer: "María González", estado: "Completada" },
  { id: "C-1043", fecha: "2026-05-14", hora: "10:30", cliente: "Pedro Ruiz", mascota: "Max (Labrador)", servicio: "Baño completo", groomer: "Carlos Ríos", estado: "En proceso" },
  { id: "C-1044", fecha: "2026-05-14", hora: "12:00", cliente: "Lucía Vega", mascota: "Coco (Shih Tzu)", servicio: "Corte estilizado", groomer: "Ana Flores", estado: "Pendiente" },
  { id: "C-1045", fecha: "2026-05-14", hora: "14:00", cliente: "Mario López", mascota: "Rocky (Bulldog)", servicio: "Spa premium", groomer: "María González", estado: "Pendiente" },
  { id: "C-1046", fecha: "2026-05-14", hora: "15:30", cliente: "Sofía Mena", mascota: "Nala (Husky)", servicio: "Cepillado deslanado", groomer: "Carlos Ríos", estado: "Pendiente" },
  { id: "C-1047", fecha: "2026-05-14", hora: "17:00", cliente: "Diego Paz", mascota: "Toby (Golden)", servicio: "Baño + corte", groomer: "Ana Flores", estado: "Cancelada" },
];

export const clientesDemo = [
  { id: 1, nombre: "Ana Torres", telefono: "+591 700-12345", email: "ana@mail.com", mascotas: 2, ultimaVisita: "2026-05-10" },
  { id: 2, nombre: "Pedro Ruiz", telefono: "+591 700-22334", email: "pedro@mail.com", mascotas: 1, ultimaVisita: "2026-05-12" },
  { id: 3, nombre: "Lucía Vega", telefono: "+591 700-55667", email: "lucia@mail.com", mascotas: 3, ultimaVisita: "2026-05-09" },
  { id: 4, nombre: "Mario López", telefono: "+591 700-99887", email: "mario@mail.com", mascotas: 1, ultimaVisita: "2026-04-30" },
  { id: 5, nombre: "Sofía Mena", telefono: "+591 700-44556", email: "sofia@mail.com", mascotas: 2, ultimaVisita: "2026-05-13" },
];

export const mascotasDemo = [
  { id: 1, nombre: "Luna", raza: "Poodle", edad: "3 años", dueño: "Ana Torres", peso: "6 kg" },
  { id: 2, nombre: "Max", raza: "Labrador", edad: "5 años", dueño: "Pedro Ruiz", peso: "28 kg" },
  { id: 3, nombre: "Coco", raza: "Shih Tzu", edad: "2 años", dueño: "Lucía Vega", peso: "5 kg" },
  { id: 4, nombre: "Rocky", raza: "Bulldog", edad: "4 años", dueño: "Mario López", peso: "22 kg" },
  { id: 5, nombre: "Nala", raza: "Husky", edad: "3 años", dueño: "Sofía Mena", peso: "20 kg" },
];

export const serviciosDemo = [
  { id: 1, nombre: "Baño completo", duracion: "45 min", precio: 80 },
  { id: 2, nombre: "Baño + corte", duracion: "75 min", precio: 140 },
  { id: 3, nombre: "Corte estilizado", duracion: "60 min", precio: 120 },
  { id: 4, nombre: "Spa premium", duracion: "120 min", precio: 220 },
  { id: 5, nombre: "Cepillado deslanado", duracion: "40 min", precio: 70 },
  { id: 6, nombre: "Corte de uñas", duracion: "15 min", precio: 30 },
];

export const inventarioDemo = [
  { id: 1, producto: "Shampoo hipoalergénico 500ml", stock: 24, minimo: 10, precio: 45 },
  { id: 2, producto: "Acondicionador suavizante 500ml", stock: 8, minimo: 10, precio: 50 },
  { id: 3, producto: "Cepillo de cerdas suaves", stock: 15, minimo: 5, precio: 35 },
  { id: 4, producto: "Corta uñas profesional", stock: 4, minimo: 5, precio: 60 },
  { id: 5, producto: "Perfume para mascotas 100ml", stock: 30, minimo: 8, precio: 25 },
];

export const usuariosDemo = [
  { email: "admin@pawspa.com", rol: "Admin", ultimoAcceso: "Ahora", estado: "Activo" },
  { email: "laura@pawspa.com", rol: "Recepcionista", ultimoAcceso: "Hace 5 min", estado: "Activo" },
  { email: "maria@pawspa.com", rol: "Groomer", ultimoAcceso: "Hace 30 min", estado: "Activo" },
  { email: "carlos@pawspa.com", rol: "Groomer", ultimoAcceso: "Hace 2 h", estado: "Activo" },
  { email: "ana.f@pawspa.com", rol: "Groomer", ultimoAcceso: "Ayer", estado: "Inactivo" },
];

export const ocupacionGroomers = [
  { groomer: "María González", citas: 5, ocupacion: 83 },
  { groomer: "Carlos Ríos", citas: 4, ocupacion: 67 },
  { groomer: "Ana Flores", citas: 3, ocupacion: 50 },
];

export const ingresosMes = [
  { mes: "Ene", monto: 12400 },
  { mes: "Feb", monto: 13800 },
  { mes: "Mar", monto: 15200 },
  { mes: "Abr", monto: 14100 },
  { mes: "May", monto: 16700 },
];