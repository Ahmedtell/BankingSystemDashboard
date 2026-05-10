export function TabMenu({
  tabs,
  activeTab,
  onTabChange,
  activeColor = "#D01030",
}) {
  return (
    <div className="flex bg-white border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          style={{
            borderBottomColor: activeTab === tab ? activeColor : "transparent",
            color: activeTab === tab ? activeColor : "#4B5563",
          }}
          className="flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors hover:text-gray-800"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
