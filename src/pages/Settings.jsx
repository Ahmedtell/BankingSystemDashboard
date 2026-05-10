export default function SettingsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1
          className="text-2xl font-extrabold text-gray-900"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Settings
        </h1>
        <p className="text-sm text-gray-400">
          Configure system preferences and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Password */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-3 text-lg font-bold">Change Password</h2>
          {/* your settings fields */}
        </div>

        {/* Notifications */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-3 text-lg font-bold">Notifications</h2>
          {/* toggles etc */}
        </div>
      </div>
    </div>
  );
}
