interface FootProp {
  href: string;
  children: string;
}

function Footer() {
  return (
    <footer className="w-full h-13 bg-white rounded-[20px] flex items-center">
      <div className="flex w-full items-center justify-between px-10">
        <span className="text-black font-bold text-sm">
          © 2026 Robert de S. Maio
        </span>
      </div>
    </footer>
  );
}

export { Footer };
