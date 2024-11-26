export interface IMenu{
  name: string; 
  route: string;
}

export const menuList: IMenu[] = [
  { name: 'Accueil', route: 'accueil' }, 
  { name: 'Horaires', route: 'horaires' }, 
  { name: 'Réservation', route: 'reservation' },
  { name: 'Infos', route: 'infos' }
];
