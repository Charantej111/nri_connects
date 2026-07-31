import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { CAREGIVERS_TEAM } from '../data/nriContent';

export default function CaregiversTeam() {
  return (
    <section className="py-20 bg-[#FAF7F5] border-t border-slate-200/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full inline-block">
            Expert Local Care Specialists
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Your Trusted Caregivers & Field Officers
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Every member of our care and asset monitoring team undergoes police verification, medical background training, and periodic audits.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAREGIVERS_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/85 shadow-md hover:shadow-lg transition-all text-center space-y-4"
            >
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-emerald-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">{member.name}</h3>
                <p className="text-xs font-semibold text-emerald-700">{member.title}</p>
                <span className="inline-block bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-2">
                  {member.experience}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <span className="font-semibold block text-slate-700">Specialization:</span>
                <p className="text-[11px] text-slate-500">{member.specialty}</p>
              </div>

              <div className="flex items-center justify-center space-x-1 text-xs text-emerald-600 font-bold pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Police Verified Staff</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
