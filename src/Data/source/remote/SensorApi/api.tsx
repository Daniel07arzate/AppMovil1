const fetchSensorData = async () => {
    try{
        const response = await fetch('http://localhost:3000/api/datos');
        const data = await response.json();
        return data;
    }catch(error){
        console.error('ERROR FETCHING SENSOR DATA: ', error);
        throw error;
    }
};

export { 
    fetchSensorData 
}