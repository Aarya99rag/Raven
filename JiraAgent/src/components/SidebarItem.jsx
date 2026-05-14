export const SidebarItem = ({ icon: Icon, label, active = false, badge }) => (
  <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}>
    <div className="flex items-center gap-3">
      <Icon size={18} />
      <span className="text-sm font-medium">{label}</span>
    </div>
    {badge && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
  </div>
);
