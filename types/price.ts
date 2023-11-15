
export interface option {
    title: string;
    description?: string;
    price?: number;
    fixed?: number;
    offers?: Offer[];
    questions?: question[];
    force?: boolean;
}

export interface question {
    title: string;
    description?: string;
    questions?: question[];
    options?: option[];
}

export interface Offer {
    text: string;
    active: boolean;
}