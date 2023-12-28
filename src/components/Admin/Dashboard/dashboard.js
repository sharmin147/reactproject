
import React from "react";
import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";
import Nav from "../Layout/Nav";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line }
    from 'recharts';
function Dashboard() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div className="grid-container">
            <Nav />
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">

                    <div className="container mt-4 text-center">
                        <h1>Dashboard Content</h1>
                        <div className="row">
                            <div className="col-md-4 mx-auto">
                                <div className="card">
                                    <div className="card-header bg-success text-white">
                                        Teachers
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title bg-success text-white">Teachers Details</h5>
                                        <p className="card-text">Description of teachers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mx-auto">
                                <div className="card">
                                    <div className="card-header bg-info text-white">
                                        Course
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title bg-info text-white">Course Details</h5>
                                        <p className="card-text">Description of Course.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mx-auto">
                                <div className="card">
                                    <div className="card-header bg-warning text-white">
                                        Blog
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title bg-warning text-white">Blog Details</h5>
                                        <p className="card-text">Description of Course.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className='charts'>
                    <h4>Bar chart</h4>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;



















