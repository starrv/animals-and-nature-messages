export default async function Error({error}:{error:Object}){
    
    console.error("An error has occurred reading messages....",JSON.stringify(error));
    
    return(
        <p className="text-red-500 text-center">
           An error has occurred reading messages.  Please contact IT support :(
        </p>
    );
}