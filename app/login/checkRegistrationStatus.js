// import axios from "axios";

// const checkRegistrationStatus = async (userId, accessToken, refreshToken, isFreelancer, router) => {
//   console.log("Received in checkRegistrationStatus:", { userId, accessToken, refreshToken, isFreelancer });

//   if (!accessToken) {
//     console.error("❌ No access token available");
//     return;
//   }

//   if (!isFreelancer) {
//     // If user is a company, redirect directly without checking registration status
//     router.push("/company_registration");
//     return;
//   }

//   try {
//     const response = await axios.post(
//       "https://backend.talentbard.com/talent/talent_registration_status/",
//       {
//         auth_params: {
//           user_id: userId,
//           refresh_token: refreshToken,
//         },
//         payload: {
//           user_id: userId,
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Accesstoken": accessToken,
//         },
//       }
//     );

//     console.log("✅ Registration Status Response:", response.data);

//     if (response.data.status === "registered") {
//       router.push("/dashboard");
//     } else {
//       router.push("/registration/personal-info");
//     }
//   } catch (err) {
//     console.error("❌ Error fetching registration status:", err);
//     if (err.response?.status === 401) {
//       console.error("🔴 Unauthorized: Access token might be expired or invalid.");
//     }
//   }
// };

// export default checkRegistrationStatus;

import axios from "axios";

const checkRegistrationStatus = async (userId, accessToken, refreshToken, isFreelancer, router) => {
  console.log("Received in checkRegistrationStatus:", { userId, accessToken, refreshToken, isFreelancer });

  if (!accessToken) {
    console.error("❌ No access token available");
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
      const status=statusId;
      console.log(status);
    if (isFreelancer) {
      // Freelancer logic
      console.log(response);
      if (status == 0) {
        router.push("/registration/personal-info");
      } else if(status==1) {
        router.push("/registration/skills");
      }
      else if(status==2) {
        router.push("/registration/education");
      }
      else if(status==3) {
        router.push("/registration/work-experience");
      }
      else if(status==4) {
        router.push("/registration/portfolio");
      }
      else if(status==5) {
        router.push("/registration/work-terms");
      }
      else if(status==6) {
        router.push("/registration/language");
      }else if(status==7) {
        router.push("/registration/job-preferences");
      }
      else{
        router.push("/registration/status");
      }
    } else {
      // Company logic
      if (status === 0) {
        router.push("/company_registration");
      } else {
        console.log("REdicrect to home")
        router.push("/");
      }
    }
  } else {
    console.error("❌ No valid payload found in response");
}
  } catch (err) {
    console.error("❌ Error fetching registration status:", err);
    if (err.response?.status === 401) {
      console.error("🔴 Unauthorized: Access token might be expired or invalid.");
    }
  }
};

export default checkRegistrationStatus;
