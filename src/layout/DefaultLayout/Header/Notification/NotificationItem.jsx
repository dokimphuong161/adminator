//mui
import {
    Avatar,
    Divider,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// icons
import { AiOutlineComment, AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineCallToAction } from 'react-icons/md';
import { TbCake } from 'react-icons/tb';

const TypeNotifyTypography = styled(Typography)({
    fontSize: '14px',
});

const NameNotifyTypography = styled(Typography)({
    fontSize: '14px',
    fontWeight: 600,
    paddingLeft: 0,
    paddingRight: 0,
});
const NotificationItem = ({ item }) => {
    console.log(item);
    return (
        <>
            <ListItemButton>
                <ListItemAvatar>
                    {item.type === 'birthday' && (
                        <Avatar sx={{ bgcolor: '#e8f5e9', color: '#43a047' }}>
                            <TbCake />
                        </Avatar>
                    )}
                    {item.type === 'comment' && (
                        <Avatar sx={{ bgcolor: '#e1f5fe', color: '#0288d1' }}>
                            <AiOutlineComment />
                        </Avatar>
                    )}
                    {item.type === 'setting' && (
                        <Avatar sx={{ bgcolor: '#fffde7', color: '#fbc02d' }}>
                            <AiOutlineSetting />
                        </Avatar>
                    )}
                    {item.type === 'invite' && (
                        <Avatar sx={{ bgcolor: '#ffebee', color: '#d32f2f' }}>
                            <MdOutlineCallToAction />
                        </Avatar>
                    )}
                </ListItemAvatar>
                <ListItemText
                    primary={
                        (item.type === 'birthday' && (
                            <TypeNotifyTypography>
                                It's <NameNotifyTypography component={'span'}>{item.name}'s</NameNotifyTypography>{' '}
                                birthday today
                            </TypeNotifyTypography>
                        )) ||
                        (item.type === 'comment' && (
                            <TypeNotifyTypography>
                                <NameNotifyTypography component={'span'}>{item.name}</NameNotifyTypography> commented
                                your post
                            </TypeNotifyTypography>
                        )) ||
                        (item.type === 'setting' && (
                            <TypeNotifyTypography>
                                <NameNotifyTypography component={'span'}>{item.name}</NameNotifyTypography> was setting
                                profile
                            </TypeNotifyTypography>
                        )) ||
                        (item.type === 'invite' && (
                            <TypeNotifyTypography>
                                <NameNotifyTypography component={'span'}>{item.name}</NameNotifyTypography> invited to
                                join metting
                            </TypeNotifyTypography>
                        ))
                    }
                    secondary={
                        <Typography sx={{ fontSize: '14px', paddingLeft: '16px' }}>{item.durationTime}</Typography>
                    }
                />
                <ListItemSecondaryAction>
                    <Typography sx={{ fontSize: '13px' }}>{item.sendTime}</Typography>
                </ListItemSecondaryAction>
            </ListItemButton>
            <Divider />
        </>
    );
};

NotificationItem.propTypes = {};

export default NotificationItem;
