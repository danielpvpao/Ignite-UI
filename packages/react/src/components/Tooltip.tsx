import { styled } from "@stitches/react";
import { ComponentProps } from "react";

const TooltipBallon = styled('div',{
display: 'flex',
alignItems: 'center',
justifyContent:'center',
padding: '$3 $4',
backgroundColor: '$gray900',
borderRadius: '5px',
color: '$gray100',
width: '190px',
height:'22px',
fontFamily: 'Inter',
fontWeight: '500',
gap: '8px',
lineHeight: '$5',
fontSize: '14px',
whiteSpace: 'nowrap'
})
const TooltipArrow = styled('div', {
    width: 0,
    height: 0, 
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid $colors$gray900',
});

const TooltipContainer = styled('div',{
display: 'flex',
flexDirection: 'column',
position: 'absolute',
alignItems: 'center',
bottom: '3rem',
justifyContent: 'center',
overflow:'hidden',
variants:{
    Visibility: {
        Visible: {
            opacity: 1,
        },
        Invisible: {
            opacity: 0,
        }
    },
}
})
export interface TooltipProps extends ComponentProps<typeof TooltipContainer>{
    Day: string,
    Month: string, 
    Availability: string,
    Visibility?: 'Visible' | 'Invisible';
}
export function Tooltip({Day, Month, Availability, Visibility}: TooltipProps){
    return(
        <TooltipContainer Visibility={Visibility}>
                <TooltipBallon>
                    {`${Day} de ${Month} - ${Availability}`}
                </TooltipBallon>
                <TooltipArrow />
        </TooltipContainer>
    )
}
