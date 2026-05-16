import {
  LayoutGrid,
  MoreVertical,
  Ticket,
  GitPullRequest,
  MessageSquare,
  Mail,
  Check,
  FileText,
} from "lucide-react";
import { PEOPLE, FILES } from "../data/mockData";

export const ContextPanel = () => {
  return (
    <aside
      className="
        w-full 
        lg:w-80 
        border-t lg:border-t-0 lg:border-l 
        border-slate-200 
        flex 
        flex-col 
        p-4 sm:p-6 
        shrink-0 
        overflow-y-auto
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
          <LayoutGrid size={18} className="text-blue-600 shrink-0" />
          <span>Context</span>
        </div>

        <button className="text-slate-400 hover:text-slate-600 shrink-0">
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Feature Details */}
      <section className="mb-6 sm:mb-8">
        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
              Feature
            </p>

            <p className="text-sm font-semibold text-slate-900 break-words">
              feature#xyz
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
              Type
            </p>

            <span className="inline-flex px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-semibold rounded">
              Feature
            </span>
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
              Status
            </p>

            <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[11px] font-semibold rounded inline-flex items-center gap-1 w-fit">
              <Check size={10} strokeWidth={3} />
              Completed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                Created
              </p>

              <p className="text-xs font-medium">Apr 28, 2024</p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                Updated
              </p>

              <p className="text-xs font-medium">May 13, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Objects */}
      <section className="mb-6 sm:mb-8">
        <h4 className="text-sm font-bold text-slate-900 mb-4">
          Related objects
        </h4>

        <div className="space-y-3">
          {[
            {
              icon: Ticket,
              label: "FEATURE-XYZ",
              sub: "Jira Ticket",
              color: "text-blue-600",
            },
            {
              icon: GitPullRequest,
              label: "#218",
              sub: "GitHub Pull Request",
              color: "text-slate-900",
            },
            {
              icon: MessageSquare,
              label: "Design discussion",
              sub: "Teams Thread",
              color: "text-indigo-600",
            },
            {
              icon: Mail,
              label: "Brand guidelines update",
              sub: "Email",
              color: "text-blue-400",
            },
          ].map((item, 80) => (
            <div
              key={i}
              className="
                flex 
                items-start 
                gap-3 
                cursor-pointer 
                group 
                rounded-lg
                p-2
                hover:bg-slate-50
                transition-colors
              "
            >
              <item.icon
                size={16}
                className={`${item.color} shrink-0 mt-0.5`}
              />

              <div className="min-w-0">
                <p className="text-xs font-semibold group-hover:text-blue-600 transition-colors break-words">
                  {item.label}
                </p>

                <p className="text-[10px] text-slate-400 break-words">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* People */}
      <section className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-slate-900">
            People involved
          </h4>
        </div>

        <div className="space-y-4">
          {PEOPLE.map((person, i) => (
            <div key={i} className="flex items-center gap-3 min-w-0">
              <img
                src={person.img}
                className="w-8 h-8 rounded-full object-cover shrink-0"
                alt={person.name}
              />

              <div className="min-w-0">
                <p className="text-xs font-semibold truncate">
                  {person.name}
                </p>

                <p className="text-[10px] text-slate-400 break-words">
                  {person.role}
                </p>
              </div>
            </div>
          ))}

          <button className="text-[11px] font-bold text-blue-600 hover:underline">
            Show all (6)
          </button>
        </div>
      </section>

      {/* Files */}
      <section>
        <h4 className="text-sm font-bold text-slate-900 mb-4">
          Files changed
        </h4>

        <div className="space-y-3">
          {FILES.map((file, i) => (
            <div
              key={i}
              className="
                flex 
                items-start 
                gap-3 
                group 
                cursor-pointer 
                rounded-lg
                p-2
                hover:bg-slate-50
                transition-colors
                min-w-0
              "
            >
              <div
                className="
                  w-8 h-8 
                  bg-slate-50 
                  border border-slate-100 
                  rounded 
                  flex items-center justify-center 
                  text-slate-400 
                  group-hover:text-blue-500 
                  transition-colors
                  shrink-0
                "
              >
                <FileText size={14} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold group-hover:text-blue-600 transition-colors break-words">
                  {file.name}
                </p>

                <p className="text-[10px] text-slate-400 break-all">
                  {file.path}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};
