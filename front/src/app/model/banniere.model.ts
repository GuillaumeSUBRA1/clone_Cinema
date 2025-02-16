export interface IMenu{
  name: string; 
  route: string;
}

export const menuList: IMenu[] = [
  { name: 'Accueil', route: '/' }, 
  { name: 'Horaires', route: 'horaire' }, 
  { name: 'Réservations', route: 'reservation' },
  { name: 'Infos', route: 'info' }
];
