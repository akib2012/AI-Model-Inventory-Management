import { useEffect, useState } from "react";

const Profile = ({ email }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email) return;

    setLoading(true);

    fetch(`http://localhost:3000/profile/${encodeURIComponent(email)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Profile not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setUser(null);
        setLoading(false);
      });
  }, [email]);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (!user) {
    return (
      <p className="text-center mt-20 text-red-500">
        User not found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.user_photo}
            alt="profile"
            className="w-32 h-32 rounded-full border object-cover"
          />

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">{user.user_name}</h2>

            {user.role && (
              <span className="inline-block mt-2 text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {user.role}
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 text-gray-500 text-sm text-center">
          This is public profile info. Sensitive data is hidden.
        </div>
      </div>
    </div>
  );
};

export default Profile;
