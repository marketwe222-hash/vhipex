"use client";

import { useState } from "react";
import { RequirementsList, ApplicationForm } from "@/components/admissions";

export default function AdmissionsPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <main className="min-h-screen">
      <RequirementsList onApplyClick={() => setShowApplicationForm(true)} />
      {showApplicationForm && (
        <ApplicationForm onClose={() => setShowApplicationForm(false)} />
      )}
    </main>
  );
}
