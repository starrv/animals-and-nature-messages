export const ASCENDING_DATE="Ascending Date";
export const DESCENDING_DATE="Descending Date";

export default function Sort({setSortBy}:{setSortBy:Function}){
    return(
        <section className="text-center mx-auto my-2">
            <label htmlFor="sort">
                Sort:
            </label>
            <select onChange={e=>setSortBy(e.target.value)}>
                <option value={ASCENDING_DATE}>
                    {ASCENDING_DATE}
                </option>
                <option value={DESCENDING_DATE}>
                   {DESCENDING_DATE}
                </option>
            </select>
        </section>
    )
}