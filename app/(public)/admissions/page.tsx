import { RequirementsList, ApplicationForm } from "@/components/admissions";

export const metadata = {
  title: "Admissions | VIHIPEX University Institute",
  description:
    "Apply to VIHIPEX University Institute for Professionals. ND, HND, Bachelor, and Master programs in Agriculture, IT, Engineering, Health, Business, and more.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <RequirementsList />
      <ApplicationForm />
    </main>
  );
}
