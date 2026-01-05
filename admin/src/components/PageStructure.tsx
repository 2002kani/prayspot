import type { PropsWithChildren } from "react";

const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full max-w-screen-xl mx-auto">{children}</div>;
};

const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
};

const PageSemiTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-gray-500 ">{children}</p>;
};

const PageHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="pt-6 pb-3 space-y-1 md:px-4 lg:px-10">
      <div className="flex items-start justify-between gap-4">{children}</div>
    </div>
  );
};

const PageList: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="pt-8 pb-20 md:px-4 lg:px-10">{children}</div>;
};

const PageHeaderRight: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex items-center gap-2 self-end">{children}</div>;
};

export {
  Page,
  PageHeader,
  PageList,
  PageTitle,
  PageSemiTitle,
  PageHeaderRight,
};
