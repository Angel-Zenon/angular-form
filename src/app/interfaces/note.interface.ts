
export const PRIORITIES = ['Alta', 'Media', 'Baja'] as const;
export type ItemPriority = (typeof PRIORITIES)[number];

export interface Note {
    id : number,
    description : string,
    createdAt : Date,
    priority : ItemPriority
}