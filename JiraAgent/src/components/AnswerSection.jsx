import { Zap, Ticket, GitBranch, MessageSquare, Mail, ExternalLink, Download } from 'lucide-react';
import { EVIDENCE_ITEMS } from '../data/mockData';

export const AnswerSection = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex-1 overflow-y-auto px-8">
      <div className="max-w-4xl mx-auto pb-20">
        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-slate-100 mb-8">
          <div className="flex gap-8">
            {['Answer', 'Timeline', 'Sources (12)'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 mb-2">
            <Download size={16} /> Export
          </button>
        </div>
        
        {/* Answer Section */}
        <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 mb-10 relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Zap size={18} className="fill-current" />
              <h3 className="font-bold">Answer</h3>
            </div>
            <div className="flex gap-2">
              {[Ticket, GitBranch, MessageSquare, Mail].map((Icon, i) => (
                <div key={i} className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400">
                  <Icon size={14} />
                </div>
              ))}
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 text-[10px] font-bold">
                +1
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              The theme was changed for <span className="font-semibold text-slate-900">feature#xyz</span> to align with the new brand design system and improve accessibility contrast.
            </p>
            <p>
              Jira ticket <span className="text-blue-600 cursor-pointer hover:underline">FEATURE-XYZ</span> has a comment from the design team requesting brand consistency.
            </p>
            <p>
              Teams discussions mention the previous theme had contrast issues. <span className="text-blue-600 cursor-pointer hover:underline">GitHub PR #218</span> implemented the updated theme tokens and UI changes.
            </p>
          </div>
          
          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs text-slate-500">Confidence</span>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wider">High</span>
          </div>
        </div>
        
        {/* Evidence List */}
        <div>
          <h3 className="font-bold text-lg mb-4">Evidence</h3>
          <div className="space-y-4">
            {EVIDENCE_ITEMS.map((item) => (
              <div key={item.id} className="group border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all flex gap-4">
                <div className="mt-1">
                  {item.source === 'Jira' && <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Ticket size={18} /></div>}
                  {item.source === 'GitHub' && <div className="p-2 bg-slate-50 text-slate-900 rounded-lg"><GitBranch size={18} /></div>}
                  {item.source === 'Teams' && <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><MessageSquare size={18} /></div>}
                  {item.source === 'Outlook' && <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><Mail size={18} /></div>}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.source}</span>
                    <span className="text-xs text-slate-300">•</span>
                    <span className="text-xs text-slate-500">{item.type}</span>
                    {item.status && (
                      <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold ${item.statusColor}`}>
                        + {item.status}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-sm text-slate-500 mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-3">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.author || item.tag || item.from}</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm">
                      Open in {item.source} <ExternalLink size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
