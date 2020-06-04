import { Item } from './Item';
import { ItemCategory } from './ItemCategory';
import { Audience } from './Audience';

export const ITEMCATEGORY: ItemCategory[] = [
  { id: 11, code: 'C11', name: 'Clothes', desc: 'Clothes'},
  { id: 21, code: 'C21', name: 'Food', desc: 'Food'},
  { id: 31, code: 'C31', name: 'Stationary', desc: 'Stationary'},
  { id: 41, code: 'C41', name: 'Time', desc: 'Time'},
  { id: 51, code: 'C51', name: 'Services', desc: 'Services'},
  { id: 61, code: 'C61', name: 'Toys', desc: 'Toys'},
  { id: 71, code: 'C71', name: 'Other', desc: 'Other'}

];

export const ITEMS: Item[] = [
    {id: 1, code: 'I1', desc: 'Clothes', category: ITEMCATEGORY[0]},
    {id: 2, code: 'I2', desc: 'Food Items', category: ITEMCATEGORY[1]},
    {id: 3, code: 'I3', desc: 'Books and Stationary', category: ITEMCATEGORY[2]},
    {id: 4, code: 'I4', desc: 'Time', category: ITEMCATEGORY[3]},
    {id: 5, code: 'I5', desc: 'Services', category: ITEMCATEGORY[4]},
    {id: 6, code: 'I6', desc: 'Toys', category: ITEMCATEGORY[5]},
    {id: 7, code: 'I7', desc: 'Other', category: ITEMCATEGORY[6]}
];

export const AUDIENCE: Audience[] = [
  { id: 11, name: 'Animals', desc: 'Animals'},
  { id: 21, name: 'Orphans', desc: 'Orphans'},
  { id: 31, name: 'Differently abled', desc: 'Differently abled'},
  { id: 41, name: 'Environment', desc: 'Environment'},
  { id: 51, name: 'Old Age home members', desc: 'Old Age home members'},
  { id: 61, name: 'Refugees', desc: 'Refugees'},
  { id: 71, name: 'Disaster affected', desc: 'Disaster affected'},
  { id: 81, name: 'Other', desc: 'Otherd'}
];




