// components/PageLayout.tsx

import Header from "./Header";
import styles from "../styles/Home.module.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen page-layout `}>
      <Header />
      <main className={`pt-[80px] ${styles.homeBackground}`}>
        {children}
      </main>{" "}
    </div>
  );
}
