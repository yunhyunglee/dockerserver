import { useState } from "react"




const JoinForm = () => {

    const [memberId, setMemberId] = useState('');
    const [password,setPassword] = useState('');
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    
    const [image, setImage] = useState('');
    const [address,setAddress] = useState('');
    const [addressDetail,setAddressDetail] = useState('');
    const [addressExtra,setAddressExtra] = useState('');
    const [zipCode,setZipCode] = useState('');




    return (
        <div>
            <div>
                <label htmlFor="memberId" />
                <input type="text" value={memberId} id="memberId" onchange={(e)=>{setMemberId(e.currentTarget.value)}}></input>
            </div>
            <div>
                <label htmlFor="password" />
                <input type="text" value={password} onchange={(e)=>{setMemberId(e.currentTarget.value)}}></input>
            </div>
            <div>
                <label htmlFor="memberId" />
                <input type="text" value={memberId} onchange={(e)=>{setMemberId(e.currentTarget.value)}}></input>
            </div>
            <div>
                <label htmlFor="memberId" />
                <input type="text" value={memberId} onchange={(e)=>{setMemberId(e.currentTarget.value)}}></input>
            </div>
            <div>
                <label htmlFor="memberId" />
                <input type="text" value={memberId} onchange={(e)=>{setMemberId(e.currentTarget.value)}}></input>
            </div>
        </div>
    )






}
