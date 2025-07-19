const FIELD_GROUPS = [
  {
    group: "RELEASE",
    fields: [
      { name: "RELEASE_ID", label: "Release ID" },
      { name: "RELEASE_UPC", label: "UPC" },
      { name: "RELEASE_PACKAGE_INDICATOR", label: "Package Indicator" },
      { name: "RELEASE_ARTISTS", label: "Artists" },
      { name: "RELEASE_TITLE", label: "Title" },
      { name: "RELEASE_VERSION_TITLE", label: "Version Title" },
      { name: "RELEASE_EVERSION_TITLE", label: "eVersion Title" },
      { name: "RELEASE_SCOPE", label: "Scope" },
      { name: "RELEASE_CONFIGURATION", label: "Configuration" },
      { name: "RELEASE_STATUS", label: "Status" },
      { name: "RELEASE_DATE", label: "Release Date" },
      { name: "RELEASE_CONFIG_GROUP", label: "Config Group" },
      { name: "RELEASE_P_NOTICE_COMPILATION", label: "P Notice Compilation" },
      { name: "RELEASE_P_NOTICE_YEAR", label: "P Notice Year" },
      { name: "RELEASE_P_NOTICE_COMPANY_ID", label: "P Notice Company ID" },
      { name: "RELEASE_P_NOTICE_COMPANY_NAME", label: "P Notice Company Name" },
      { name: "RELEASE_P_LOCAL_LICENSING", label: "P Local Licensing" },
      { name: "RELEASE_FORMATTED_P_NOTICE", label: "Formatted P Notice" },
      { name: "RELEASE_C_NOTICE_YEAR", label: "C Notice Year" },
      { name: "RELEASE_C_NOTICE_COMPANY_ID", label: "C Notice Company ID" },
      { name: "RELEASE_C_NOTICE_COMPANY_NAME", label: "C Notice Company Name" },
      { name: "RELEASE_C_LOCAL_LICENSING", label: "C Local Licensing" },
      { name: "RELEASE_FORMATTED_C_NOTICE", label: "Formatted C Notice" },
      { name: "RELEASE_PARENTAL_ADVISORY", label: "Parental Advisory" },
      { name: "RELEASE_OWNING_PROJECT_ID", label: "Owning Project ID" }
    ]
  },
  {
    group: "PACKAGE",
    fields: [
      { name: "PACKAGE_LEVEL_1_RELEASE_ID", label: "Level 1 Release ID" },
      { name: "PACKAGE_LEVEL_1_UPC", label: "Level 1 UPC" },
      { name: "PACKAGE_LEVEL_1_SEQUENCE_NO", label: "Level 1 Sequence No" },
      { name: "PACKAGE_LEVEL_2_RELEASE_ID", label: "Level 2 Release ID" },
      { name: "PACKAGE_LEVEL_2_UPC", label: "Level 2 UPC" },
      { name: "PACKAGE_LEVEL_2_SEQUENCE_NO", label: "Level 2 Sequence No" },
      { name: "PACKAGE_LEVEL_3_RELEASE_ID", label: "Level 3 Release ID" },
      { name: "PACKAGE_LEVEL_3_UPC", label: "Level 3 UPC" },
      { name: "PACKAGE_LEVEL_3_SEQUENCE_NO", label: "Level 3 Sequence No" }
    ]
  },
  {
    group: "COMPONENT",
    fields: [
      { name: "COMPONENT_RELEASE_ID", label: "Release ID" },
      { name: "COMPONENT_UPC", label: "UPC" },
      { name: "COMPONENT_SEQUENCE_NO", label: "Sequence No" },
      { name: "COMPONENT_PACKAGE_DEPTH", label: "Package Depth" },
      { name: "COMPONENT_RELEASE_ARTISTS", label: "Artists" },
      { name: "COMPONENT_TITLE", label: "Title" },
      { name: "COMPONENT_VERSION_TITLE", label: "Version Title" },
      { name: "COMPONENT_EVERSION_TITLE", label: "eVersion Title" },
      { name: "COMPONENT_RELEASE_SCOPE", label: "Scope" },
      { name: "COMPONENT_CONFIGURATION", label: "Configuration" },
      { name: "COMPONENT_STATUS", label: "Status" },
      { name: "COMPONENT_CONFIG_GROUP", label: "Config Group" },
      { name: "COMPONENT_P_NOTICE_COMPILATION", label: "P Notice Compilation" },
      { name: "COMPONENT_P_NOTICE_YEAR", label: "P Notice Year" },
      { name: "COMPONENT_P_NOTICE_COMPANY_ID", label: "P Notice Company ID" },
      { name: "COMPONENT_P_NOTICE_COMPANY_NAME", label: "P Notice Company Name" },
      { name: "COMPONENT_P_LOCAL_LICENSING", label: "P Local Licensing" },
      { name: "COMPONENT_FORMATTED_P_NOTICE", label: "Formatted P Notice" },
      { name: "COMPONENT_C_NOTICE_YEAR", label: "C Notice Year" },
      { name: "COMPONENT_C_NOTICE_COMPANY_ID", label: "C Notice Company ID" },
      { name: "COMPONENT_C_NOTICE_COMPANY_NAME", label: "C Notice Company Name" },
      { name: "COMPONENT_C_LOCAL_LICENSING", label: "C Local Licensing" },
      { name: "COMPONENT_FORMATTED_C_NOTICE", label: "Formatted C Notice" },
      { name: "COMPONENT_PARENTAL_ADVISORY", label: "Parental Advisory" }
    ]
  },
  {
    group: "TRACK",
    fields: [
      { name: "TRACK_GROUP_ID", label: "Group ID" },
      { name: "TRACK_GROUP_SEQUENCE_NO", label: "Group Sequence No" },
      { name: "TRACK_ID", label: "Track ID" },
      { name: "TRACK_RESOURCE_ID", label: "Resource ID" },
      { name: "TRACK_ISRC", label: "ISRC" },
      { name: "TRACK_IMAGE_RESOURCE_ID", label: "Image Resource ID" },
      { name: "TRACK_IMMERSIVE_TRACK_ID", label: "Immersive Track ID" },
      { name: "TRACK_LICENSING_CREDIT", label: "Licensing Credit" },
      { name: "TRACK_DISPLAY_TITLE", label: "Display Title" },
      { name: "TRACK_DISPLAY_VERSION_TITLE", label: "Display Version Title" },
      { name: "TRACK_DISPLAY_HIERARCHY_TITLE", label: "Display Hierarchy Title" },
      { name: "TRACK_CLASSICAL_DISPLAY_TITLE", label: "Classical Display Title" },
      { name: "TRACK_INDEX_GROUP_ID", label: "Index Group ID" },
      { name: "TRACK_SEQUENCE_NO", label: "Sequence No" },
      { name: "TRACK_DURATION_SECS", label: "Duration (secs)" },
      { name: "TRACK_TITLE_OVERRIDE", label: "Title Override" },
      { name: "TRACK_VERSION_TITLE_OVERRIDE", label: "Version Title Override" },
      { name: "TRACK_HIERARCHY_TITLE_OVERRIDE", label: "Hierarchy Title Override" },
      { name: "TRACK_PAUSE_TIME_SECS", label: "Pause Time (secs)" },
      { name: "TRACK_USE_VERSION_TITLE", label: "Use Version Title" },
      { name: "TRACK_USE_HIERARCHY_TITLE", label: "Use Hierarchy Title" },
      { name: "TRACK_AUDIO_CHANNEL_CONFIG", label: "Audio Channel Config" },
      { name: "TRACK_LIVE_STUDIO_INDICATOR", label: "Live/Studio Indicator" },
      { name: "TRACK_METADATA_LANGUAGE", label: "Metadata Language" },
      { name: "TRACK_AVAILABILITY", label: "Availability" },
      { name: "TRACK_HAS_ATMOS_TRACK_LINK", label: "Has Atmos Link" },
      { name: "TRACK_ATMOS_LINK_UPC", label: "Atmos Link UPC" }
    ]
  }
];

function renderViz(data) {
  const container = document.getElementById("viz");
  container.innerHTML = "";
  const row = data.tables.DEFAULT[0];
  FIELD_GROUPS.forEach(group => {
    const wrapper = document.createElement("div");
    wrapper.className = "group";
    const header = document.createElement("h2");
    header.textContent = group.group;
    header.onclick = () => {
      wrapper.querySelectorAll('.field').forEach(el => el.classList.toggle("hidden"));
    };
    wrapper.appendChild(header);
    group.fields.forEach(f => {
      const field = document.createElement("div");
      field.className = "field";
      const name = document.createElement("div");
      name.className = "field-name";
      name.textContent = f.label;
      const value = document.createElement("div");
      value.textContent = row[f.name] ?? "";
      field.appendChild(name);
      field.appendChild(value);
      wrapper.appendChild(field);
    });
    container.appendChild(wrapper);
  });
}

google.visualization.events.addListener(window, 'onData', renderViz);