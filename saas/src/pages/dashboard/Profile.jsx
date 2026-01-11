import DashboardLayout from "../../components/layout/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">My Profile</h1>
      <p className="text-slate-400 mt-2">
        User profile information goes here.
      </p>
    </DashboardLayout>
  );
}
