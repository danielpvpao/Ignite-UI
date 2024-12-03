import { styled } from "@stitches/react";
import { Component } from "react";
import { X } from "phosphor-react";
 const ToastContainer = styled('div', {
    backgroundColor: '$gray800',
    padding: '$3 $5',
    borderRadius: '6px',
    border: '1px solid $gray600',
    width: '360px',
    display:'flex',
    alignItems:'flex-start',
    justifyContent: 'space-between',
    margin: '12rem auto',
    svg: {
        alignItems: 'end',
        color: '$gray200',
        marginTop:'1rem'
    }
})
const Text = styled('div', {
    height: '70%',
})
const ToastText = styled ('h1', {
fontFamily: 'Roboto',
fontSize: '$xl',
fontWeight: '700',
color:'$white',
})
const ToastP = styled ('p', {
color: '$gray200',
fontFamily: 'Roboto',
fontWeight:'400',
fontSize:'0.875rem'
})
export interface ToastProps extends Component<typeof ToastContainer> {
    DayInText: string,
    Day: string,
    Month: string,
    hour: string,
}
export function Toast({DayInText, Day, Month, hour}: ToastProps){
    return(
        <ToastContainer>
            <Text>
                <ToastText>
                Agendamento realizado
                </ToastText>
                <ToastP>
                {`${DayInText}, ${Day} de ${Month} às ${hour}`}
                </ToastP>
            </Text>
        <X  size={20}/>
        </ToastContainer>
    )
}
