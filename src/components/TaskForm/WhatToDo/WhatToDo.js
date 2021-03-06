import React from 'react';
import styled from 'styled-components'

export const WhatToDo = () => {

  const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  `

  const WhatToDoLabel = styled.div`
  font-size: 30px;
  `

  const InputWhatToDO = styled.input`
  background-color: #FFFFFF;
  box-shadow: 5px 5px 10px #A9C4DA;
  border-radius: 5px;
  border: 0;
  height: 5rem;
  outline: none;
  `  
  

  return <FormItem>
    <WhatToDoLabel> What to do? </WhatToDoLabel>
    <InputWhatToDO/>
  </FormItem>
}