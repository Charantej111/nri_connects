import React, { useState } from 'react';
import { User, UserPlus, Mail, Phone, Lock, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CITIES_SERVICED } from '../data/nriContent';
import CountryCodePicker from './CountryCodePicker';
import CustomSelect from './CustomSelect';
import { getAssetUrl } from '../utils/assets';

const cityOptions = CITIES_SERVICED.map(city => ({ value: city, label: city }));
const countryOptions = [
  { value: 'United States', label: 'United States' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Singapore', label: 'Singapore' }
];

export default function SignUpPage({ setActivePage }) {
  const [role, setRole] = useState('nri'); // 'nri' or 'parent'
  const [countryCode, setCountryCode] = useState('+1');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityInIndia: 'Hyderabad & Cyberabad',
    countryOfResidence: 'United States',
    password: '',
    agreeTerms: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Registration Successful! Welcome to NRI Connects family.");
      setActivePage('home');
    }, 1200);
  };

  return (
    <div className="py-28 bg-[#FAF7F5] flex items-center justify-center min-h-[90vh] px-4 font-sans">
      <div className="bg-white w-full max-w-lg p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md space-y-6 relative">

        {/* Top Header */}
        <div className="text-center space-y-2">
          <img
            src={getAssetUrl('logo.png')}
            alt="NRI Connects"
            className="h-12 w-auto mx-auto object-contain"
          />
          <h2 className="text-2xl font-extrabold text-slate-900 font-display">Create Your Free Account</h2>
          <p className="text-xs text-slate-500 font-medium">Join 50,000+ NRI Families Caring for Parents & Assets in India</p>
        </div>

        {/* Role Toggle Selector */}
        <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl text-xs font-bold gap-1">
          <button
            onClick={() => setRole('nri')}
            className={`py-2.5 rounded-xl transition-all ${role === 'nri' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            I am an NRI Living Abroad
          </button>
          <button
            onClick={() => setRole('parent')}
            className={`py-2.5 rounded-xl transition-all ${role === 'parent' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            I am a Resident in India
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="e.g. Vikram Reddy"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Mobile with flag select dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
              <div className="relative flex border border-slate-200 rounded-xl focus-within:border-emerald-500">
                <CountryCodePicker selected={countryCode} onChange={setCountryCode} />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 text-xs font-semibold focus:outline-none rounded-r-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Parent Location in India</label>
              <CustomSelect
                value={formData.cityInIndia}
                onChange={(val) => setFormData({ ...formData, cityInIndia: val })}
                options={cityOptions}
                placeholder="Select City"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Country of Residence</label>
              <CustomSelect
                value={formData.countryOfResidence}
                onChange={(val) => setFormData({ ...formData, countryOfResidence: val })}
                options={countryOptions}
                placeholder="Select Country"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Create Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-start space-x-2 text-xs text-slate-600">
            <input
              type="checkbox"
              required
              checked={formData.agreeTerms}
              onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              className="mt-0.5 rounded border-slate-300 text-emerald-600"
            />
            <span>
              I agree to NRI Connects <button type="button" onClick={() => setActivePage('legal')} className="text-emerald-600 font-bold underline">Terms</button> & <button type="button" onClick={() => setActivePage('legal')} className="text-emerald-600 font-bold underline">Privacy Policy</button>.
            </span>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center space-x-2"
          >
            {submitted ? (
              <span>Creating Account...</span>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Create NRI Account</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
          Already have an NRI Connects account?{' '}
          <button
            onClick={() => setActivePage('login')}
            className="font-bold text-emerald-600 hover:underline"
          >
            Login Here
          </button>
        </div>

      </div>
    </div>
  );
}
