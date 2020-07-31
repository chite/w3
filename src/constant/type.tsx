export interface SongType {
    name: string;
    duration: number;
    pt: string;
    date: string;
}

export interface AlbumType{
    name: string;
    date: string;
    pt: string;
}

export interface ModelType{
    playingMode: string;
    suspended: boolean;
    playing: number[];
    albums: AlbumsType[];
    advertise: boolean;
    openAdvertise: boolean;
    openBar: boolean;
}
export interface AlbumsType {
    singer: string;
    info: string;
    followers: number;
    followed: boolean;
    top: number[];
    latest: number;
    songs: SongType[];
};

export interface Action{
    type: string;
    index?: number;
    message?: string;
    state?: boolean;
}
