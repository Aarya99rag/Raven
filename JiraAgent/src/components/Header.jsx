import { Send, ChevronDown, Bookmark } from 'lucide-react';

export const Header = () => {
  return (
    <header className="p-8 max-w-4xl mx-auto w-full">
      <h1 className="text-3xl font-bold mb-6">What do you want to understand?</h1>
      
      <div className="relative mb-4 group">
        <input 
          type="text" 
          placeholder="Why was the theme changed for feature#xyz?"
          className="w-full pl-6 pr-14 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
          <Send size={18} />
        </button>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
          All sources <ChevronDown size={14} />
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
          Last 7 days <ChevronDown size={14} />
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
          Projects <ChevronDown size={14} />
        </button>
        <button className="ml-auto flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">
          <Bookmark size={16} /> Save search
        </button>
      </div>
    </header>
  );
};
