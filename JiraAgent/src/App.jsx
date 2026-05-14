import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { AnswerSection } from './components/AnswerSection';
import { ContextPanel } from './components/ContextPanel';

function App() {
  const [activeTab, setActiveTab] = useState('Answer');

  return (
    <div className="flex h-screen bg-white text-slate-900 font-sans overflow-hidden">
      <Sidebar />
      
      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <AnswerSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
      
      <ContextPanel />
    </div>
  );
}

export default App;
