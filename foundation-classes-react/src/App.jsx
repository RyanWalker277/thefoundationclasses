import sanjayImg from './assets/sanjay-sharma.jpeg';
import buildingImg from './assets/building.jpeg';

export default function App() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-accent text-3xl">architecture</span>
            <div className="flex flex-col leading-none">
              <h1 className="text-lg font-bold tracking-tighter uppercase text-slate-100">The Foundation</h1>
              <span className="text-[9px] tracking-[0.2em] text-accent uppercase font-medium">An Institute by Duckling School</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-accent transition-colors" href="#philosophy">Philosophy</a>
            <a className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-accent transition-colors" href="#programs">Programs</a>
            <a className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-accent transition-colors" href="#faculty">Faculty</a>
            <a className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-accent transition-colors" href="#infrastructure">Infrastructure</a>
            <a className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-accent transition-colors" href="#timeline">Timeline</a>
            <a className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-accent transition-colors" href="#admissions">Admissions</a>
          </nav>
          <div className="flex items-center gap-6">
            <a href="mailto:info@thefoundationclasses.com" className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-none border border-accent/20 text-xs font-bold tracking-widest uppercase transition-all">
              Enquire Now
            </a>
          </div>
        </div>
      </header>
      <main className="w-full">
        <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent z-10"></div>
            {/* Sophisticated abstract visual representing Physics/Intellect */}
            <img alt="Abstract 3D physics structure" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4OGxGKiKOAEqXdwBzznGbl3H1zJMnqlBOk_qK9krUtBe3CIzVDd3ihreFDobwoTBRF1P4m54XsCg2xMDdGKGltjWF-l8y19PoD0HyEGlv5_K5tL1E_QhwV9lC6xB9IUyjyRMkPApetRkWafdl4mKe5iYOQvCDYnApz2Fg4joCmFKVXvrLwhTHvgkQDR39VQLFg8IODTVnqhuXJ6Qtx5-qfeddN29NgDaYYcdUSh3qR83vIWMgvbdbXmHYK5-cYg2WTazR_6heqGH4"/>
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 border border-accent text-accent text-[10px] uppercase tracking-[0.3em] mb-8">Shift Your Mindset For Success</span>
              <h2 className="text-6xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter text-white">
                Mastery through <span className="text-accent italic font-light">Foundation</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 font-light leading-relaxed">
                Elevating academic excellence through rigorous pedagogy and a global perspective. Prepare for the competitive world with a mindset geared for triumph.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold">
                  <span className="w-12 h-[1px] bg-accent transition-all group-hover:w-20"></span>
                  Discover Our Edge
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="philosophy" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-visible">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 border border-accent/10 -z-10"></div>
              <div className="bg-slate-800/50 p-12 relative z-10 border border-white/5 backdrop-blur-sm">
                <span className="text-accent text-xs uppercase tracking-widest mb-6 block">The Leadership</span>
                <h3 className="text-4xl font-bold mb-8 leading-tight">Global Vision, Academic Rigor</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Under the guidance of <strong>Mr. Sanjay Sharma</strong>, our founder with extensive global academic experience, we bridge the gap between traditional learning and modern intellectual demands.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We don't just teach subjects; we cultivate the cognitive discipline required to excel in complex global environments, ensuring every student develops a deep, fundamental understanding of their core disciplines.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-10 w-48 h-80 bg-primary/10 -z-10"></div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-slate-800 flex items-end p-6 border border-white/5 relative group overflow-hidden">
                  <img alt="Physics Lab" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDsSi1thu15903aMWDE8coxs98Bnh5F7QXf5_ehHS2V19m9SJex0y47KIqZwlx276t3Qn6-uQAc187DjBhhuFv4tVAT7S4OkD1TQOgho9E9oINfhJG2hap2Sz6fW5G3rR8P4nsYFnCzWuFm2sKN_I_2eMUuk4_GJX_oIlTmQL_-vKvk76Tem-AC6zdsSJP0p9S9Wgm93VLROMyfV2ZEp6_At0JBFGoH8mVLCmKy5BgzzfO8SOW5urVHH2rEWET0BvdTPy-EtAY7YAi"/>
                  <p className="relative z-10 text-xs uppercase tracking-widest font-bold">Scientific Inquiry</p>
                </div>
                <div className="h-48 bg-accent/20 border border-accent/30 flex items-end p-6">
                  <p className="text-xs uppercase tracking-widest font-bold text-accent">Strategic Thinking</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-primary/20 border border-primary/30 flex items-end p-6">
                  <p className="text-xs uppercase tracking-widest font-bold">Global Benchmarks</p>
                </div>
                <div className="h-80 bg-slate-800 flex items-end p-6 border border-white/5 relative group overflow-hidden">
                  <img alt="Modern Architecture" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlPO8bq-PfYRiI4Dsu6deMOnD4-y1HnmS9ja9KJgJHYZiVkPhXb3gNQ1o25JZv7B37vK0t7SQ1jcOlQNmMYpFb7wSU5_FW52gPxTX3PEo5KbbW9ZYWprUonSifHRkW6Ss6HXHIWUcLe19hIE7jTR42ZO1RviMHgxTMLDl-98F2LOerz8pJOW4vYcEWVzdwvVcixdvZkScAJyaU5ObUDMbf73gxxUlfjb_ya3A9Gsys5D8n2LYYgClNBGNjn5zUOUAzOuvFEeV-Wupo"/>
                  <p className="relative z-10 text-xs uppercase tracking-widest font-bold">Intellect First</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Faculty Spotlight: Mr. Sanjay Sharma */}
        <section id="faculty" className="px-6 lg:px-20 py-24 bg-background-dark border-y border-slate-800/50">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-5">
              <div className="gold-border p-3 aspect-[4/5] overflow-hidden bg-background-dark mb-8 lg:mb-0">
                <img alt="Portrait of Mr. Sanjay Sharma" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" src={sanjayImg}/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <h2 className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">Faculty Spotlight</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-2">Mr. Sanjay Sharma</h3>
              <p className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-6">M.E (NIT), MBA &bull; 19+ Years Exp.</p>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm mb-8">
                <p>A theoretical physicist with a distinguished 26-year global career. Mr. Sharma has served in the <span className="text-white font-semibold">USA, Japan, Sweden, and Denmark</span>, bringing world-class pedagogy back to Pratap Nagar to elevate Physics education.</p>
                <div className="border-l-2 border-accent-gold pl-4 italic bg-white/5 py-3 pr-4 my-6">
                  "A newspaper snippet recently highlighted his initiative to provide quality Physics education in his hometown after decades of sophisticated research abroad."
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-8">
                <div>
                  <div className="text-2xl font-black text-white">MIT (USA)</div>
                  <div className="text-[10px] text-accent-gold uppercase tracking-widest font-bold">Scientist Affiliation</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">Global</div>
                  <div className="text-[10px] text-accent-gold uppercase tracking-widest font-bold">Extensive Exposure</div>
                </div>
              </div>
              <div className="mt-10 pt-10 border-t border-slate-800/50">
                <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4">Other Departments</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 border border-white/5 hover:border-accent-gold/50 transition-colors">
                    <h5 className="text-white font-bold text-sm">Mr. Vishnu Rajwanshi</h5>
                    <div className="text-xs text-slate-400 mt-1">Mathematics &bull; NIT Alumnus</div>
                    <div className="text-[10px] text-accent-gold uppercase tracking-widest mt-3">2 Years Exp.</div>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/5 hover:border-accent-gold/50 transition-colors">
                    <h5 className="text-white font-bold text-sm">Mr. Manoj Goyal</h5>
                    <div className="text-xs text-slate-400 mt-1">Chemistry</div>
                    <div className="text-[10px] text-accent-gold uppercase tracking-widest mt-3">25 Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="programs" className="bg-slate-900/40 py-32 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
              <div className="lg:w-5/12 pt-12">
                <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter">Core <br/><span className="text-accent italic font-light">Programs</span></h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Our curriculum is meticulously structured to provide a seamless transition from foundational concepts to advanced academic mastery.
                </p>
                <ul className="space-y-8">
                  <li className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform"></span>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-slate-100">Middle School (VI - VIII)</h4>
                    </div>
                    <p className="text-sm text-slate-500 ml-6">Building critical thinking and cognitive foundations through experiential learning.</p>
                  </li>
                  <li className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-2 h-2 rounded-full bg-accent/40 group-hover:scale-150 transition-transform"></span>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-slate-100">Secondary (IX - X)</h4>
                    </div>
                    <p className="text-sm text-slate-500 ml-6">Intensive academic training with a focus on analytical problem-solving and conceptual clarity.</p>
                  </li>
                  <li className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-2 h-2 rounded-full bg-accent/40 group-hover:scale-150 transition-transform"></span>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-slate-100">Senior Secondary (XI - XII)</h4>
                    </div>
                    <p className="text-sm text-slate-500 ml-6">Advanced specialization for competitive excellence in STEM and professional disciplines.</p>
                  </li>
                </ul>
              </div>
              <div className="lg:w-7/12 relative group">
                <div className="absolute -top-4 -right-4 w-full h-full border border-accent/20 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"></div>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img alt="Physics Visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANfRfhJu2Xc4UWcKU3Cwod6gxKfkiMyOnEo_8MYoOPYWdX5AVINTWnpTUdq05sImImTaKsJSxSWbYTfleuklLJbhxI0Cv2pEzVWeeqI_GgAwt6cdioxOwrkqXVPEaejaN_QbJg9j7bS1vzxSgUsmo66wMQr5lQ0opKveeAgOmvqORv8S1P3UVAPA2M3hCOfQ4Y3zOau-I_vCtneWUsOqmXJSSz-MYEppIBpkxcpGvWwIVuIr0H1gej6M4lZLHaRuwrLwAK7cNpmxMv"/>
                  <div className="absolute bottom-0 left-0 p-8 bg-background-dark/90 backdrop-blur-md border-t border-r border-white/10 max-w-xs">
                    <p className="text-[10px] uppercase tracking-widest text-accent mb-2">Methodology</p>
                    <p className="text-sm font-bold leading-tight">Utilizing advanced visualization tools to simplify complex physical phenomena.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Academic Programs & Fees */}
        <section id="fees" className="px-6 lg:px-20 py-24 parchment-bg">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">Academic Catalog</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Rigorous Programs &amp; Structural Fees.</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-accent-gold/30">
                    <th className="py-6 px-4 text-accent-gold text-xs font-bold tracking-widest uppercase">Category (Classes)</th>
                    <th className="py-6 px-4 text-accent-gold text-xs font-bold tracking-widest uppercase">Subjects</th>
                    <th className="py-6 px-4 text-accent-gold text-xs font-bold tracking-widest uppercase">Key Features</th>
                    <th className="py-6 px-4 text-accent-gold text-xs font-bold tracking-widest uppercase text-right">Fee (Per Month)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4">
                      <div className="text-white font-bold text-lg">Middle School</div>
                      <div className="text-xs text-slate-500 mt-1">6th, 7th, 8th</div>
                    </td>
                    <td className="py-6 px-4 text-sm">Maths, Science, S.St, English</td>
                    <td className="py-6 px-4 text-sm">Daily 2-hour classes, Every Saturday Test</td>
                    <td className="py-6 px-4 text-right font-mono text-accent-gold font-bold">Rs. 1000</td>
                  </tr>
                  <tr className="border-b border-slate-800 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4">
                      <div className="text-white font-bold text-lg">Secondary</div>
                      <div className="text-xs text-slate-500 mt-1">9th &amp; 10th</div>
                    </td>
                    <td className="py-6 px-4 text-sm">Maths, Science, S.St, English</td>
                    <td className="py-6 px-4 text-sm">NTSE/Olympiad prep, Course completion by Oct 30th</td>
                    <td className="py-6 px-4 text-right font-mono text-accent-gold font-bold">Rs. 1200<br/><span className="text-[10px] text-slate-500 font-sans tracking-tight font-normal whitespace-nowrap">(Incl. Science Practicals)</span></td>
                  </tr>
                  <tr className="border-b border-slate-800 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4">
                      <div className="text-white font-bold text-lg">Senior Secondary</div>
                      <div className="text-xs text-slate-500 mt-1">11th &amp; 12th</div>
                    </td>
                    <td className="py-6 px-4 text-sm">Physics, Chemistry, Maths, Bio</td>
                    <td className="py-6 px-4 text-sm">JEE/NEET Foundation, 40+ tests per year</td>
                    <td className="py-6 px-4 text-right font-mono text-accent-gold font-bold text-sm">Monthly option</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Infrastructure & Labs */}
        <section id="infrastructure" className="px-6 lg:px-20 py-24 parchment-bg">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">The Environment</h2>
              <h3 className="text-4xl font-bold text-white mb-8">Sanctuary of Learning.</h3>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <span className="material-symbols-outlined text-3xl text-accent-gold">science</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Dedicated Physics Laboratory</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Full-fledged lab where 11th &amp; 12th-grade students perform 15 rigorous experiments each.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <span className="material-symbols-outlined text-3xl text-accent-gold">ac_unit</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">A/C Classrooms &amp; Projectors</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Climate-controlled lecture halls equipped with digital projectors for enhanced visualization.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <span className="material-symbols-outlined text-3xl text-accent-gold">security</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Full CCTV Surveillance</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Ensuring absolute safety and monitored academic discipline across the campus.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <span className="material-symbols-outlined text-3xl text-accent-gold">menu_book</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Free Library Facility</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Extensive collection of reference materials available entirely free of cost for all enrolled students.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <span className="material-symbols-outlined text-3xl text-accent-gold">groups</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Strict Batch Sizes</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Max 10 students (6th-8th) and Max 15 (9th-10th) to ensure completely personalized attention.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <span className="material-symbols-outlined text-3xl text-accent-gold">laptop_mac</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Online Test Portal</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Modern assessment platform with special focus on solving numericals and problem-solving classes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="gold-border p-1 overflow-hidden h-64">
                <img alt="Physics lab equipment" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaiAzPlmZk43SakxnTzjCSMc697th6ZhG7J9Fn7_h6KtAuNQf9CoGEq7klA_GPksNXFjtT1iKXYo3tywJZg8aIdVqMfqsD8wJ73JX80uEeRB_XQHhqqkYRK1bbjU3X-FumDC1vufTdHXMS_Plsj29ElVJrbPcc-n69XxeK9AWIDrtsqjDbj6OAxjYO8FANoz4SPXKE62N4D568yVoXP_e--KGlLXbbbNwaDquHzo7aUZGK9oY5Da69MYTNOwTtCICD0uA_gYz-8tgW"/>
              </div>
              <div className="gold-border p-1 overflow-hidden h-64 mt-12">
                <img alt="Modern classroom" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7z_zyTdT9Oa2U215WDVTHyGWrZjk2YPDnFvZMCmw50f9tBK5_VBT3CvKENu1MGR4azaX61wNhoh22fX6WluH86T_LXM8KUnC9sxX0qjszOt81LbZWb7mc6TAmJwfJ4VuYwbUGo5QKU9kume3LkBV8w6PpUHHWL1mJdUd7Cr8Tk_itubE5kSHG5uhvE7eLjK_ZwGRKQaYv4Czvc9uPaQfpOxcYyamJhUDX3-XMZ2TJmPukRIwInzH86-VTj7rRmOy2Jl93nkdqsPMB"/>
              </div>
            </div>
          </div>
        </section>
        
        {/* Revision Timeline */}
        <section id="timeline" className="px-6 lg:px-20 py-24 bg-background-dark">
          <div className="text-center mb-16">
            <h2 className="text-accent-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">The Mastery Path</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">Academic Timeline</h3>
          </div>
          <div className="relative max-w-4xl mx-auto py-10 timeline-line">
            {/* Point 1 */}
            <div className="relative flex items-center justify-between mb-24">
              <div className="w-5/12 text-right pr-12">
                <h4 className="text-accent-gold font-bold text-xl mb-2">Course Completion</h4>
                <p className="text-slate-400 text-sm italic">By Oct 30th (9th-10th)<br/>By Nov 30th (11th-12th)</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-gold rounded-full border-4 border-background-dark z-10"></div>
              <div className="w-5/12 pl-12">
                <p className="text-slate-400 text-sm">Comprehensive syllabus completion with special attention on solving numericals and problem-solving classes.</p>
              </div>
            </div>
            {/* Point 2 */}
            <div className="relative flex items-center justify-between mb-24">
              <div className="w-5/12 text-right pr-12 order-2 text-left pl-12">
                <h4 className="text-accent-gold font-bold text-xl mb-2">1st Revision</h4>
                <p className="text-slate-400 text-sm italic">December - January</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-gold rounded-full border-4 border-background-dark z-10"></div>
              <div className="w-5/12 pr-12 order-1 text-right">
                <p className="text-slate-400 text-sm">Intensive topical review and past-year paper analysis through our modern online test portal.</p>
              </div>
            </div>
            {/* Point 3 */}
            <div className="relative flex items-center justify-between mb-24">
              <div className="w-5/12 text-right pr-12">
                <h4 className="text-accent-gold font-bold text-xl mb-2">2nd Revision</h4>
                <p className="text-slate-400 text-sm italic">February</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-gold rounded-full border-4 border-background-dark z-10"></div>
              <div className="w-5/12 pl-12">
                <p className="text-slate-400 text-sm">Full-length Mock Exams, personalized doubt-clearing, and final polishing before main examinations.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="admissions">
          <div className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 relative group cursor-pointer overflow-hidden aspect-[16/9] md:aspect-auto md:h-[600px]">
                <img alt="Institutional Corridor" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" src={buildingImg}/>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <h4 className="text-3xl font-black mb-4">Admissions 2024-25</h4>
                  <p className="text-slate-300 max-w-md mb-6 font-light">Secure your place in an environment designed for the intellectually ambitious.</p>
                  <button className="bg-white text-background-dark text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-none">Download Prospectus</button>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-12 flex flex-col justify-center items-center text-center">
                <span className="material-symbols-outlined text-accent text-5xl mb-8">workspace_premium</span>
                <h4 className="text-2xl font-bold mb-6">Expert Faculty</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Mentorship by educators with profound subject expertise and a passion for nurturing young minds.
                </p>
                <a className="text-accent text-[10px] font-bold uppercase tracking-widest border-b border-accent pb-1" href="#faculty">Meet our mentors</a>
              </div>
            </div>
          </div>
          {/* Final CTA */}
          <div className="py-24 px-6 lg:px-20 parchment-bg">
            <div className="max-w-4xl mx-auto gold-border p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl text-accent-gold">military_tech</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">SECURE YOUR LEGACY</h2>
              <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
                Limited seats available for the upcoming academic session. Entrance assessment mandatory for all programs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="mailto:info@thefoundationclasses.com" className="w-full sm:w-auto bg-accent-gold hover:bg-white text-background-dark px-10 py-4 font-black tracking-widest uppercase transition-all duration-300 block text-center">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="bg-background-dark border-t border-white/5 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-accent text-4xl">architecture</span>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-tighter uppercase text-slate-100">The Foundation Classes</h1>
                    <span className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium">An Institute by Duckling School</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm italic mb-4">"Shift Your Mindset For Success"</p>
                <p className="text-accent-gold text-xs font-bold uppercase tracking-widest">Established Since 2013</p>
              </div>
              
              <div className="flex-1 w-full md:w-auto mt-8 md:mt-0 bg-white/5 p-6 border border-white/5 rounded-lg">
                <h5 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-6">Contact Information</h5>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex items-start gap-4">
                  <span className="material-symbols-outlined text-base text-accent shrink-0 pt-1">location_on</span>
                  <span>191/392, Sector 19, Pratap Nagar,<br/>Sanganer, Jaipur</span>
                </p>
                <p className="text-slate-400 text-sm mb-4 flex items-center gap-4">
                  <span className="material-symbols-outlined text-base text-accent shrink-0">phone</span>
                  <span>+91 93140 34040, +91 94629 39274</span>
                </p>
                <p className="text-slate-400 text-sm flex items-center gap-4">
                  <span className="material-symbols-outlined text-base text-accent shrink-0">mail</span>
                  <a href="mailto:info@thefoundationclasses.com" className="hover:text-white transition-colors">info@thefoundationclasses.com</a>
                </p>
              </div>
            </div>
            <div className="pt-10 mt-12 border-t border-white/5 flex justify-center text-center">
              <p className="text-slate-600 text-[10px] uppercase tracking-widest text-center w-full">&copy; 2024 The Foundation Classes (An Institute by Duckling School). All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
