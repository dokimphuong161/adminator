import axiosClient from './axiosClient';

const customerApi = {
    getAllCustomer(params) {
        const url = '/customers';
        return axiosClient.get(url, { params });
    },

    getCustomer(id) {
        const url = `/customers/${id}`;
        return axiosClient.get(url);
    },
    addCustomer(data) {
        const url = '/customers';
        return axiosClient.post(url, data);
    },

    updateCustomer(data) {
        const url = '/customers';
        return axiosClient.patch(url, data);
    },

    removeCustomer(id) {
        const url = `/customers/${id}`;
        return axiosClient.delete(url);
    },
};

export default customerApi;
