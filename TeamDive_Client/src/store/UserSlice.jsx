import { createSlice } from '@reduxjs/toolkit'
import {Cookies} from 'react-cookie'
const cookies = new Cookies()


const initialState={
    
    member_id:'',
    password:'',
    name:'',
    nickname:'',
    phone:'',
    email:'',
    zip_code:'',
    address:'',
    address_detail:'',
    address_extra:'',
    birth:'',
    gender:'',
    image:'',
    indate:'',
    provider:'',
    rolename:[],
    accessToken:'',
    refreshToken:'',
}

const getLoginUser=()=>{
    const memberInfo = cookies.get('user');
    if(memberInfo && memberInfo.member_id){
        memberInfo.member_id = decodeURIComponent(memberInfo.member_id);
        memberInfo.passowrd  = decodeURIComponent(memberInfo.password);
        memberInfo.name = decodeURIComponent(memberInfo.name);
        memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
        memberInfo.phone = decodeURIComponent(memberInfo.phone);
        memberInfo.email = decodeURIComponent(memberInfo.email);
        memberInfo.zip_code = decodeURIComponent(memberInfo.zip_code);
        memberInfo.address = decodeURIComponent(memberInfo.address);
        memberInfo.address_detail  = decodeURIComponent(memberInfo.address_detail);
        memberInfo.address_extra = decodeURIComponent(memberInfo.address_extra);
        memberInfo.birth = decodeURIComponent(memberInfo.birth);
        memberInfo.gender = decodeURIComponent(memberInfo.gender);
        memberInfo.image = decodeURIComponent(memberInfo.image);
        memberInfo.indate = decodeURIComponent(memberInfo.indate);
        memberInfo.provider = decodeURIComponent(memberInfo.provider);
        memberInfo.rolename = decodeURIComponent(memberInfo.rolename);
        memberInfo.accessToken = decodeURIComponent(memberInfo.accessToken);
        memberInfo.refreshToken = decodeURIComponent(memberInfo.refreshToken);
    };
    return memberInfo;
}

export const userSlice = createSlice(
    {
        name:'user',
        initialState : getLoginUser() || initialState,
        reducers:{
            loginAction :(state, action)=>{
                state.member_id = action.payload.member_id;
                state.password = action.payload.password;
                state.name = action.payload.name;
                state.nickname = action.payload.nickname;
                state.phone = action.payload.phone;
                state.email = action.payload.email;
                state.zip_code = action.payload.zip_code;
                state.address = action.payload.address;
                state.address_detail = action.payload.address_detail;
                state.address_extra = action.payload.address_extra;
                state.birth = action.payload.birth;
                state.gender = action.payload.gender;
                state.image = action.payload.image;
                state.indate = action.payload.indate;
                state.provider = action.payload.provider;
                state.rolename = action.payload.rolename;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
            },
            logoutAction :(state)=>{
                state.member_id = '';
                state.password = '';
                state.name = '';
                state.nickname = '';
                state.phone = '';
                state.email = '';
                state.zip_code = '';
                state.address = '';
                state.address_detail = '';
                state.address_extra = '';
                state.birth = '';
                state.gender = '';
                state.image = '';
                state.indate = '';
                state.provider = '';
                state.rolename = '';
                state.accessToken = '';
                state.refreshToken = '';
            }
        }
    }
)

export const { loginAction, logoutAction} = userSlice.actions
export default userSlice.reducer


