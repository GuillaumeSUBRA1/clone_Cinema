import { IPicture } from "./picture.model";

export interface IMovie{
    id: number;
    adminId: number;
    title: string;
    pictures: Array<IPicture>;
    summary?: string;
    duration: number;
    actors: string;
    gender: string;
    producer: string;
    release: string;
}

export interface DisplayMovieCard{
    id: number;
    title: string;
    cover: IPicture;
}

export const columns = ['titre', 'resume', 'sortie'];