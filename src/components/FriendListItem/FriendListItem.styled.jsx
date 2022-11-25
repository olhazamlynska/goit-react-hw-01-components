import styled from 'styled-components';

export const FriendItem = styled.li`
list-style: none;
display: flex;
align-items: center;
justify-content: start;
width: 250px;
padding-left:${p => p.theme.space[2]}px;
margin-bottom: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.sm};
box-shadow: 5px -5px 20px ${p => p.theme.colors.primary};
`

export const FriendOnline= styled.span`
background: ${p => p.online ? 'green' : 'red'};
width: 20px;
height: 20px;
margin-right: ${p => p.theme.space[3]}px;
border-radius: ${p=>p.theme.radii.round};
`

export const FriendImg= styled.img`
margin-right: ${p => p.theme.space[3]}px;

`