import React, { useState } from "react";

export default function AuthBox() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 translate-y-10">
      <div className="bg-black/2 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl w-[350px]">
        
        {/* Form */}
        <form className="flex flex-col space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <input
                type="text"
                placeholder="Username"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
            </>
          )}

          {isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
          />
          
          <button
            type="submit"
            className="bg-white/20 hover:bg-white/30 transition rounded-lg py-2 text-white font-semibold"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch between Login / Signup */}
        <p className="text-center text-white/60 mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-300 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
