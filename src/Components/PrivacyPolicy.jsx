const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="bg-[#0F766E] dark:bg-[#115e59] text-white py-16 px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-cyan-100 dark:text-cyan-200">
            Your privacy and data protection are important to us.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto space-y-8 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <div>
            <h2 className="text-xl font-semibold text-[#0F766E] dark:text-[#22D3EE] mb-2 transition-colors duration-300">
              Information We Collect
            </h2>
            <p>
              We collect basic user information such as name, email, and
              authentication details to provide secure access and personalized
              features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#0F766E] dark:text-[#22D3EE] mb-2 transition-colors duration-300">
              How We Use Your Data
            </h2>
            <p>
              User data is used solely for authentication, model ownership
              verification, purchase tracking, and improving user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#0F766E] dark:text-[#22D3EE] mb-2 transition-colors duration-300">
              Data Security
            </h2>
            <p>
              We implement industry-standard security practices to protect user
              data from unauthorized access.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#22D3EE] dark:border-[#38BDF8] transition-colors duration-300">
            <p className="font-medium">
              We never sell or share user data with third parties.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
