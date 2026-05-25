import { SiteSidebar } from "./SiteSidebar";

type InTheMakingPageProps = {
  pageName: string;
};

export function InTheMakingPage({ pageName }: InTheMakingPageProps) {
  return (
    <div className="site-shell">
      <SiteSidebar />
      <main className="site-main">
        <p className="page-placeholder">
          {pageName} in the making
        </p>
      </main>
    </div>
  );
}
