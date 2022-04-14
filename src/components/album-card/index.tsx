export interface AlbumCardProps {
    albumName: string,
    albumLink: string,
    albumArt: string,
    artistName: string,
    artistLink: string,
};

export function AlbumCard(props: AlbumCardProps) {
    return <div className="max-w-sm">
        <a href={props.albumLink}>
            <img 
                className="max-w-full rounded-md"
                src={props.albumArt} 
                alt={`Album cover art for ${props.albumName} by ${props.artistName}`} />
        </a>
        <div className="w-full flex flex-col justify-center">
            <a href={props.artistLink} className="text-center">{props.artistName}</a>
            <a href={props.albumLink} className="text-center">{props.albumName}</a>
        </div>
    </div>
}