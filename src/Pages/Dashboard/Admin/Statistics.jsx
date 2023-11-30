import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import SectionTitle from '../../../Components/SectionTitle';
import Chart from 'chart.js/auto';

const Statistics = () => {
    const [bookingData, setBookingData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('rapid-routify-server.vercel.app/parcels');
                const data = await response.json();
                console.log(data);
                setBookingData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (bookingData.length > 0) {
            const timeoutId = setTimeout(() => {
                if (chartRef.current) {
                    chartRef.current.destroy();
                }

                const bookingCounts = {};
                bookingData.forEach(booking => {
                    const date = booking.bookingDate;
                    bookingCounts[date] = (bookingCounts[date] || 0) + 1;
                });

                const chartData = {
                    labels: Object.keys(bookingCounts),
                    datasets: [
                        {
                            label: 'Number of Bookings',
                            data: Object.values(bookingCounts),
                            backgroundColor: 'rgba(54, 162, 235, 0.6)', 
                            borderWidth: 0,
                        },
                    ],
                };

                const chartOptions = {
                    scales: {
                        x: {
                            type: 'category',
                            title: { display: true, text: 'Booking Date', fontSize: 16 },
                            grid: { display: false },
                        },
                        y: {
                            title: { display: true, text: 'Number of Bookings', fontSize: 16 },
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                };

                const ctx = document.getElementById('myChart');
                chartRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: chartOptions,
                });
            }, 100);

            return () => clearTimeout(timeoutId); 
        }
    }, [bookingData]);

    return (
        <div className='max-h-[700px]'>
            <SectionTitle heading={'Your'} headingBold={'Dashboard'} subHeading={'All info is here in charts'} />
            <div className='h-[580px] w-[700px] mx-auto'>
                <canvas id="myChart" style={{ height: '500px', width: '700px' }}></canvas>
            </div>
        </div>
    );
};

export default Statistics;
