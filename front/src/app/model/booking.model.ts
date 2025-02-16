import { FormControl } from "@angular/forms";
import { Session } from "./session.model";
import { IPicture } from "./picture.model";

export interface NewBook {
    session: number;
    email?: string;
    seats: number;
}

export interface SearchBook {
    id: number;
    session: Session;
    email?: string;
    seats: number;
    cover: IPicture;
}

export type NewBookForm = {
    email: FormControl<string | null>;
    seats: FormControl<number>;
}
