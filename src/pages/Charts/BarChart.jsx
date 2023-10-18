import React from "react";
import Chart from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'
import { useStateContext } from "../../contexts/ContextProvider";



const BarChart =()=>{
const {currentColor} = useStateContext()
    const data={
         labels:[ '2017','2018','2019','2020','2021','2022','2023' ],
        datasets:[
            {
                label:'Year',
                data:[300,332,176,420,160,302,135],
                borderColor:currentColor,
                backgroundColor:'pink',
                borderWidth:2,
                tension:0.5,
                
                
            },
             {
                label:'Mean Grade',
                data:[225,437,203,305,250,100,115],
                borderColor:'black',
                backgroundColor:currentColor,
                borderWidth:2,
                tension:0.5
                
                
            },
        ],
    };
    const options={
        responsive:true,
         
            scales:{
                y:{
                    beginAtZero:true,
                },
               
              
            }
    };
    
    return <Bar data={data} options={options} />
};
export default BarChart