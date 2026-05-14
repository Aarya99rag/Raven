import { 
  Search, 
  Clock, 
  Users, 
  FileText, 
  Settings, 
  HelpCircle, 
  LayoutGrid, 
  RefreshCcw, 
  ChevronDown, 
  GitBranch,
  MessageSquare,
  Mail,
  Zap,
  Ticket
} from 'lucide-react';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-slate-200 flex flex-col p-4 shrink-0 overflow-y-auto">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Zap className="text-white fill-current" size={18} />
        </div>
        <span className="font-bold text-lg tracking-tight">Ardhaviram AI</span>
      </div>
      
      <nav className="flex-1 space-y-1">
        <SidebarItem icon={Search} label="Ask" active />
        <SidebarItem icon={Clock} label="Activity" />
        <SidebarItem icon={LayoutGrid} label="Timeline" />
        <SidebarItem icon={FileText} label="Sources" />
        <SidebarItem icon={Users} label="People" />
        
        <div className="pt-8 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Integrations</div>
        <SidebarItem icon={Ticket} label="Jira" badge />
        <SidebarItem icon={GitBranch} label="GitHub" badge />
        <SidebarItem icon={MessageSquare} label="Teams" badge />
        <SidebarItem icon={Mail} label="Outlook" badge />
      </nav>
      
      <div className="mt-auto pt-4 space-y-1 border-t border-slate-100">
        <SidebarItem icon={LayoutGrid} label="Integrations" />
        <SidebarItem icon={RefreshCcw} label="Sync status" />
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={HelpCircle} label="Help & docs" />

        <div className="mt-4 p-2 flex items-center gap-3 hover:bg-slate-50 rounded-lg cursor-pointer">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" className="w-9 h-9 rounded-full object-cover" alt="User" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">Aarav Mehta</p>
            <p className="text-xs text-slate-500 truncate">aarav@company.com</p>
          </div>
          <ChevronDown size={14} className="text-slate-400" />
        </div>
      </div>
    </aside>
  );
};
