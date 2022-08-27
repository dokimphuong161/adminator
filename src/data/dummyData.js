// Theme colors
export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },

    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#ff4081',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
];

export const notifications = [
    {
        id: 1,
        name: 'Christina',
        sendTime: '3:00 AM',
        durationTime: '2 hours',
        type: 'birthday',
    },
    { id: 2, name: 'John Doe', sendTime: '3:00 PM', durationTime: '3 days', type: 'comment' },
    { id: 3, name: 'Martin', sendTime: '6:00 AM', durationTime: '2 days', type: 'setting' },
    { id: 4, name: 'Mariana', sendTime: '9:00 AM', durationTime: '5 days', type: 'invite' },
];

// Data table config table
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },

    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
    },
];
