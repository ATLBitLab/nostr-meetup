
type TagProps = {
    name: string,
    slug: string
}

export default function Tag({name, slug}: TagProps){
    return(
        <>
            <span data-slug={slug} className="bg-blue-300 font-light p-2 inline-block rounded">
                {name}
            </span>
        </>
    )
}