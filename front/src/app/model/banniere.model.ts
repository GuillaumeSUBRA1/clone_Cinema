export interface IMenu{
  name: string; 
  route: string;
}

export const menuList: IMenu[] = [
  { name: 'Accueil', route: '/' }, 
  { name: 'Réservations', route: 'reservation' },
];
