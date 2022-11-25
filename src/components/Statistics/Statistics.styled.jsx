import styled from 'styled-components';


export const StatisticWrap = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 500px;
margin-top:${p => p.theme.space[5]}px;
margin-bottom:${p => p.theme.space[5]}px;
box-shadow: 5px -5px 40px ${p => p.theme.colors.primary};

`


export const StatisticSection = styled.div`
width: 100%;
border-radius: ${p => p.theme.radii.sm};
border-right: 1px solid  ${p => p.theme.colors.primary};
`

export const StatisticList= styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
justify-content:space-around;
align-items:center;

`


export const StatisticItem = styled.li`
display: flex;
flex-direction:column;
flex-grow:1;
background: ${p =>{switch (p.label) {
   case ".docx":
      return 'blue';
   case ".pdf":
      return 'red';
   case ".mp3":
      return 'green';
   case ".psd":
      return 'gray';
   default:
   } 
   }};

`



