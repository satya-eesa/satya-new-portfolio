'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';

interface OpcodeDef {
  code: string;
  name: string;
  symbol: string;
  desc: string;
  verilog: string;
}

const opcodes: OpcodeDef[] = [
  { code: '0000', name: 'ADD', symbol: '+', desc: '8-bit Addition with Carry Out', verilog: "4'b0000: {carry, result} = a + b;" },
  { code: '0001', name: 'SUB', symbol: '−', desc: '8-bit Subtraction with Borrow', verilog: "4'b0001: {carry, result} = a - b;" },
  { code: '0111', name: 'MUL', symbol: '×', desc: 'Unsigned Multiplication (Lower 8-bit)', verilog: "4'b0111: {carry, result} = a * b;" },
  { code: '0010', name: 'AND', symbol: '&', desc: 'Bitwise Logical AND', verilog: "4'b0010: result = a & b;" },
  { code: '0011', name: 'OR', symbol: '|', desc: 'Bitwise Logical OR', verilog: "4'b0011: result = a | b;" },
  { code: '0100', name: 'XOR', symbol: '^', desc: 'Bitwise Logical Exclusive-OR', verilog: "4'b0100: result = a ^ b;" },
  { code: '0101', name: 'NOT', symbol: '~', desc: 'Bitwise Inversion (~A)', verilog: "4'b0101: result = ~a;" },
  { code: '0110', name: 'SLL', symbol: '<<', desc: 'Shift Left Logical (A << 1)', verilog: "4'b0110: result = a << 1;" },
  { code: '1000', name: 'SRL', symbol: '>>', desc: 'Shift Right Logical (A >> 1)', verilog: "4'b1000: result = a >> 1;" },
];

const presets = [
  { label: 'Basic Addition', a: 42, b: 27, opIndex: 0 },
  { label: 'Multiplication', a: 14, b: 6, opIndex: 2 },
  { label: 'Carry Overflow', a: 220, b: 50, opIndex: 0 },
  { label: 'Zero Flag Test', a: 64, b: 64, opIndex: 1 },
  { label: 'Bitwise Masking', a: 0b11110000, b: 0b10101010, opIndex: 3 },
];

export default function AluSimulator() {
  const [valA, setValA] = useState<number>(45);
  const [valB, setValB] = useState<number>(27);
  const [selectedOpIndex, setSelectedOpIndex] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [showCodeTab, setShowCodeTab] = useState<'visual' | 'verilog'>('visual');

  const selectedOp = opcodes[selectedOpIndex];

  // Hardware computation logic
  const a = Math.max(0, Math.min(255, valA));
  const b = Math.max(0, Math.min(255, valB));

  let rawResult = 0;
  let flagC = false;

  switch (selectedOp.name) {
    case 'ADD':
      rawResult = a + b;
      flagC = rawResult > 255;
      break;
    case 'SUB':
      rawResult = a - b;
      flagC = a < b; // borrow
      break;
    case 'AND':
      rawResult = a & b;
      break;
    case 'OR':
      rawResult = a | b;
      break;
    case 'XOR':
      rawResult = a ^ b;
      break;
    case 'NOT':
      rawResult = ~a & 0xff;
      break;
    case 'SLL':
      rawResult = (a << 1);
      flagC = (a & 0x80) !== 0;
      break;
    case 'SRL':
      rawResult = (a >> 1);
      flagC = (a & 0x01) !== 0;
      break;
    case 'MUL':
      rawResult = a * b;
      flagC = rawResult > 255;
      break;
    default:
      rawResult = 0;
  }

  const result8bit = ((rawResult % 256) + 256) % 256;
  const flagZ = result8bit === 0;
  const flagN = (result8bit & 0x80) !== 0;

  // Signed overflow detection
  let flagV = false;
  if (selectedOp.name === 'ADD') {
    const aSign = (a & 0x80) !== 0;
    const bSign = (b & 0x80) !== 0;
    const rSign = (result8bit & 0x80) !== 0;
    flagV = (aSign === bSign) && (rSign !== aSign);
  } else if (selectedOp.name === 'SUB') {
    const aSign = (a & 0x80) !== 0;
    const bSign = (b & 0x80) !== 0;
    const rSign = (result8bit & 0x80) !== 0;
    flagV = (aSign !== bSign) && (rSign !== aSign);
  }

  const toBinary8 = (val: number) => val.toString(2).padStart(8, '0');
  const toHex2 = (val: number) => '0x' + val.toString(16).toUpperCase().padStart(2, '0');

  const binaryResult = toBinary8(result8bit);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedOp.verilog);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div id="silicon-lab" className="rounded-3xl glass-panel p-6 sm:p-9 border border-white/[0.12] shadow-2xl relative overflow-hidden">
      
      {/* Decorative ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-indigo-500/15 via-cyan-500/5 to-transparent blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Silicon Lab</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            8-Bit Modular RTL ALU Simulator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Experience the real-time Verilog datapath, status flags, and logic synthesis in action.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-white/[0.08] text-xs font-medium">
          <button
            onClick={() => setShowCodeTab('visual')}
            className={`px-3 py-1.5 rounded-lg transition ${
              showCodeTab === 'visual'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Visual Lab
          </button>
          <button
            onClick={() => setShowCodeTab('verilog')}
            className={`px-3 py-1.5 rounded-lg transition ${
              showCodeTab === 'verilog'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Verilog Code
          </button>
        </div>
      </div>

      {/* Quick Test Presets */}
      <div className="pt-6 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Quick Test Presets:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setValA(preset.a);
                setValB(preset.b);
                setSelectedOpIndex(preset.opIndex);
              }}
              className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-indigo-400/40 text-xs font-medium text-slate-300 hover:text-white transition"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {showCodeTab === 'visual' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 relative z-10">
          
          {/* Left Column: Input Operands & Opcode Buttons (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Opcode Selector Buttons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
                Select ALU Opcode ({selectedOp.name}: {selectedOp.desc})
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {opcodes.map((op, idx) => {
                  const isSelected = selectedOpIndex === idx;
                  return (
                    <button
                      key={op.name}
                      onClick={() => setSelectedOpIndex(idx)}
                      className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all duration-200 border ${
                        isSelected
                          ? 'bg-gradient-to-br from-indigo-600 to-cyan-600 text-white border-cyan-400 shadow-lg shadow-indigo-500/25 scale-[1.02]'
                          : 'bg-white/[0.03] text-slate-300 border-white/[0.06] hover:bg-white/[0.07] hover:text-white'
                      }`}
                    >
                      <span className="text-base font-bold font-mono">{op.symbol}</span>
                      <span className="text-[11px] font-mono tracking-tight">{op.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Controls for A and B */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Operand A */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-300">Operand A [7:0]</span>
                  <span className="font-mono text-cyan-300 font-bold">{toHex2(a)}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => setValA(Math.max(0, a - 1))}
                    className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={a}
                    onChange={(e) => setValA(Number(e.target.value))}
                    className="flex-1 accent-indigo-500 cursor-pointer"
                  />
                  <button
                    onClick={() => setValA(Math.min(255, a + 1))}
                    className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Dec: <strong className="text-white">{a}</strong></span>
                  <span>Bin: {toBinary8(a)}</span>
                </div>
              </div>

              {/* Operand B */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-300">Operand B [7:0]</span>
                  <span className="font-mono text-indigo-300 font-bold">{toHex2(b)}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => setValB(Math.max(0, b - 1))}
                    className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={b}
                    onChange={(e) => setValB(Number(e.target.value))}
                    className="flex-1 accent-indigo-500 cursor-pointer"
                  />
                  <button
                    onClick={() => setValB(Math.min(255, b + 1))}
                    className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Dec: <strong className="text-white">{b}</strong></span>
                  <span>Bin: {toBinary8(b)}</span>
                </div>
              </div>

            </div>

            {/* Synthesizable Verilog Snippet Strip */}
            <div className="p-3.5 rounded-2xl bg-[#060912] border border-white/[0.08] flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 overflow-x-auto text-slate-300">
                <span className="text-indigo-400 font-bold">Verilog RTL:</span>
                <code className="text-cyan-300">{selectedOp.verilog}</code>
              </div>
              <button
                onClick={handleCopyCode}
                className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition flex-shrink-0 ml-2"
                title="Copy snippet"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

          {/* Right Column: Output Display & Hardware Status Flags (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Result Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1222] to-[#070b16] border border-indigo-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  ALU Result Bus [7:0]
                </span>
                <span className="text-xs font-mono font-bold text-cyan-300">
                  OPCODE: {selectedOp.code}
                </span>
              </div>

              {/* Huge Numbers */}
              <div className="flex items-baseline justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight">
                    {result8bit}
                  </span>
                  <span className="text-xs text-slate-400 font-mono mt-0.5">Decimal Value</span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300">
                    {toHex2(result8bit)}
                  </span>
                  <span className="text-xs text-slate-400 font-mono mt-0.5">Hex Byte</span>
                </div>
              </div>

              {/* 8-bit visual LED indicator strip */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  Binary Bits (MSB to LSB):
                </span>
                <div className="grid grid-cols-8 gap-1.5 text-center font-mono">
                  {binaryResult.split('').map((bit, bitIdx) => {
                    const isOne = bit === '1';
                    return (
                      <div
                        key={bitIdx}
                        className={`p-2 rounded-lg border text-xs font-bold transition-all duration-300 ${
                          isOne
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                            : 'bg-white/[0.02] border-white/[0.06] text-slate-500'
                        }`}
                      >
                        <div>{bit}</div>
                        <div className="text-[9px] text-slate-500 font-normal">b{7 - bitIdx}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Hardware Status Flags */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
                Hardware Status Flags
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                
                {/* Carry Flag */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    flagC
                      ? 'bg-amber-500/15 border-amber-400/60 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'bg-white/[0.02] border-white/[0.06] text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold font-sans">Carry [C]</span>
                    <span className={`w-2 h-2 rounded-full ${flagC ? 'bg-amber-400 shadow-[0_0_6px_#f59e0b]' : 'bg-slate-700'}`} />
                  </div>
                  <span className="text-[10px] text-slate-400 block font-sans">
                    {flagC ? 'Active: Carry / Borrow' : 'Inactive'}
                  </span>
                </div>

                {/* Zero Flag */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    flagZ
                      ? 'bg-emerald-500/15 border-emerald-400/60 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'bg-white/[0.02] border-white/[0.06] text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold font-sans">Zero [Z]</span>
                    <span className={`w-2 h-2 rounded-full ${flagZ ? 'bg-emerald-400 shadow-[0_0_6px_#10b981]' : 'bg-slate-700'}`} />
                  </div>
                  <span className="text-[10px] text-slate-400 block font-sans">
                    {flagZ ? 'Active: Result == 0' : 'Inactive'}
                  </span>
                </div>

                {/* Overflow Flag */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    flagV
                      ? 'bg-rose-500/15 border-rose-400/60 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                      : 'bg-white/[0.02] border-white/[0.06] text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold font-sans">Overflow [V]</span>
                    <span className={`w-2 h-2 rounded-full ${flagV ? 'bg-rose-400 shadow-[0_0_6px_#f43f5e]' : 'bg-slate-700'}`} />
                  </div>
                  <span className="text-[10px] text-slate-400 block font-sans">
                    {flagV ? 'Active: Signed Overflow' : 'Inactive'}
                  </span>
                </div>

                {/* Negative Flag */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    flagN
                      ? 'bg-violet-500/15 border-violet-400/60 text-violet-200 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                      : 'bg-white/[0.02] border-white/[0.06] text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold font-sans">Negative [N]</span>
                    <span className={`w-2 h-2 rounded-full ${flagN ? 'bg-violet-400 shadow-[0_0_6px_#8b5cf6]' : 'bg-slate-700'}`} />
                  </div>
                  <span className="text-[10px] text-slate-400 block font-sans">
                    {flagN ? 'Active: Bit 7 == 1' : 'Inactive'}
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Verilog Code Inspector Tab */
        <div className="mt-8 p-6 rounded-2xl bg-[#050811] border border-white/[0.08] font-mono text-xs relative z-10">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
            <span className="text-slate-400 font-sans">Complete RTL Module Snippet (Verilog HDL)</span>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-sans text-xs font-semibold"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <pre className="text-slate-300 leading-relaxed overflow-x-auto p-4 rounded-xl bg-black/60 border border-white/[0.04]">
{`module alu_8bit (
    input  wire [7:0] a,
    input  wire [7:0] b,
    input  wire [3:0] opcode,
    output reg  [7:0] result,
    output reg        carry,
    output wire       zero,
    output wire       negative,
    output reg        overflow
);

    always @(*) begin
        carry    = 1'b0;
        overflow = 1'b0;
        case (opcode)
            4'b0000: {carry, result} = a + b;           // ADD
            4'b0001: {carry, result} = a - b;           // SUB
            4'b0010: result          = a & b;           // AND
            4'b0011: result          = a | b;           // OR
            4'b0100: result          = a ^ b;           // XOR
            4'b0101: result          = ~a;              // NOT
            4'b0110: {carry, result} = {a[7], a << 1};  // SLL
            4'b0111: {carry, result} = a * b;           // MUL
            4'b1000: {result, carry} = {a >> 1, a[0]};  // SRL
            default: result          = 8'h00;
        endcase
    end

    assign zero     = (result == 8'h00);
    assign negative = result[7];

endmodule`}
          </pre>
        </div>
      )}

    </div>
  );
}
