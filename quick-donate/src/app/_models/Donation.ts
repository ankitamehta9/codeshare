import { Item } from './Item';
export class Donation {
    public constructor(init?: Partial<Donation>) {
        Object.assign(this, init);
    }

    id: number;
    description: string;
    items: Item[];
    giftsReceived: number  //itemCount
    receivedBy: string
    campaignID: number
    active: string
}
