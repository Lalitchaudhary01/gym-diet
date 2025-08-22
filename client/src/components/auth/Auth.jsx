import React, { useState } from "react";
import { Star, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // error msg
  const [success, setSuccess] = useState(""); // success msg

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || "OTP sent to your email!");
        // OTP page me email bhejna
        setTimeout(() => {
          navigate("/otp-verification", { state: { email } });
        }, 1000);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-200/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 max-w-lg w-full">
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                      <Shield className="w-4 h-4 mr-2" />
                      Secure Register
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Welcome
                    </h2>
                    <p className="text-gray-600">
                      Continue your health transformation journey
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 bg-white/50"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 bg-white/50"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 bg-white/50"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    {/* Error / Success messages */}
                    {error && (
                      <p className="text-red-600 text-sm font-medium">
                        {error}
                      </p>
                    )}
                    {success && (
                      <p className="text-green-600 text-sm font-medium">
                        {success}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 transition"
                    >
                      Register
                    </button>

                    <div className="text-center">
                      <span className="text-gray-600">
                        Already have an account?
                      </span>
                      <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="text-green-600 hover:text-green-700 font-semibold ml-1"
                      >
                        Log In
                      </button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="flex items-center text-yellow-400">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        4.9/5 rating
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-gray-900">
                        10k+
                      </span>
                      <p className="text-sm text-gray-600">Happy users</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Right Side Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
