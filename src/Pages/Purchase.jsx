import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";
import MyPurchase from "./MyPurchase";

const Purchase = () => {
  const { user, loading, setLoading } = useContext(Authcontext);
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    fetch(
      `https://ai-model-inventory-manager-server-ten.vercel.app/my-Purchase?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPurchase(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching models:", err));
  }, [user?.email, setLoading, setPurchase, user?.accessToken]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h4 className="text-center text-black text-3xl font-bold py-6">
        🛒 My Purchases{" "}
      </h4>

      <div className="max-w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-5 my-13 pb-6">
        {purchase.map((p) => (
          <MyPurchase p={p} key={p._id}></MyPurchase>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
