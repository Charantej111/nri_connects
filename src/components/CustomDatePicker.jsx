import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomDatePicker({ value, onChange, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(value ? new Date(value) : new Date());
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Helper to format date as "YYYY-MM-DD"
  const formatDateString = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  // Format date for display: e.g. "Aug 15, 2026"
  const getDisplayDate = () => {
    if (!value) return "Select Date";
    const d = new Date(value);
    if (isNaN(d.getTime())) return "Select Date";
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (day) => {
    const selected = new Date(year, month, day);
    onChange(formatDateString(selected));
    setIsOpen(false);
  };

  // Generate calendar days grid
  const daysGrid = [];
  // Add empty spaces for offset
  for (let i = 0; i < firstDayIndex; i++) {
    daysGrid.push(<div key={`empty-${i}`} className="w-8 h-8" />);
  }
  // Add actual days
  for (let d = 1; d <= daysInMonth; d++) {
    const isSelected = value && formatDateString(new Date(year, month, d)) === value;
    const isToday = formatDateString(new Date(year, month, d)) === formatDateString(new Date());

    let dayStyles = 'text-slate-700 hover:bg-emerald-50/70';
    if (isSelected) {
      dayStyles = 'bg-emerald-600 text-white shadow-md';
    } else if (isToday) {
      dayStyles = 'border border-emerald-600 text-emerald-700 font-extrabold';
    }

    daysGrid.push(
      <button
        key={`day-${d}`}
        type="button"
        onClick={() => handleSelectDay(d)}
        className={`w-8 h-8 rounded-full text-xs font-bold transition-colors flex items-center justify-center ${dayStyles}`}
      >
        {d}
      </button>
    );
  }

  return (
    <div className={`relative ${className} ${isOpen ? 'z-50' : ''}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-3.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white flex items-center justify-between text-left cursor-pointer transition-all"
      >
        <span className={value ? "text-slate-800" : "text-slate-400"}>
          {getDisplayDate()}
        </span>
        <CalendarIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:left-0 mt-2 bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 z-[100] w-72 animate-fadeIn">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-slate-800">
              {monthNames[month]} {year}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {daysOfWeek.map((day) => (
              <span key={day} className="text-[10px] font-extrabold text-slate-400 uppercase">
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 justify-items-center">
            {daysGrid}
          </div>
        </div>
      )}
    </div>
  );
}
