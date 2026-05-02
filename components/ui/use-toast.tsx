"use client";
import * as React from "react";

type ToastState = {
  title?: string;
  description?: string;
  tone?: "default" | "success" | "error";
  open: boolean;
};

type ToastContextValue = {
  state: ToastState;
  show: React.Dispatch<Omit<ToastState, "open">>;
  hide(): void;
};

const ToastCtx = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ToastState>({ open: false });
  const show = (s: Omit<ToastState, "open">) => setState({ ...s, open: true });
  const hide = () => setState((p) => ({ ...p, open: false }));
  return <ToastCtx.Provider value={{ state, show, hide }}>{children}</ToastCtx.Provider>;
}

export function useToast() {
  const ctx = React.useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
