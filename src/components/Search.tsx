export default function Search({setSearchBy}:{setSearchBy:Function}){

    return(
        <section className="text-center mx-auto my-2">
            <label htmlFor="search">
                Search:
            </label>
            <input className="border rounded p-2 m-2" type="text" name="search" id="search" onChange={e=>setSearchBy(e.target.value)} />
        </section>
    )
}