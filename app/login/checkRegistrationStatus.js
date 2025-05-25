import axios from "axios";

const checkRegistrationStatus = async (userId, accessToken, refreshToken, isFreelancer, router) => {
  console.log("Received in checkRegistrationStatus:", { userId, accessToken, refreshToken, isFreelancer });

  if (!accessToken) {
    console.error("❌ No access token available");
    router.push("/login");
    return;
  }

  try {
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

    const data = response.data;

    // Ensure payload exists and is not empty
    if (data.payload && Array.isArray(data.payload) && data.payload.length > 0) {
      const statusId = data.payload[0].status_id;
      console.log("✅ Status ID:", statusId);

      if (isFreelancer) {
        // Freelancer (Talent) logic
        console.log("Registration Status Response:", response.data);
        if (statusId === 0) {
          router.push("/registration/personal-info");
        } else if (statusId === "1") {
          router.push("/registration/skills");
        } else if (statusId === "2") {
          router.push("/registration/education");
        } else if (statusId === "3") {
          router.push("/registration/work-experience");
        } else if (statusId === "4") {
          router.push("/registration/portfolio");
        } else if (statusId === "5") {
          router.push("/registration/work-terms");
        } else if (statusId === "6") {
          router.push("/registration/language");
        } else if (statusId === "7") {
          router.push("/registration/job-preferences");
        } else if (statusId === "8") {
          router.push("/quizz");
        } else if (statusId === "9") {
          router.push("/assignment");
        } else if (statusId === "10") {
          router.push("/interview");
        } else if (statusId === "11") {
          router.push("/submission_status");
        } else if (statusId === "12") {
          router.push("/submission_status");
        } else {
          console.error("❌ Unknown status ID:", statusId);
          router.push("/submission_status"); // Fallback for unexpected status
        }
      } else {
        // Company logic
        if (statusId === 0) {
          router.push("/company_registration");
        } else {
          console.log("Redirect to home");
          router.push("/");
        }
      }
    } else {
      console.error("❌ No valid payload found in response");
      router.push("/login");
    }
  } catch (err) {
    console.error("❌ Error fetching registration status:", err);
    if (err.response?.status === 401) {
      console.error("🔴 Unauthorized: Access token might be expired or invalid.");
      router.push("/login");
    } else {
      console.error("🔴 Error details:", err.response?.data || err.message);
      router.push("/login");
    }
  }
};

export default checkRegistrationStatus;