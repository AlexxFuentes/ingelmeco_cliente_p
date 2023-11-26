type PanelProps = React.PropsWithChildren<{
  header: string;
}>;

export function Panel({ header, children }: PanelProps) {
  return (
    <div className="mb-5">
      <span className="w-full inline-block text-lg text-[#202020] font-bold border-b-2 border-b-[#048C88] mb-4">
        {header}
      </span>
      <div className="ais-Panel-body">
        {children}
      </div>
    </div>
  );
}
