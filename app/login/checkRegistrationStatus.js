import axios from "axios";

const checkRegistrationStatus = async (userId, accessToken, refreshToken, isFreelancer, router) => {
  console.log("Received in checkRegistrationStatus:", { userId, accessToken, refreshToken, isFreelancer });

  if (!accessToken) {
    console.error("❌ No access token available");
    return;
  }

  if (!isFreelancer) {
    // If user is a company, redirect directly without checking registration status
    router.push("/company_registration");
    return;
  }

  try {
    // Only freelancers (talents) have a registration status check
    const response = await axios.post(
      "https://backend.talentbard.com/talent/talent_registration_status/",
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
