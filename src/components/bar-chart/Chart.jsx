import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import CustomBar from "./CustomBar";
import { useAuth } from "../auth/AuthContext";
import { GetChartActivity } from "../../crud/GetChartActivity";

const Chart = ({ activities, createSuccess, dataChartActivity }) => {
  const auth = useAuth()
  const [dateRange, setDateRange] = useState([]);
  const [filteredCal, setFilteredCal] = useState([]);
  const [cal, getCal] = useState(0);
  const [dataDuration, setDataDuration] = useState(null)

  function calorieCalculator(minutes) {
    return minutes * 13;
  }

  function calculateTotalDuration(data) {
    let totalDurationMinutes = 0;
    data.forEach(item => {
      totalDurationMinutes += item.totalDuration;
    });

    const hours = Math.floor(totalDurationMinutes / 60);
    const minutes = totalDurationMinutes % 60;

    return {
      totalDuration: totalDurationMinutes,
      hours: hours,
      minutes: minutes
    };
  }

  function getDay(num) {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = num - currentDay;
    today.setDate(today.getDate() + diff);

    const d = ['S', 'M', 'T', 'W', 'Th', 'F', 'S']
    const nameD = d[num]

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[num];

    const options = { day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    return [dayName, formattedDate, nameD];
  }

  function findTotalDuration(dayValue, data) {
    if (!Array.isArray(data)) {
      return
    } else {
      const filteredData = data.filter(item => item._id.day === dayValue);
      if (filteredData.length === 0) {
        return 0
      } else {
        return parseInt(filteredData[0].totalDuration, 10);
      }

    }
  }



  useEffect(() => {
    const user = auth.user;
    setFilteredCal([])


    if (user) {
      GetChartActivity(user._id).then(async (res) => {
        const result = await res;
        getCal(result.result)
        setDataDuration(calculateTotalDuration(result.result))
        let newFilteredCal = [];
        let newDateRange = [];
        for (let i = 1; i <= 7; i++) {
          let cal = findTotalDuration(i, result.result)
          let isCal13 = calorieCalculator(cal)
          let calObj = {
            name: getDay((i - 1))[2],
            date: getDay((i - 1))[0] + " " + getDay((i - 1))[1],
            cal: isCal13
          }
          if (i == 1 || i == 7) {
            newDateRange.push(getDay(i - 1)[0] + " " + getDay(i - 1)[1]);
          }
          newFilteredCal.push(calObj);
        }
        setFilteredCal(newFilteredCal);
        setDateRange(newDateRange);
      })
    }

  }, [auth.user, createSuccess, activities]);


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white rounded pb-1 w-[132px] h-[65px]">
          <p className="label font-roboto-mono text-sm px-[16px] pb-0">{`${payload[0].payload.date},`}</p>
          <p className="intro font-roboto-mono font-bold px-[16px] text-xl">{`${payload[0].payload.cal} cal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <container className="bg-[#2C2C2E] bg-opacity-60 bg-blur-xl flex lg:flex-row flex-col w-[343px] lg:w-[735px] h-[505px] lg:h-508 font-roboto-mono rounded-lg ">
        <div className="flex flex-col mt-[24px] w-512 h-400 lg:h-430">
          <heading className="w-156 h-41 mt-0 ml-[16px] lg:ml-[24px] absolute">
            <p className="text-white ">Weekly Performance</p>
            <p className="text-black-light text-[12px] lg:text-[16px]">({dateRange[0]} - {dateRange[1]})</p>
          </heading>

          {/* destop */}
          <chart className="h-373 mt-[118px] ml-2 lg:block hidden">
            <BarChart
              width={555}
              height={300}
              data={filteredCal}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} strokeOpacity='20%' stroke='#b4b5b7' />
              <XAxis dataKey="name" stroke='#b4b5b7' />
              <YAxis domain={[0, 1000]} stroke='#b4b5b7' />
              <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />

              <Bar dataKey="cal" fill={'#54D2FF'} shape={<CustomBar />} barSize={40} />

            </BarChart>
          </chart>

          {/* mobile */}
          <chart className="h-323 mt-[75px] ml-0 lg:hidden ">
            <BarChart
              width={353}
              height={300}
              data={filteredCal}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} strokeOpacity='30%' stroke='#b4b5b7' />
              <XAxis dataKey="name" stroke='#b4b5b7' />
              <YAxis domain={[0, 1000]} stroke='#b4b5b7' />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                content={<CustomTooltip />}

              />
              <Bar dataKey="cal" fill={'#54D2FF'} shape={<CustomBar />} barSize={20} />

            </BarChart>
          </chart>
        </div>

        <calculation className="text-white flex flex-row lg:flex-col items-start justify-center gap-8 pr-2">
          {dataDuration ? (<><div>
            <p>
              Total
            </p>
            <p className="text-blue font-orbitron font-bold text-xl">{dataDuration.totalDuration * 13} cal</p>
          </div>
            <div>
              <p>
                Duration
              </p>
              <p className="text-blue font-orbitron font-bold text-xl">{dataDuration.hours} hours <br />{dataDuration.minutes} minutes</p>
            </div></>) : ''}

        </calculation>
      </container>
    </>
  )
}


export default Chart;