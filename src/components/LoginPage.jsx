import React, { useState } from 'react';
import { Mail, Lock, Phone, Eye, EyeOff, LogIn, ShieldCheck } from 'lucide-react';
import CountryCodePicker from './CountryCodePicker';

export default function LoginPage({ setActivePage }) {
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    rememberMe: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Successfully logged in! Redirecting to NRI Portal Dashboard...");
      setActivePage('home');
    }, 1200);
  };

  return (
    <div className="py-28 bg-[#FAF7F5] flex items-center justify-center min-h-[85vh] px-4 font-sans">
      <div className="bg-white w-full max-w-md p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md space-y-6 relative overflow-hidden">

        {/* Top Header */}
        <div className="text-center space-y-2">
          <img
            src="/assets/logo.png"
            alt="NRI Connects"
            className="h-12 w-auto mx-auto object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src = "/logo.png"; }}
          />
          <h2 className="text-2xl font-extrabold text-slate-900 font-display">Welcome Back</h2>
          <p className="text-xs text-slate-500 font-medium">Access your NRI Care & Property Dashboard</p>
        </div>

        {/* Tab Selector for Login Method */}
        <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-bold">
          <button
            onClick={() => setLoginMethod('email')}
            className={`py-2 rounded-lg transition-colors ${loginMethod === 'email' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500'}`}
          >
            Email Login
          </button>
          <button
            onClick={() => setLoginMethod('phone')}
            className={`py-2 rounded-lg transition-colors ${loginMethod === 'phone' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500'}`}
          >
            Mobile OTP Login
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {loginMethod === 'email' ? (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">NRI Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="e.g. name@example.com"
                  value={formData.emailOrPhone}
                  onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">International Mobile Number</label>
              <div className="relative flex border border-slate-200 rounded-xl focus-within:border-emerald-500">
                <CountryCodePicker selected={countryCode} onChange={setCountryCode} />

                <div className="relative flex-1">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-xs font-semibold focus:outline-none rounded-r-xl"
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-bold text-slate-700">Password</label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your registered email."); }} className="text-[11px] font-bold text-emerald-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="rounded border-slate-300 text-emerald-600 focus:ring-0"
              />
              <span>Remember this device</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center space-x-2 animate-pulse-slow"
          >
            {submitted ? (
              <span>Logging in...</span>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Login to NRI Account</span>
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-600 space-y-2">
          <p>
            Don't have an NRI Connects account yet?{' '}
            <button
              onClick={() => setActivePage('signup')}
              className="font-bold text-emerald-600 hover:underline"
            >
              Sign Up Now
            </button>
          </p>


        </div>

      </div>
    </div>
  );
}
