export interface ArtistCardProps {
    artistName: string,
    artistLink: string,
    artistArt: string,
};

export function ArtistCard(props: ArtistCardProps) {
    return <div className="max-w-xs">
        <a href={props.artistLink}>
            <img 
                className="max-w-full rounded-md"
                src={props.artistArt} 
                alt={`Artist profile art for ${props.artistName}`} />
        </a>
        <div className="w-full flex flex-col justify-center">
            <a href={props.artistLink} className="text-center">{props.artistName}</a>
        </div>
    </div>
}