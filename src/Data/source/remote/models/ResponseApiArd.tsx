export interface ResponseApiArd {
    success: boolean;
    message: string;
    data: SensorData[];
  }
  
  export interface SensorData {
    id: number;
    humidity: number;
    temperature: number;
  }
  