"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  to,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  to?: string;
}) => {
  const content = (
    <motion.p
      transition={{ duration: 0.3 }}
      className="cursor-pointer text-sm text-slate-600 hover:text-slate-900 py-2"
    >
      {item}
    </motion.p>
  );

  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {to ? <Link to={to}>{content}</Link> : content}
      {active === item && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}
          className="absolute top-full left-0 -ml-40 pt-2 z-50"
        >
          {/* Invisible bridge to prevent mouse leave */}
          <div className="absolute -top-2 left-0 right-0 h-4" />
          <motion.div
            layoutId="active"
            className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 shadow-xl"
          >
            <motion.div layout className="w-max h-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="hidden lg:flex items-center justify-center gap-6 flex-1"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  to,
  src,
  className = "",
  imageClassName = "w-20 h-12 object-cover",
}: {
  title: string;
  description: string;
  to: string;
  src: string;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <Link to={to} className={`flex space-x-3 group min-w-[200px] ${className}`}>
      <img
        src={src}
        width={80}
        height={50}
        alt={title}
        className={`shrink-0 rounded-md shadow-sm ${imageClassName}`}
      />
      <div>
        <h4 className="text-sm font-semibold mb-0.5 text-slate-900 group-hover:text-slate-700 font-sans-header">
          {title}
        </h4>
        <p className="text-slate-500 text-xs max-w-[10rem] leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2"
    >
      {children}
    </Link>
  );
};
