import React, { useState } from 'react';
import {
  CreditCard, Landmark, CheckCircle2, Copy, Check,
  Smartphone, ShieldCheck
} from 'lucide-react';
import { BANK_DETAILS, SERVICES_CATALOG, CONTACT_INFO } from '../data/nriContent';
import CountryCodePicker from './CountryCodePicker';
import CustomSelect from './CustomSelect';

const serviceOptions = SERVICES_CATALOG.map(svc => ({ value: svc.title, label: svc.title }));

export default function PaymentPage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('bank'); // 'online' or 'bank'
  const [copiedField, setCopiedField] = useState(null);
  const [countryCode, setCountryCode] = useState('+1');

  // Online Pay Form State
  const [payForm, setPayForm] = useState({
    name: '',
    email: '',
    mobile: '',
    pincode: '',
    selectedService: 'Property Care',
    amount: '999'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState('paypal'); // 'paypal', 'gpay', 'phonepe', 'paytm'

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePaySubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Redirecting to PayPal / Secure Gateway for Amount: $${payForm.amount} / ₹${payForm.amount}...`);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="py-24 sm:py-28 bg-[#FAF7F5] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Page Title & Breadcrumb Header Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white p-8 sm:p-12 text-center shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay" />
          <div className="relative z-10 space-y-2">
            <span className="text-[11px] font-extrabold text-emerald-900 uppercase tracking-widest bg-white px-3 py-1 rounded-full inline-block">
              Secure NRI Payment Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Make a Payment</h1>
            <div className="flex items-center justify-center space-x-2 text-xs text-emerald-100 pt-1 font-semibold">
              <button onClick={() => setActivePage('home')} className="hover:text-white transition-colors">Home</button>
              <span>»</span>
              <span className="text-white font-bold">Pay Now</span>
            </div>
          </div>
        </div>

        {/* Payment Container Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden p-6 sm:p-10 space-y-8">

          {/* Tab Switcher (Pay Online vs Bank Details) */}
          <div className="flex justify-center border-b border-slate-100 pb-6">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl gap-2">
              <button
                onClick={() => setActiveTab('online')}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${activeTab === 'online'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Pay Online</span>
              </button>

              <button
                onClick={() => setActiveTab('bank')}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${activeTab === 'bank'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
              >
                <Landmark className="w-4 h-4" />
                <span>Bank Details</span>
              </button>
            </div>
          </div>

          {/* TAB 1: PAY ONLINE FORM */}
          {activeTab === 'online' && (
            <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Pay via PayPal or Credit / Debit Card</h3>
                <p className="text-xs text-slate-500">Enter your details and payment amount to initiate secure online checkout.</p>
              </div>

              <form onSubmit={handlePaySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={payForm.name}
                      onChange={(e) => setPayForm({ ...payForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={payForm.email}
                      onChange={(e) => setPayForm({ ...payForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile *</label>
                    <div className="relative flex border border-slate-200 rounded-xl focus-within:border-emerald-500">
                      <CountryCodePicker selected={countryCode} onChange={setCountryCode} />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={payForm.mobile}
                        onChange={(e) => setPayForm({ ...payForm, mobile: e.target.value })}
                        className="w-full px-4 py-3 text-xs font-semibold focus:outline-none rounded-r-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      placeholder="Postal Code"
                      value={payForm.pincode}
                      onChange={(e) => setPayForm({ ...payForm, pincode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Select Service *</label>
                    <CustomSelect
                      value={payForm.selectedService}
                      onChange={(val) => setPayForm({ ...payForm, selectedService: val })}
                      options={serviceOptions}
                      placeholder="Select Service"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Payment Amount ($ or ₹) *</label>
                    <input
                      type="number"
                      required
                      placeholder="999"
                      value={payForm.amount}
                      onChange={(e) => setPayForm({ ...payForm, amount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Preferred Payment Method Options */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-700">Select Payment Method</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentGateway('paypal')}
                      className={`p-2.5 rounded-2xl border flex items-center justify-center transition-all bg-white shadow-sm h-20 ${paymentGateway === 'paypal'
                          ? 'border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/50'
                          : 'border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <img src="/assets/paypal.png" alt="PayPal" className="h-14 w-auto max-w-[95%] object-contain" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentGateway('gpay')}
                      className={`p-2.5 rounded-2xl border flex items-center justify-center transition-all bg-white shadow-sm h-20 ${paymentGateway === 'gpay'
                          ? 'border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/50'
                          : 'border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <img src="/assets/gpay.png" alt="Google Pay" className="h-14 w-auto max-w-[95%] object-contain" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentGateway('phonepe')}
                      className={`p-2.5 rounded-2xl border flex items-center justify-center transition-all bg-white shadow-sm h-20 ${paymentGateway === 'phonepe'
                          ? 'border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/50'
                          : 'border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <img src="/assets/phonepe.png" alt="PhonePe" className="h-14 w-auto max-w-[95%] object-contain" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentGateway('paytm')}
                      className={`p-2.5 rounded-2xl border flex items-center justify-center transition-all bg-white shadow-sm h-20 ${paymentGateway === 'paytm'
                          ? 'border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/50'
                          : 'border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <img src="/assets/paytm.png" alt="Paytm" className="h-14 w-auto max-w-[95%] object-contain" />
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <span>
                      {paymentGateway === 'paypal' && 'Pay Securely with PayPal'}
                      {paymentGateway === 'gpay' && 'Pay via Google Pay'}
                      {paymentGateway === 'phonepe' && 'Pay via PhonePe'}
                      {paymentGateway === 'paytm' && 'Pay via Paytm'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: BANK DETAILS */}
          {activeTab === 'bank' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fadeIn">

              {/* HDFC Bank Details Card */}
              <div className="bg-[#FAF7F5] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-center">

                {/* HDFC Logo Box */}
                <div className="mx-auto flex justify-center pb-2">
                  <img
                    src="/assets/hdfc.png"
                    alt="HDFC Bank"
                    className="h-20 w-auto object-contain"
                  />
                </div>

                {/* Account Specifications */}
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Account Type</span>
                    <span className="text-base font-extrabold text-slate-900">{BANK_DETAILS.accountType}</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[11px] font-bold text-slate-400 block">Ac / No:</span>
                      <span className="text-base font-extrabold text-slate-900 font-mono tracking-wider">{BANK_DETAILS.accountNumber}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.accountNumber, 'acc')}
                      className="px-3 py-1.5 bg-emerald-100 hover:bg-emerald-600 hover:text-white text-emerald-800 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1"
                    >
                      {copiedField === 'acc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedField === 'acc' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[11px] font-bold text-slate-400 block">IFSC Code:</span>
                      <span className="text-sm font-extrabold text-emerald-700 font-mono tracking-wider">{BANK_DETAILS.ifscCode}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.ifscCode, 'ifsc')}
                      className="px-3 py-1.5 bg-emerald-100 hover:bg-emerald-600 hover:text-white text-emerald-800 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1"
                    >
                      {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedField === 'ifsc' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1 pt-1">
                    <p><span className="font-bold text-slate-800">Branch:</span> {BANK_DETAILS.branch}</p>
                    <p><span className="font-bold text-slate-800">Holder Name:</span> {BANK_DETAILS.holderName}</p>
                  </div>
                </div>

              </div>

              {/* UPI & Registered Mobile Section */}
              <div className="space-y-6 text-center">

                {/* UPI Apps Logos */}
                <div className="flex items-center justify-center space-x-6">
                  <img src="/assets/paytm.png" alt="Paytm" className="h-14 w-auto object-contain" />
                  <img src="/assets/phonepe.png" alt="PhonePe" className="h-14 w-auto object-contain" />
                  <img src="/assets/gpay.png" alt="Google Pay" className="h-14 w-auto object-contain" />
                </div>

                {/* Instructions */}
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">
                    Please pay using our registered phone number
                  </p>
                  <div className="inline-flex items-center space-x-3 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-md">
                    <Smartphone className="w-5 h-5 text-emerald-600" />
                    <span className="text-xl font-extrabold text-slate-900">{BANK_DETAILS.upiPhone}</span>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.upiPhone, 'upi')}
                      className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                      title="Copy Mobile Number"
                    >
                      {copiedField === 'upi' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-emerald-800 flex items-center justify-center space-x-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Instant Payment Confirmation</span>
                  </span>
                  <p className="text-[11px] text-slate-500">
                    After completing the transfer, please share the transaction screenshot to <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">+91 988 588 0017</a> on WhatsApp for immediate receipt issuance.
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
