interface FootProp {
  href: string;
  children: string;
}

function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 w-full h-15 bg-white rounded-t-[20px] flex items-center z-0 shadow-inner">
      <div className="flex w-full items-center justify-between px-10">
        <span className="text-black font-bold text-sm">
          © 2026 Robert de S. Maio
        </span>
      </div>
    </footer>
  );
}

export { Footer };
