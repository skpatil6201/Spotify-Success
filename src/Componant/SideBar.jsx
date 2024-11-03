import React, { useState } from 'react';
import SideBarHeader from "./SideHeader";
import SidebarLibraries from "./SidebarLibraries";
import SidebarClose from "./SideClose";
import SideBarCloseLibrary from "./SideCloseLibrary";

function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar visibility

  return (
    <div className="fixed h-full p-1 text-white bg-gray-800"> {/* Optional: Added background color for contrast */}
      {sidebarOpen ? (
        <div className="w-full">
          <SideBarHeader fun={setSidebarOpen} /> {/* Header with function to toggle sidebar */}
          <SidebarLibraries state={sidebarOpen} fun={setSidebarOpen} /> {/* Libraries section */}
        </div>
      ) : (
        <div>
          <SidebarClose /> {/* Component to display when sidebar is closed */}
          <SideBarCloseLibrary state={sidebarOpen} fun={setSidebarOpen} /> {/* Library options when closed */}
        </div>
      )}
    </div>
  );
}

export default SideBar; // Exporting the SideBar component
