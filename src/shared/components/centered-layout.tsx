type CenteredLayoutProps = {
  children: React.ReactNode;
};

export function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="container mx-auto laptop:px-0 px-5">
      <div className="mx-auto laptop:w-6/12 tablet:w-11/12 w-full">
        {children}
      </div>
    </div>
  );
}
