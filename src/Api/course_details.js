 const BASE_URL = 'http://localhost/react_api';



 export const Course_detail = async () => {
     try {
         const response = await fetch(`${BASE_URL}/course_details.php?id=${id}`);
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         const data = await response.json();
         return data;
     } catch (error) {
        throw new Error(`Error fetching course_details data: ${error.message}`);
   }
 }