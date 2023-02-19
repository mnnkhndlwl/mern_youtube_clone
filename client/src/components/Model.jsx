import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Avatar from "../assests/images/Avatar.png"
import { useSelector } from 'react-redux'
const DropDown = styled.div`
 position: absolute;
    top: 60px;
    z-index:10;
    padding:  10px 0;
    box-sizing: border-box;
    right: 20px;
    border-radius:8px;
    background-color: #202020;
    color: ${({ theme }) => theme.text};//var(--text-main);
    font-family: 'Roboto';
`

const DropDownItem = styled.div`
 display: flex;
    align-items: center;
    padding: 7px 20px;
    cursor: pointer;
    transition: .2s;

&:hover{
     background-color: ${({ theme }) => theme.secondary_light_color}
}

span{
    font-size: 30px;
}

 p{
    margin: 0;
    font-size: 15px;
    margin-left: 15px;
}

`

const EditProfile = styled(DropDownItem)`
  padding: 4px 10px;
    display: flex;
    img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}
`
const Line = styled.div`
 width: 100%;
    background-color: ${({ theme }) => theme.hover_text_color};
    height: 1px;
    margin: 8px 0;
    position: relative;
    border-radius: 4px;
`

const Model = () => {

    const navigate = useNavigate()
     const { currentUser } = useSelector(state => state.user)
  return (
       <DropDown >
                    <EditProfile onClick={()=>navigate('/profile')}>
                        <img src={currentUser.img} alt="Your Avatar" title='Avatar' />
                        <p>Edit Profile</p>
                    </EditProfile>
                    <Line/>
                    <>
                        <DropDownItem>
                            <span className='material-symbols-rounded' >
                                account_box
                            </span>
                            <p>Your Channel</p>
                        </DropDownItem>
                        <DropDownItem>
                            <span className='material-symbols-rounded' >
                                play_circle
                            </span>
                            <p>Youtube Studio</p>
                        </DropDownItem>
                        <DropDownItem>
                            <span className='material-symbols-rounded' >
                                logout
                            </span>
                            <p>Sign Out</p>
                        </DropDownItem>
                    </>
                 
                   
                    
                    
                </DropDown>
  )
}

export default Model
