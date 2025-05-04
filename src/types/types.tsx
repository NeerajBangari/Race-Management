export interface Race {
    id: number;
    name: string;
    date: string;
    location: string;
    type: string;
  }
  
  export interface LiveScore {
    userId: string;
    raceName: string;
    time: string;
    position: number;
  }