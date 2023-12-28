const BASE_URL = 'http://localhost/react_api';



export const Events = async () => {
    try {
        const response = await fetch(`${BASE_URL}/events.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching events data: ${error.message}`);
    }
};