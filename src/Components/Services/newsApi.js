import axios from "axios";

const fetchQuery = ({ searchQuery = '', currentPage = 1, per_page = 12 }) => {
    return axios.get(
            `https://pixabay.com/api/?key=20298268-ad7854859c2b2dc6e8b44e367&q=
        ${searchQuery}&image_type=photo&page=${currentPage}&per_page=${per_page}`
        );
};
export default { fetchQuery };