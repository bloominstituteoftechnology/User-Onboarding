

export default function User({ details }){
    if(!details){
        return <h3>Fetching User Data</h3>
    }

    return(
        <div>
            <h3>{`Name: ${details.first_name} ${details.last_name}`}</h3>
            <h3>{`Email: ${details.email}`}</h3>
        </div>


    )
}