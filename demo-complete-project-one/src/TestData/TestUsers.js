import { v4 as uuid } from 'uuid';

const users = [
    {
      id: uuid(),
      name: 'Aldo',
      age: 26,
    },
    {
      id: uuid(),
      name: 'Juan',
      age: 18,
    },
    {
      id: uuid(),
      name: 'Pollo',
      age: 23,
    }
];

export { users as default };