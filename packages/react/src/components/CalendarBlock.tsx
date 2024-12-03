import { styled } from "@stitches/react";
import { Component } from "react";

export const CalendarBlock = styled('div', {
backgroundColor: '$gray600',
borderRadius: '6px',
display:'flex',
width: '1.2rem',
height: '1.62rem',
alignItems: 'center',
justifyContent: 'center',
fontFamily: 'Roboto',
padding: '$4 1.625rem ',
color: '$colors$white',
fontWeight: '400',
fontSize: '$4',
lineHeight:'25px',
cursor: 'pointer',
})
export interface CalendarBlockProps extends Component<typeof CalendarBlock>{}