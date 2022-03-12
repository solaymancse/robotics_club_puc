import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiFacebookFill } from 'react-icons/ri'
import { Items,Links } from './SocialLinksElements'

export const SocialLinks = () => {
  return (
    <div>
        <Items>
            <Links target="_blank" href="https://www.facebook.com/Hophycare"><RiFacebookFill/></Links>
            <Links target="_blank" href="https://www.youtube.com/channel/UCYZXfIIJVO4ZDOfTBHbZ26w"><AiOutlineYoutube/></Links>
            <Links target="_blank" href="https://www.instagram.com/hophystartup/"><AiOutlineInstagram/></Links>
            <Links target="_blank" href="https://www.facebook.com/Hophycare"><AiOutlineWhatsApp/></Links>
            <Links target="_blank" href="https://www.linkedin.com/company/hophycare/?viewAsMember=true"><FaLinkedinIn/></Links>
        </Items>
    </div>
  )
}