import React from 'react'
const Contactcard=props=>{
    const [showage,setshowage]=React.useState(false)
    return(
        <div className="card col-lg-6 col-md-12 col-12 ">
            <div className="card-body d-flex">
                <img src={props.url} 
                alt="AvatorPicture" />
                <div className="mx-3">
                    <p>Name :{props.fname}&nbsp;{props.name}</p>
                    <p>Email :{props.email}</p>
                    <button onClick={()=>setshowage(!showage)} aria-label='show age'>show age</button>
                    {
                        showage? <p>Age :{props.age}</p>:null
                    }
                </div>
            </div>
        </div>
    )
}
export default Contactcard