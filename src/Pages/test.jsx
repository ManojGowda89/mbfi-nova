import axios from "axios"

export default function Test(){

function click(e){
axios.get(" http://localhost:3000")
}
    return(
<>

<button onClick={click}>test</button>
</>

    )
}