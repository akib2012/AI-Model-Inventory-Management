import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";

const ModelDetils = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);
  const { loading, setLoading, user } = useContext(Authcontext);
  const navigate = useNavigate();
  const [refech, setRefech] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://ai-model-inventory-manager-server-ten.vercel.app/models/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, user, refech, setLoading]);

  if (loading || !model) return <LoadingSpinner />;

  const handlePurchase = () => {
    if (!user?.email) return toast.error("Please login first!");

    const finalmodel = {
      ...model,
      createdAt: new Date(),
      dowloded_by: user.email,
    };

    fetch(`https://ai-model-inventory-manager-server-ten.vercel.app/my-Purchase/${model._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalmodel),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        setRefech(!refech);
        toast.success("🚀 Model Secured Successfully!");
      })
      .catch(() => toast.error("Already purchased this model."));
  };

  const handledelte = () => {
    if (!window.confirm("Permanent Action: Confirm model deletion?")) return;
    fetch(`https://ai-model-inventory-manager-server-ten.vercel.app/models/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Data Purged.");
          navigate("/viewsallmodels");
        }
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-4 bg-[#f8fafc]">
      <div className="relative w-full max-w-6xl">
        
        {/* Soft Background Accent */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-3xl"></div>

        <div className="relative bg-[#1e293b] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Image Area */}
            <div className="w-full lg:w-5/12 p-6 lg:p-10">
              <div className="relative h-[400px] lg:h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                   <span className="px-5 py-2 rounded-xl bg-[#0F766E] text-[#ECFEFF] text-xs font-bold uppercase tracking-widest shadow-xl">
                    {model.framework}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="w-full lg:w-7/12 p-8 lg:p-16 flex flex-col">
              <header className="mb-10">
                <p className="text-[#2DD4BF] font-bold text-sm tracking-[0.4em] uppercase mb-4">AI Model Profile</p>
                {/* BIGGER TITLE */}
                <h1 className="text-5xl lg:text-7xl font-black text-[#ECFEFF] leading-[1.1] tracking-tight mb-8">
                  {model.name}
                </h1>
                
                {/* BIGGER SEMI-BOLD DESCRIPTION */}
                <div className="relative pl-6 border-l-4 border-[#0F766E]">
                  <p className="text-xl lg:text-2xl text-gray-300 font-semibold leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </header>

              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Core Purpose</h3>
                  <p className="text-[#ECFEFF] text-xl font-bold">{model.useCase}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Deployments</h3>
                  <p className="text-[#0528F2] text-3xl font-black">{model.purchased}</p>
                </div>
              </div>

              {/* Action Stack */}
              <div className="flex flex-col gap-4 mt-auto">
                <button
                  onClick={handlePurchase}
                  className="w-full py-6 bg-[#0528F2] hover:bg-[#0421c9] rounded-2xl text-white font-black text-lg uppercase tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(5,40,242,0.4)] active:scale-[0.98]"
                >
                  Purchase and Download
                </button>

                {user?.email === model.createdBy && (
                  <div className="flex gap-4">
                    <button
                      onClick={() => navigate(`/edit-page/${model._id}`)}
                      className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-[#ECFEFF] font-bold rounded-2xl transition-all"
                    >
                      Edit Model
                    </button>
                    <button
                      onClick={handledelte}
                      className="flex-1 py-4 bg-red-500/10 hover:bg-red-600 border border-red-500/20 text-red-500 hover:text-white font-bold rounded-2xl transition-all"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>

              {/* Meta Info */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0F766E] to-[#0528F2] flex items-center justify-center text-[#ECFEFF]">
                    {model.createdBy?.charAt(0).toUpperCase()}
                  </div>
                  <span>Creator: <span className="text-gray-300">{model.createdBy}</span></span>
                </div>
                <span>Ref ID: {model._id?.slice(-8)}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetils;