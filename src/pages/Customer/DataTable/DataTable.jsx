import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useMemo, useState } from 'react';
import swal from 'sweetalert';

import { Avatar, IconButton, Tooltip, Modal, Fade, Box, Backdrop, Typography, Button } from '@mui/material';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import customerApi from '~/api/customerApi';

const DataTable = () => {
    const [rowPage, setRowPage] = useState(5);
    const [customers, setCustomers] = useState([]);
    console.log(customers);
    const fetchCustomers = async () => {
        const customerList = await customerApi.getAllCustomer();
        setCustomers(customerList);
    };
    // Call API get all customer
    useEffect(() => {
        fetchCustomers();
    }, []);
    const handleSetRowPerPage = (event, newValue) => {
        setRowPage(newValue);
    };
    const [selectID, setSelectID] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        handleOpen();
        setSelectID(id);
    };

    const useDeleteData = () => {
        const deleteItem = async () => {
            await customerApi.removeCustomer(selectID).then(fetchCustomers);
        };
        deleteItem();
        handleClose();
        swal({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
            button: 'Aww yiss!',
        });
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const columns = useMemo(
        () => [
            { field: 'id', headerName: 'ID', width: 70, align: 'center', headerAlign: 'center' },
            {
                field: 'avatar',
                headerName: 'Avatar',
                align: 'center',
                headerAlign: 'center',
                width: 100,
                renderCell: (params) => {
                    return <Avatar src={params.row.avatar} />;
                },
                sortable: false,
                filterable: false,
            },
            { field: 'name', headerName: 'Name', minWidth: 120, maxWidth: 240, flex: 0.5 },
            { field: 'email', headerName: 'Email', minWidth: 190, maxWidth: 290, flex: 1 },
            { field: 'location', headerName: 'Location', width: 200 },

            { field: 'phone', headerName: 'Phone', width: 120 },
            {
                field: 'action',
                headerName: 'Action',
                width: 120,
                align: 'center',
                headerAlign: 'center',
                renderCell: (params) => {
                    return (
                        <>
                            <Tooltip title="Edit">
                                <IconButton sx={{ backgroundColor: '#e8f5e9', color: '#43a047' }}>
                                    <AiOutlineEdit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton
                                    onClick={() => handleDelete(params.row.id)}
                                    sx={{ backgroundColor: '#ffebee', color: '#b71c1c', marginLeft: '6px' }}
                                >
                                    <AiOutlineDelete />
                                </IconButton>
                            </Tooltip>
                        </>
                    );
                },
            },
        ],

        [],
    );
    return (
        <>
            <div style={{ height: '450px', width: '100%' }}>
                <DataGrid
                    rows={customers}
                    columns={columns}
                    pageSize={rowPage}
                    onPageSizeChange={(newValue) => handleSetRowPerPage(newValue)}
                    rowsPerPageOptions={[5, 10, 25]}
                    getRowId={(row) => parseInt(row.id)}
                    checkboxSelection
                />
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Are you sure?
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Once deleted, yout will not be able to recover this Data
                        </Typography>
                        <Button onClick={useDeleteData}>Yes</Button>
                        <Button onClick={handleClose}>No</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default DataTable;
