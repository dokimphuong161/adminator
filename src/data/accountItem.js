import { BiUser } from 'react-icons/bi';
import { AiOutlineEdit, AiOutlineComment } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs';

export const accountItems = {
    profileAccount: [
        {
            id: 1,
            title: 'View profile',
            icon: <BiUser />,
        },
        {
            id: 2,
            title: 'Edit Profile',
            icon: <AiOutlineEdit />,
        },
        {
            id: 3,
            title: 'Logout',
            icon: <IoIosLogOut />,
        },
    ],
    profileSetting: [
        {
            id: 1,
            title: 'Support',
            icon: <MdOutlineContactSupport />,
        },
        {
            id: 2,
            title: 'Feedback',
            icon: <AiOutlineComment />,
        },
        {
            id: 3,
            title: 'History',
            icon: <BsClockHistory />,
        },
    ],
};
