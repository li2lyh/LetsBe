import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainView = () => {
    // 상태 선언
    const [stats, setStats] = useState({
        title: '',
        bio: '',
        today: 0,
        like: 0,
    });

    // 서버에서 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/userList");
                setStats(response.data[0]);
            } catch (error) {
                console.error("Error fetching user stats:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            {/* Header Section */}
            <div className="header-section mb-4">
                <h2 className="mb-3">{stats.title}</h2>
                <div className="d-flex justify-content-between">
                    <div className="profile-box d-flex flex-column align-items-center">
                        <div className="profile-image bg-light border rounded-circle" style={{ width: "80px", height: "80px" }}></div>
                        <p className="bio p-0 mt-2">{stats.bio}</p>
                    </div>
                    <div className="album-section d-flex align-items-center">
                        <div className="album-item mx-2">
                            <img src={`${process.env.PUBLIC_URL}/images/album.png`} alt="Album" style={{ width: "60px" }} />
                        </div>
                        <div className="album-item mx-2">
                            <img src={`${process.env.PUBLIC_URL}/images/album.png`} alt="Album" style={{ width: "60px" }} />
                        </div>
                        <div className="album-item mx-2">
                            <img src={`${process.env.PUBLIC_URL}/images/album.png`} alt="Album" style={{ width: "60px" }} />
                        </div>
                        <button className="btn btn-light">➡</button>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="main-section d-flex mb-4">
                <div className="stats-box border p-3 me-3">
                    <p>today: {stats.today}</p>
                    <p>like: {stats.like}</p>
                    <button className="btn btn-secondary w-100">친구 추천</button>
                    <div className="friend-recommendation mt-3">
                        <div className="friend-box bg-light mb-2" style={{ width: "50px", height: "50px" }}></div>
                        <div className="friend-box bg-light" style={{ width: "50px", height: "50px" }}></div>
                    </div>
                </div>
                <div className="diary-box border flex-grow-1 p-3">
                    <h4>My Diary</h4>
                    <div className="diary-content bg-light" style={{ height: "150px" }}></div>
                    <button className="btn btn-light mt-2">➡</button>
                </div>
            </div>
        </div>
    );
};

export default MainView;
