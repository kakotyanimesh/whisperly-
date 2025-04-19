import { auth } from "../../../../auth"


export default async function dashboard() {
    const session = await auth()
    return (
        <div>
            {
                JSON.stringify(session)
            }
            <h1>bew </h1>
        </div>
    )
}