import React from 'react'
import {Line , Doughnut} from "react-chartjs-2"
import { Chart as ChartJs 
  ,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend, 
  plugins,
  scales,
} from 'chart.js'
import { getLastDays } from '../../libs/features';
import zIndex from '@mui/material/styles/zIndex';

ChartJs.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
   Legend

);

const label = getLastDays();

const lineCharOption = {
    
  responsive : true,
  plugins :{
      legend :{
        display: false,
      
      },
      title : {
        display : false
      },
  },
  scales :{
          x:{
            grid :{
              display : false,
            },
          },
          y : {
            beginAtZero : true,
            grid :{
              display : false,
            },
          },
  },
};

const LChart = ({dataArray = []}) => {

    const data = {
       labels : label,
      datasets: [{
        data :dataArray,
        label : "Messages",
        fill : true,
        backgroundColor : "rgba(75, 12, 192, 0.2)",
        borderColor : "rgba(75,12, 192, 1)"
      } ,
    
    ]
    }
    return <Line data={data} options={lineCharOption} />
      
  }


  const option = {
    responsive : true,
    plugins :{
        legend :{
          display: false,
        
        },
    },
    cutout :"60%"
  }
  
  const DChart = ({ labels =[], dataArray=[] }) => {
    const data = {
      labels: labels,
      datasets: [{
        data: dataArray,
        backgroundColor: ['rgba(75, 12, 192, 0.2)', 'orange'],
        hoverBackgroundColor :["purple" , "pink"],
        borderColor: ['rgba(75, 12, 192, 1)', 'orange'],
        offset :40,
      }]
    };
  
    return <Doughnut style={{zIndex : 10}}
  
    data={data} 
    options={option} />;
  }

export   {LChart , DChart};




