'use client';

import React, { useState } from 'react';
import { Cpu, RefreshCw, Terminal } from 'lucide-react';

interface OpcodeDef {
  code: string;
  name: string;
  desc: string;
  verilogSnippet: string;
}

const OPCODES: OpcodeDef[] = [
  {
    code: '0000',
    name: 'ADD',
    desc: 'Arithmetic Addition (A + B)',
    verilogSnippet: '4\'b0000: {carry, result} = a + b;',
  },
  {
    code: '0001',
    name: 'SUB',
    desc: 'Arithmetic Subtraction (A - B)',
    verilogSnippet: '4\'b0001: {carry, result} = a - b;',
  },
  {
    code: '0010',
    name: 'AND',
    desc: 'Bitwise Logical AND (A & B)',
    verilogSnippet: '4\'b0010: result = a & b;',
  },
  {
    code: '0011',
    name: 'OR',
    desc: 'Bitwise Logical OR (A | B)',
    verilogSnippet: '4\'b0011: result = a | b;',
  },
  {
    code: '0100',
    name: 'XOR',
    desc: 'Bitwise Logical XOR (A ^ B)',
    verilogSnippet: '4\'b0100: result = a ^ b;',
  },
  {
    code: '0101',
    name: 'SHL',
    desc: 'Logical Shift Left (A << 1)',
    verilogSnippet: '4\'b0101: {carry, result} = {a[7], a << 1};',
  },
  {
    code: '0110',
    name: 'SHR',
    desc: 'Logical Shift Right (A >> 1)',
    verilogSnippet: '4\'b0110: {result, carry} = {a >> 1, a[0]};',
  },
  {
    code: '0111',
    name: 'MUL',
    desc: 'Unsigned Multiplication (A * B)',
    verilogSnippet: '4\'b0111: {carry, result} = a * b; // lower 8-bit',
  },
  {
    code: '1000',
    name: 'CMP',
    desc: 'Magnitude Compare (A vs B)',
    verilogSnippet: '4\'b1000: result = (a == b) ? 8\'d0 : (a > b ? 8\'d1 : 8\'d2);',
  },
];

export default function AluSimulator() {
  const [valA, setValA] = useState<number>(45); // 00101101
  const [valB, setValB] = useState<number>(27); // 00011011
  const [selectedOpIndex, setSelectedOpIndex] = useState<number>(0);

  const selectedOp = OPCODES[selectedOpIndex];

  // Helper to format as 8-bit binary
  const toBinary8 = (val: number) => (val & 0xff).toString(2).padStart(8, '0');
  const toHex8 = (val: number) => '0x' + (val & 0xff).toString(16).toUpperCase().padStart(2, '0');

  // Toggle individual bit
  const toggleBitA = (indexFromLeft: number) => {
    const bitPos = 7 - indexFromLeft;
    setValA((prev) => prev ^ (1 << bitPos));
  };

  const toggleBitB = (indexFromLeft: number) => {
    const bitPos = 7 - indexFromLeft;
    setValB((prev) => prev ^ (1 << bitPos));
  };

  // ALU Computation Logic
  const computeAlu = () => {
    let result = 0;
    let carry = false;
    let overflow = false;

    const a = valA & 0xff;
    const b = valB & 0xff;

    switch (selectedOp.name) {
      case 'ADD': {
        const sum = a + b;
        result = sum & 0xff;
        carry = sum > 255;
        // Signed overflow: (a_sign == b_sign) && (res_sign != a_sign)
        const signA = (a >> 7) & 1;
        const signB = (b >> 7) & 1;
        const signR = (result >> 7) & 1;
        overflow = signA === signB && signR !== signA;
        break;
      }
      case 'SUB': {
        const diff = a - b;
        result = diff & 0xff;
        carry = a < b; // borrow
        const signA = (a >> 7) & 1;
        const signB = (b >> 7) & 1;
        const signR = (result >> 7) & 1;
        overflow = signA !== signB && signR !== signA;
        break;
      }
      case 'AND':
        result = a & b;
        break;
      case 'OR':
        result = a | b;
        break;
      case 'XOR':
        result = a ^ b;
        break;
      case 'SHL':
        carry = ((a >> 7) & 1) === 1;
        result = (a << 1) & 0xff;
        break;
      case 'SHR':
        carry = (a & 1) === 1;
        result = (a >> 1) & 0xff;
        break;
      case 'MUL': {
        const prod = a * b;
        result = prod & 0xff;
        carry = prod > 255;
        break;
      }
      case 'CMP':
        result = a === b ? 0 : a > b ? 1 : 2;
        break;
      default:
        result = 0;
    }

    const zero = (result & 0xff) === 0;
    const negative = ((result >> 7) & 1) === 1;

    return { result: result & 0xff, carry, zero, overflow, negative };
  };

  const { result, carry, zero, overflow, negative } = computeAlu();

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-[#070913]/90 backdrop-blur-xl p-5 sm:p-7 shadow-[0_0_40px_rgba(6,182,212,0.12)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span>Interactive RTL 8-bit ALU Simulator</span>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ACTIVE
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Live simulation of Satya&apos;s Verilog RTL design datapath
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setValA(45);
            setValB(27);
            setSelectedOpIndex(0);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Registers</span>
        </button>
      </div>

      {/* Simulator Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Input Operands */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Operand A */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono font-semibold text-cyan-400 tracking-wider">
                REGISTER A [7:0]
              </label>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span>Dec: {valA}</span>
                <span>•</span>
                <span className="text-cyan-300">{toHex8(valA)}</span>
              </div>
            </div>

            {/* Clickable 8-bit register row */}
            <div className="grid grid-cols-8 gap-1 mb-2">
              {toBinary8(valA)
                .split('')
                .map((bit, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleBitA(idx)}
                    title={`Click to flip Bit ${7 - idx}`}
                    className={`h-9 rounded font-mono text-xs font-bold transition-all ${
                      bit === '1'
                        ? 'bg-cyan-500/30 border border-cyan-400 text-cyan-200 shadow-[0_0_8px_rgba(6,182,212,0.4)]'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {bit}
                  </button>
                ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="255"
                value={valA}
                onChange={(e) => setValA(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>

          {/* Operand B */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono font-semibold text-violet-400 tracking-wider">
                REGISTER B [7:0]
              </label>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span>Dec: {valB}</span>
                <span>•</span>
                <span className="text-violet-300">{toHex8(valB)}</span>
              </div>
            </div>

            {/* Clickable 8-bit register row */}
            <div className="grid grid-cols-8 gap-1 mb-2">
              {toBinary8(valB)
                .split('')
                .map((bit, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleBitB(idx)}
                    title={`Click to flip Bit ${7 - idx}`}
                    className={`h-9 rounded font-mono text-xs font-bold transition-all ${
                      bit === '1'
                        ? 'bg-violet-500/30 border border-violet-400 text-violet-200 shadow-[0_0_8px_rgba(168,85,247,0.4)]'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {bit}
                  </button>
                ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="255"
                value={valB}
                onChange={(e) => setValB(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-400"
              />
            </div>
          </div>

          {/* Opcode Selector Chips */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                OPCODE SELECT [3:0]
              </span>
              <span className="text-xs font-mono text-amber-400">
                {selectedOp.code} ({selectedOp.name})
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
              {OPCODES.map((op, idx) => (
                <button
                  key={op.code}
                  onClick={() => setSelectedOpIndex(idx)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedOpIndex === idx
                      ? 'bg-amber-500/20 border border-amber-400/80 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {op.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Output & Flags Display */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          {/* Main Output Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-violet-950/30 to-black border border-cyan-500/40 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  ALU_OUT [7:0]
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                  {selectedOp.desc}
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400">
                SEL: <span className="text-amber-400 font-bold">{selectedOp.code}</span>
              </div>
            </div>

            {/* Output Visualizer */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="grid grid-cols-8 gap-1.5 w-full sm:w-auto">
                {toBinary8(result)
                  .split('')
                  .map((bit, idx) => (
                    <div
                      key={idx}
                      className={`h-11 w-8 sm:w-9 flex items-center justify-center rounded-lg font-mono text-sm font-bold ${
                        bit === '1'
                          ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(6,182,212,0.6)] font-black'
                          : 'bg-black/60 border border-white/10 text-slate-600'
                      }`}
                    >
                      {bit}
                    </div>
                  ))}
              </div>

              <div className="flex sm:flex-col items-center justify-around gap-2 text-right w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Decimal</span>
                  <span className="text-2xl font-mono font-black text-cyan-300">{result}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Hexadecimal</span>
                  <span className="text-xl font-mono font-bold text-violet-300">{toHex8(result)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Status Flags LEDs */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono text-slate-400 tracking-wider uppercase block mb-3">
              Hardware Status Flags [C, Z, V, N]
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Carry Flag */}
              <div
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  carry
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-500'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    carry ? 'bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]' : 'bg-slate-700'
                  }`}
                />
                <div>
                  <div className="text-xs font-mono font-bold">CARRY [C]</div>
                  <div className="text-[10px] font-mono opacity-80">{carry ? 'SET (1)' : 'CLEAR (0)'}</div>
                </div>
              </div>

              {/* Zero Flag */}
              <div
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  zero
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-500'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    zero ? 'bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]' : 'bg-slate-700'
                  }`}
                />
                <div>
                  <div className="text-xs font-mono font-bold">ZERO [Z]</div>
                  <div className="text-[10px] font-mono opacity-80">{zero ? 'SET (1)' : 'CLEAR (0)'}</div>
                </div>
              </div>

              {/* Overflow Flag */}
              <div
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  overflow
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-500'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    overflow ? 'bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]' : 'bg-slate-700'
                  }`}
                />
                <div>
                  <div className="text-xs font-mono font-bold">OVERFLOW [V]</div>
                  <div className="text-[10px] font-mono opacity-80">{overflow ? 'SET (1)' : 'CLEAR (0)'}</div>
                </div>
              </div>

              {/* Negative Flag */}
              <div
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  negative
                    ? 'bg-purple-500/20 border-purple-400 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-500'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    negative ? 'bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]' : 'bg-slate-700'
                  }`}
                />
                <div>
                  <div className="text-xs font-mono font-bold">NEGATIVE [N]</div>
                  <div className="text-[10px] font-mono opacity-80">{negative ? 'SET (1)' : 'CLEAR (0)'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Verilog RTL Snippet Display */}
          <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 mb-1.5 pb-1 border-b border-white/5">
              <span className="flex items-center gap-1.5 text-cyan-400 text-[11px]">
                <Terminal className="w-3.5 h-3.5" />
                <span>alu.v RTL Execution Case</span>
              </span>
              <span className="text-[10px] text-slate-500">Icarus Verilog Synthesizable</span>
            </div>
            <code className="text-emerald-400 block overflow-x-auto py-1">
              {selectedOp.verilogSnippet}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
