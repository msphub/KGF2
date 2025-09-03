import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function KanhasGrandComingSoon() {
  const targetDate = new Date('2025-09-09T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState('');

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = Math.max(0, targetDate - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing, ${email}!`);
      setEmail('');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-white to-rose-100 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-3s"></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-6s"></div>

      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-lg text-center z-10">
        <h1 className="text-3xl font-extrabold text-amber-700 mb-2">Kanha's Grand</h1>
        <p className="text-gray-600 mb-6">Authentic flavours — opening soon</p>

        <div className="grid grid-cols-4 gap-3 mb-6">
          <TimeBlock label="Days" value={timeLeft.days} />
          <TimeBlock label="Hours" value={timeLeft.hours} />
          <TimeBlock label="Mins" value={timeLeft.minutes} />
          <TimeBlock label="Secs" value={timeLeft.seconds} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-4">
          <input 
            type="email" 
            placeholder="you@example.com" 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="px-3 py-2 border rounded-md flex-1"
          />
          <button className="px-4 py-2 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700">Notify me</button>
        </form>
        <p className="text-xs text-gray-500 mb-4">No spam. Unsubscribe anytime.</p>

        <div className="flex justify-center gap-4 mb-4 text-2xl">
          <a href="#" className="text-pink-600 hover:scale-110 transition-transform"><FaInstagram /></a>
          <a href="#" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebook /></a>
          <a href="#" className="text-green-600 hover:scale-110 transition-transform"><FaWhatsapp /></a>
          <a href="#" className="text-blue-400 hover:scale-110 transition-transform"><FaTwitter /></a>
          <a href="#" className="text-blue-700 hover:scale-110 transition-transform"><FaLinkedin /></a>
        </div>

        <footer className="text-xs text-gray-500">© Kanha's Grand — Made with ❤️ & spices</footer>
      </div>

      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(-20px,20px) scale(1.1); }
          66% { transform: translate(20px,-10px) scale(0.9); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-3s { animation-delay: 3s; }
      `}</style>
    </div>
  );
}

function TimeBlock({ label, value }) {
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 border border-gray-200 rounded-lg p-3 shadow-md">
      <div className="text-2xl font-bold text-amber-700 tabular-nums">{String(value).padStart(2,'0')}</div>
      <div className="text-xs text-gray-600 uppercase tracking-wide">{label}</div>
    </div>
  );
}
