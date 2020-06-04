import { Audience} from '../_models/Audience';
import { Item } from '../_models/Item';
import { ItemCategory } from './ItemCategory';
import { required, prop, propObject, propArray } from '@rxweb/reactive-form-validators';

export class Campaign {
    public constructor(init?: Partial<Campaign>) {
        Object.assign(this, init);
    }

    id: number;
    title: string;
    description: string;

   // @propArray(Audience)
    audience: Audience[];

   // @propArray(ItemCategory)
    giftCategories: ItemCategory[];

    giftLimit: number;
    giftsReceived: number;

    pickedup: string; 
    startDate: string;
    endDate: string;
}
