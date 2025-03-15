import axios from "axios";

const checkRegistrationStatus = async (userId, accessToken, refreshToken, router) => {
  console.log("Received in checkRegistrationStatus:", { userId, accessToken, refreshToken });

  if (!accessToken) {
    console.error("❌ No access token available");
    return;
  }

  try {
    const response = await axios.post(
      "http://13.201.78.9/talent/talent_registration_status/",
      {
        auth_params: {
          user_id: userId,
          refresh_token: refreshToken,
        },
        payload: {
          user_id: userId,
        },
      },
      {
        headers: {
            "Content-Type": "application/json",
            "Accesstoken": accessToken,
        },
      }
    );

    console.log("✅ Registration Status Response:", response.data);

    if (response.data.status === "registered") {
      router.push("/dashboard");
    } else {
      router.push("/registration/personal-info");
    }
  } catch (err) {
    console.error("❌ Error fetching registration status:", err);
    if (err.response?.status === 401) {
      console.error("🔴 Unauthorized: Access token might be expired or invalid.");
    }
  }
};

export default checkRegistrationStatus;
