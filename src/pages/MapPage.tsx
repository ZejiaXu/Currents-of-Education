import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ReactFlow, 
  Background, 
  Controls, 
  Edge, 
  Node, 
  MarkerType,
  useNodesState,
  useEdgesState,
  Panel
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { thinkers, Thinker } from "../data/thinkers";
import { ThinkerFlashcard } from "../components/ThinkerFlashcard";

const eras = [
  { id: "era-1", title: "1. Ancient Greek and Roman Foundations", period: "Antiquity", height: 1000, color: "rgba(229, 225, 214, 0.4)" },
  { id: "era-2", title: "2. Early Christian and Medieval Education", period: "Middle Ages", height: 1000, color: "rgba(15, 23, 42, 0.05)" },
  { id: "era-3", title: "3. Enlightenment and Early Modern", period: "Enlightenment", height: 1200, color: "rgba(181, 148, 16, 0.05)" },
  { id: "era-4", title: "4. Nineteenth-Century Pedagogy", period: "19th Century", height: 1200, color: "rgba(229, 225, 214, 0.4)" },
  { id: "era-5", title: "5. Progressive Education & Critical Theory", period: "20th Century", height: 3200, color: "rgba(15, 23, 42, 0.08)" },
  { id: "era-6", title: "6. Contemporary Educational Theory", period: "Contemporary", height: 1800, color: "rgba(181, 148, 16, 0.1)" },
];

const nodeTypes = {
  eraGroup: ({ data }: any) => (
    <div style={{ width: '100%', height: '100%', backgroundColor: data.color, borderTop: '2px dashed #B59410', padding: '60px' }} className="rounded-sm flex flex-col justify-start">
      <h2 className="text-4xl md:text-6xl font-serif text-[#0F172A] opacity-20 tracking-tight leading-none">{data.title}</h2>
      <span className="text-[10px] uppercase font-bold tracking-widest text-[#B59410] mt-4 block">Historical Epoch</span>
    </div>
  )
};

export default function MapPage() {
  const navigate = useNavigate();
  const [selectedThinker, setSelectedThinker] = useState<Thinker | null>(null);
  const [filterType, setFilterType] = useState<"all" | "influence" | "opposition">("all");
  const [viewMode, setViewMode] = useState<"river" | "timeline" | "network">("river");

  const { initialNodes, initialEdges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    // --- NODES GENERATION ---
    if (viewMode === "river" || viewMode === "timeline") {
      let currentY = 0;
      
      eras.forEach(era => {
        // Background Era Node
        nodes.push({
          id: `era-${era.id}`,
          type: 'eraGroup',
          position: { x: -500, y: currentY },
          data: { title: era.title, color: era.color },
          style: { width: 2000, height: era.height, zIndex: -1, pointerEvents: 'none' },
          selectable: false,
          draggable: false,
          connectable: false,
        });

        // Thinkers for this era
        const eraThinkers = thinkers.filter(t => t.period === era.period);
        eraThinkers.forEach((t, i) => {
          // Spread them out vertically
          let y = currentY + 150 + (i * ((era.height - 200) / Math.max(1, eraThinkers.length)));
          let x = 0;
          
          if (viewMode === "river") {
             // Meander logic: a sine wave that flows downwards
             x = 400 + Math.sin(y / 250) * 350;
             // Stagger randomly a bit to feel organic
             x += (Math.random() - 0.5) * 100;
          } else {
             // Strict timeline
             x = 500; 
          }
          
          nodes.push({
            id: t.id,
            position: { x, y },
            data: { label: (
              <div className="flex flex-col items-center justify-center h-full group">
                <span className="font-serif italic text-white text-xl leading-none font-bold">{t.name.charAt(0)}</span>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase whitespace-nowrap text-brand-text group-hover:text-brand-gold-muted transition-colors bg-white/80 px-2 py-0.5 rounded-sm backdrop-blur-sm shadow-sm border border-brand-border">
                  {t.name}
                </div>
              </div>
            ) },
            style: { 
              background: 'var(--color-brand-navy)', 
              border: '4px solid white',
              borderRadius: '50%',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              width: '56px',
              height: '56px',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10
            }
          });
        });
        
        currentY += era.height;
      });

    } else if (viewMode === "network") {
      // Network Mode: Concentric circles ignoring strict time
      thinkers.forEach((t, index) => {
        const total = thinkers.length;
        const angle = (index / total) * Math.PI * 2 * 2.5; // spiral out
        const radius = 200 + (index * 25); 
        const x = 500 + Math.cos(angle) * radius;
        const y = 800 + Math.sin(angle) * radius;

        nodes.push({
            id: t.id,
            position: { x, y },
            data: { label: (
              <div className="flex flex-col items-center justify-center h-full group">
                <span className="font-serif italic text-white text-xl leading-none font-bold">{t.name.charAt(0)}</span>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase whitespace-nowrap text-brand-text group-hover:text-brand-gold-muted transition-colors bg-white/80 px-2 py-0.5 rounded-sm backdrop-blur-sm shadow-sm border border-brand-border">
                  {t.name}
                </div>
              </div>
            ) },
            style: { 
              background: 'var(--color-brand-navy)', 
              border: '4px solid white',
              borderRadius: '50%',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              width: '56px',
              height: '56px',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10
            }
          });
      });
    }

    // --- EDGES GENERATION ---
    thinkers.forEach(t => {
      // Influence Edges
      if (filterType === "all" || filterType === "influence") {
        t.influenced.forEach(targetId => {
          edges.push({
            id: `e-inf-${t.id}-${targetId}`,
            source: t.id,
            target: targetId,
            animated: true,
            style: { stroke: 'var(--color-brand-gold-muted)', strokeWidth: 1.5, opacity: 0.6 },
            markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--color-brand-gold-muted)' },
          });
        });
      }

      // Opposition Edges
      if (filterType === "all" || filterType === "opposition") {
        t.opposedTo.forEach(targetId => {
          edges.push({
            id: `e-opp-${t.id}-${targetId}`,
            source: t.id,
            target: targetId,
            animated: false,
            style: { stroke: '#1A1A1A', strokeWidth: 1.5, strokeDasharray: '4,4', opacity: 0.8 },
            markerEnd: { type: MarkerType.ArrowClosed, color: '#1A1A1A' },
            type: 'straight'
          });
        });
      }
    });

    return { initialNodes: nodes, initialEdges: edges };
  }, [filterType, viewMode]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update when views change
  useMemo(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onNodeClick = useCallback((_: any, node: Node) => {
    if (node.id.startsWith('era-')) return;
    const t = thinkers.find(t => t.id === node.id);
    if (t) setSelectedThinker(t);
  }, []);

  const onNodeDoubleClick = useCallback((_: any, node: Node) => {
    if (node.id.startsWith('era-')) return;
    const t = thinkers.find(t => t.id === node.id);
    if (t) navigate(`/thinker/${t.id}`);
  }, [navigate]);

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-brand-bg relative overflow-hidden" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        minZoom={0.1}
        maxZoom={1.5}
      >
        <Background gap={20} size={1} color="var(--color-brand-border)" />
        <Controls className="bg-white text-brand-navy shadow-sm border border-brand-border" showInteractive={false} />
        
        <Panel position="top-left" className="bg-brand-surface/95 backdrop-blur-md border border-brand-border text-brand-text p-6 shadow-xl m-4 w-80 rounded-sm">
          <div className="mb-6 border-b border-brand-border pb-4">
             <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8471] mb-2">Display Mode</h2>
             <div className="flex bg-[#F4F1E9] p-1 rounded-sm border border-[#E5E1D6]">
               <button onClick={() => setViewMode("river")} className={`flex-1 text-[9px] font-bold uppercase tracking-widest py-1.5 px-2 rounded-sm transition-all ${viewMode === 'river' ? 'bg-white shadow-sm text-[#0F172A]' : 'text-gray-500'}`}>River</button>
               <button onClick={() => setViewMode("timeline")} className={`flex-1 text-[9px] font-bold uppercase tracking-widest py-1.5 px-2 rounded-sm transition-all ${viewMode === 'timeline' ? 'bg-white shadow-sm text-[#0F172A]' : 'text-gray-500'}`}>Timeline</button>
               <button onClick={() => setViewMode("network")} className={`flex-1 text-[9px] font-bold uppercase tracking-widest py-1.5 px-2 rounded-sm transition-all ${viewMode === 'network' ? 'bg-white shadow-sm text-[#0F172A]' : 'text-gray-500'}`}>Network</button>
             </div>
          </div>
          
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8471] mb-3">Navigation Map</h2>
          <p className="text-xs text-gray-500 mb-6 italic leading-relaxed bg-[#FDFCF8] p-3 border border-brand-border border-dashed">
            Drag to pan. Scroll to zoom.<br/>
            <strong>Single-click</strong> a node for a quick card.<br/>
            <strong>Double-click</strong> to open full historical dossier.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-navy border-b border-brand-border pb-1">Connection Type</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-brand-gold-muted transition-colors">
                <input 
                  type="radio" 
                  name="filter" 
                  checked={filterType === "all"} 
                  onChange={() => setFilterType("all")}
                  className="accent-brand-navy"
                /> 
                <span>All Connections</span>
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-brand-gold-muted transition-colors">
                 <input 
                  type="radio" 
                  name="filter" 
                  checked={filterType === "influence"} 
                  onChange={() => setFilterType("influence")}
                  className="accent-brand-gold-muted"
                />
                <span className="flex items-center gap-2">
                  <span className="w-4 border-b-2 border-[#B59410]"></span> 
                  Inheritance
                </span>
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-brand-gold-muted transition-colors">
                <input 
                  type="radio" 
                  name="filter" 
                  checked={filterType === "opposition"} 
                  onChange={() => setFilterType("opposition")}
                  className="accent-[#1A1A1A]"
                />
                <span className="flex items-center gap-2">
                  <span className="w-4 border-b-[1.5px] border-[#1A1A1A] border-dashed"></span> 
                  Critique / Opposition
                </span>
              </label>
            </div>
          </div>
        </Panel>
      </ReactFlow>

      {selectedThinker && (
        <ThinkerFlashcard thinker={selectedThinker} onClose={() => setSelectedThinker(null)} />
      )}
    </div>
  );
}
