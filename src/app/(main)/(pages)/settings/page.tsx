"use client";
import { BACKEND_URL, HOOKS_URL } from "../../../config";
import ProfileForm from "@/components/forms/profile-form";
import ProfilePicture from "./_components/profile-picture";
import useUser from "@/components/hooks/useUser";

const removeProfileImage = async () => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/v1/user/profile-image/remove`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error removing profile image:", error);
  }
};
const uploadProfileImage = async (image: string) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(
      `${BACKEND_URL}/api/v1/user/profile-image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error uploading profile image:", error);
  }
};

const updateUserInfo = async (name: string, email: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BACKEND_URL}/api/v1/user/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      console.error("Response status:", response.status);
      console.error("Response body:", await response.text());
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error updating user info:", error);
  }
};

const Settings = () => {
  const { loading, user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        />
        
        <ProfileForm
          user={user}
          onUpdate={updateUserInfo}
        />
      </div>
    </div>
  );
};

export default Settings;
