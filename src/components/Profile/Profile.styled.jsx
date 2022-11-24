
import styled from 'styled-components';


export const ProfileWrspper = styled.div`
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.medium};
width: 250px;
color: ${p => p.theme.colors.text};
background: ${p => p.theme.colors.primary};
border-radius: ${p => p.theme.radii.sm};
box-shadow: 5px -5px 40px ${p => p.theme.colors.primary};
overflow: hidden;

`
export const ProfileDescription = styled.div`
padding: ${p => p.theme.space[4]}px;
 display: flex;
justify-content: center;
  align-items: center;
  flex-direction: column;
background: ${p => p.theme.colors.white};
p{
   margin-bottom: ${p => p.theme.space[1]}px;
}
`
export const ProfileImg = styled.img`
width: 100px;
border-radius: ${p => p.theme.radii.round};
margin-bottom:  ${p => p.theme.space[5]}px;
`


export const ProfileName = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
color: ${p => p.theme.colors.black};
`

export const ProfileStarts = styled.ul`
list-style: none;
 display: flex;
 justify-content: space-around;
padding: 0;
margin: 0;
border-top: 1px solid ${p => p.theme.colors.primary};
`

export const ProfileStartsItem = styled.li`
list-style: none;
text-align: center;
width: 100%;
 display: flex;
flex-direction: column;
justify-content: space-around;
gap: ${p => p.theme.space[2]}px;
padding:${p => p.theme.space[3]}px; ;
border-right: 1px solid ${p => p.theme.colors.primary};
font-size: ${p => p.theme.fontSizes.m};
`


export const StatsQuantity = styled.span`
text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
`