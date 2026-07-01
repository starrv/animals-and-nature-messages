export const defaultErrorMsg="There was a problem reading messages.  Please contact IT support :(";

export default function Error({error}:{error:Object}){
    
    console.error(defaultErrorMsg,JSON.stringify(error));
    
    return(
        <p className="text-red-500 text-center">
           {defaultErrorMsg}
        </p>
    );
}