import { LayoutGrid, MoreVertical, Ticket, GitPullRequest, MessageSquare, Mail, Check, FileText } from 'lucide-react';
import { PEOPLE, FILES } from '../data/mockData';

export const ContextPanel = () => {
  return (
    <aside className="w-80 border-l border-slate-200 flex flex-col p-6 shrink-0 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 font-bold">
          <LayoutGrid size={18} className="text-blue-600" /> Context
        </div>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <section className="mb-8">
        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Feature</p>
            <p className="text-sm font-semibold text-slate-900">feature#xyz</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Type</p>
            <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-semibold rounded">Feature</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Status</p>
            <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[11px] font-semibold rounded flex items-center gap-1 w-fit">
              <Check size={10} strokeWidth={3} /> Completed
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Created</p>
              <p className="text-xs font-medium">Apr 28, 2024</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Updated</p>
              <p className="text-xs font-medium">May 13, 2024</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h4 className="text-sm font-bold text-slate-900 mb-4">Related objects</h4>
        <div className="space-y-3">
          {[
            { icon: Ticket, label: 'FEATURE-XYZ', sub: 'Jira Ticket', color: 'text-blue-600' },
            { icon: GitPullRequest, label: '#218', sub: 'GitHub Pull Request', color: 'text-slate-900' },
            { icon: MessageSquare, label: 'Design discussion', sub: 'Teams Thread', color: 'text-indigo-600' },
            { icon: Mail, label: 'Brand guidelines update', sub: 'Email', color: 'text-blue-400' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 cursor-pointer group">
              <item.icon size={16} className={item.color} />
              <div>
                <p className="text-xs font-semibold group-hover:text-blue-600 transition-colors">{item.label}</p>
                <p className="text-[10px] text-slate-400">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-slate-900">People involved</h4>
        </div>
        <div className="space-y-4">
          {PEOPLE.map((person, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={person.img} className="w-8 h-8 rounded-full object-cover" alt={person.name} />
              <div>
                <p className="text-xs font-semibold">{person.name}</p>
                <p className="text-[10px] text-slate-400">{person.role}</p>
              </div>
            </div>
          ))}
          <button className="text-[11px] font-bold text-blue-600 hover:underline">Show all (6)</button>
        </div>
      </section>
      
      <section>
        <h4 className="text-sm font-bold text-slate-900 mb-4">Files changed</h4>
        <div className="space-y-3">
          {FILES.map((file, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors">
                <FileText size={14} />
              </div>
              <div>
                <p className="text-xs font-semibold group-hover:text-blue-600 transition-colors">{file.name}</p>
                <p className="text-[10px] text-slate-400">{file.path}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};
