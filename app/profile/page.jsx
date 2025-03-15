"use client"
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log("✅ Access Token from useEffect:", token);

    if (token) {
      setAccessToken(token);
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async () => {
    const accessToken = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id"); // Ensure user_id is stored
    const refreshToken = localStorage.getItem("refresh_token");

    if (!accessToken) {
        console.error("❌ Access token is missing");
        return;
    }

    try {
        const response = await fetch("http://13.201.78.9/user/profile/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accesstoken": accessToken,
            },
            body: JSON.stringify({
                auth_params: {
                    user_id: userId,
                    refresh_token: refreshToken,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user data: ${response}`);
        }

        const data = await response.json();
        console.log("✅ User Data:", data);
    } catch (error) {
        console.error("❌ Fetch error:", error);
    }
};

  
  return <div>Profile Page</div>;
};

export default ProfilePage;
