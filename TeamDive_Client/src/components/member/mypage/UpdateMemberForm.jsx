import React,{ useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jaxios from '../../../util/JwtUtil'
import { useSelector, useDispatch } from 'react-redux'
import MypageMenu from './MypageMenu'

const UpdateMemberForm = () => {
    return (
        <div>
            <>여기는 개인정보 수정 폼</>
        </div>
    )
}

export default UpdateMemberForm
