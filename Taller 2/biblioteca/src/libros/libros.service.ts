import { Injectable } from '@nestjs/common';

@Injectable()
export class LibrosService {
  findAll() {
    return [
      { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
      { id: 2, titulo: 'La ciudad y los perros', autor: 'Mario Vargas Llosa' },
    ];
  }
}
