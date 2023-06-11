import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

const Dropdown = (props: any) => {
    const { onClick,onClickSignup } = props;
    return (
        < Popover.Root >
            <Popover.Trigger asChild>

                <button className='cursor-pointer'>Account</button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    className="rounded p-5 w-[120px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    <button onClick={onClick} className='cursor-pointer' >Logout</button>
                    <button onClick={onClickSignup} className='cursor-pointer' >Home</button>

                    <Popover.Arrow className="fill-white" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root >
    );
}
export default Dropdown;