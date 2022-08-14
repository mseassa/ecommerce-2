import baseUrl from "./../Api/baseURL";

const useUpdateDataWithImage = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await baseUrl.put(url, params, config);

    return res;
    };

    const useUpdatetData = async (url, params) => {
    const res = await baseUrl.put(url, params);

    return res;
};

export { useUpdatetData, useUpdateDataWithImage };
