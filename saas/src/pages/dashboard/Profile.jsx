import DashboardLayout from "../../components/layout/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="max-w-xl bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <ProfileRow label="Name" value="John Doe" />
        <ProfileRow label="Email" value="user@gmail.com" />
        <ProfileRow label="Role" value="User" />
      </div>
    </DashboardLayout>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
