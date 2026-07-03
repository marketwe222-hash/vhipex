// app/(public)/academics/page.tsx
import {
  DepartmentList,
  CurriculumTable,
  AcademicsHero,
} from "@/components/academics";

export const metadata = {
  title: "Academics | VIHIPEX University Institute",
  description:
    "Explore VIHIPEX's 8 professional fields: Agriculture, IT, Engineering, Health, Business, Management, Education, and Banking. ND to Master's programs.",
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen">
      {/* <AcademicsHero /> */}
      <DepartmentList />
      <CurriculumTable />
    </main>
  );
}
