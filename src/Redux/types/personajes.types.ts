
export default interface Personaje {
    id: number;
    name:string;
    status: string;
    image:string;
    species:string;
    episode:string[];
    gender: string;
    origin: {name: string, url:string};
}

