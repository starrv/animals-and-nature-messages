export default function Message({message}:{message:Message}){
    return(
        <article className="mx-auto my-8 border rounded p-4">
            <p className="break-all">
                {message.content}
            </p>
        </article>
    )
}