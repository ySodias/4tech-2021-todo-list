import React from 'react';
import styled from 'styled-components'

import Avatar1 from '../../../assets/avatar1.png'
import Avatar2 from '../../../assets/avatar2.png'
import Avatar3 from '../../../assets/avatar3.png'
import Avatar4 from '../../../assets/avatar4.png'


import { Card, Avatar } from 'antd'

//toda função sem objeto propredade possui props
export const TaskCard = ({whatToDo, who, priority}) => {

  const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  `

  const urgencyColorPalette = [
    {urgency: 'low', color: '#71A1FF'},
    {urgency: 'average', color: '#FF88D26'},
    {urgency: 'high', color: '#FF7171'},
  ];


    const getPriorityAntSetIntoTitle = () => {

      const CardTitle = styled.div`
      display: flex;
      align-items: center;`
      
      

      const ColorBlock = styled.span`
      display: inline-block;
      height: 1rem;
      width: 1rem;
      background-color: ${urgencyColorPalette.find(x => x.urgency === priority).color}; //procurando na palheta de cores e passa pro background color
      margin-left: 1rem;
      `

     

      return <CardTitle> Priority <ColorBlock /></CardTitle>
    }

    const getCardButtons = () => {
      return <span> Buttons </span>
    }

    const generateWhoOnFooter = () => {
      const availableAvatars = [
        { avatarIndex: 1, avatarSource: Avatar1 },
        { avatarIndex: 2, avatarSource: Avatar2 },
        { avatarIndex: 3, avatarSource: Avatar3 },
        { avatarIndex: 4, avatarSource: Avatar4 },
      ]
      const selectedAvatar = availableAvatars.find(x => x.avatarIndex = who)
      return <Avatar src={
        <img src={selectedAvatar.avatarSource} alt="Selected Avatar" />
      }/>
    }


    return <Card size="small" title={getPriorityAntSetIntoTitle()} extra={getCardButtons()}>
      <div>
        {whatToDo}
      </div>
      <Footer>
        <span> Create at {new Date().toLocaleDateString()}</span>
        <span> {generateWhoOnFooter()} </span>
      </Footer>
    </Card>
}