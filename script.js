const departmentColors = {
  Finance: "#b1cbff80",
  Design: "#252b3480",
  "Human Resources": "#ffdfc280",
  Sales: "#ffacc980",
  Procrument: "#c0ffd780",
  IT: "#7fdbff80",
};

function assignDepartmentColors(nodes) {
  return nodes.map((node) => ({
    ...node,
    departmentColor: departmentColors[node.department] || "#353c48",
  }));
}

async function fetchChartData() {
  try {
    const hirarchyData = [
      {
        id: "1",
        name: "William",
        position: "CEO",
        location: "UK, London",
        department: "Finance",
        rating: "4.6",
        img: "https://cdn.balkan.app/shared/1.jpg",
      },
      {
        id: "2",
        pid: "1",
        name: "Jolly",
        position: "CEO",
        location: "UK, London",
        department: "Design",
        rating: "4.6",
        img: "https://cdn.balkan.app/shared/2.jpg",
      },
      {
        id: "3",
        pid: "1",
        name: "Lisa",
        position: "CEO",
        location: "UK, London",
        department: "Human Resources",
        rating: "4.6",
        img: "https://cdn.balkan.app/shared/3.jpg",
      },
      {
        id: "4",
        pid: "1",
        name: "Edward",
        position: "CEO",
        location: "UK, London",
        department: "Sales",
        rating: "4.6",
        img: "https://cdn.balkan.app/shared/4.jpg",
      },
      {
        id: "5",
        pid: "2",
        name: "Amin",
        position: "CEO",
        location: "UK, London",
        department: "Procrument",
        rating: "4.6",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: "25",
        pid: "2",
        name: "Sudarsan",
        position: "Sales",
        location: "Chembur,Mumbai",
        department: "Sales",
        rating: "4.6",
        img: "https://cdn.balkan.app/shared/15.jpg",
      },
    ];

    const updatedHirarchyData = assignDepartmentColors(hirarchyData);
    chart.load(updatedHirarchyData);

    const sidebarData = [
      {
        department: "Finance",
        departmentData: [
          {
            id: "6",
            name: "Shiva",
            position: "Software Developer",
            location: "Mumbai, Maharastra",
            department: "Finance",
            img: "https://cdn.balkan.app/shared/9.jpg",
            teams: [
              "https://cdn.balkan.app/shared/14.jpg",
              "https://cdn.balkan.app/shared/15.jpg",
              "https://cdn.balkan.app/shared/16.jpg",
              "https://cdn.balkan.app/shared/17.jpg",
              "https://cdn.balkan.app/shared/18.jpg",
              "https://cdn.balkan.app/shared/19.jpg",
              "https://cdn.balkan.app/shared/2.jpg",
              "https://cdn.balkan.app/shared/21.jpg",
              "https://cdn.balkan.app/shared/22.jpg",
            ],
          },
          {
            id: "7",
            name: "Rishi",
            position: "Backend Developer",
            location: "Chandigarh, Punjab",
            department: "Finance",
            img: "https://cdn.balkan.app/shared/11.jpg",
            teams: [
              "https://cdn.balkan.app/shared/1.jpg",
              "https://cdn.balkan.app/shared/2.jpg",
              "https://cdn.balkan.app/shared/3.jpg",
              "https://cdn.balkan.app/shared/4.jpg",
              "https://cdn.balkan.app/shared/5.jpg",
              "https://cdn.balkan.app/shared/6.jpg",
              "https://cdn.balkan.app/shared/7.jpg",
              "https://cdn.balkan.app/shared/8.jpg",
              "https://cdn.balkan.app/shared/9.jpg",
              "https://cdn.balkan.app/shared/10.jpg",
            ],
          },
        ],
      },
      {
        department: "Procrument",
        departmentData: [
          {
            id: "8",
            name: "Akash",
            position: "UI Designer",
            location: "Chandigarh, Punjab",
            department: "Procrument",
            img: "https://cdn.balkan.app/shared/8.jpg",
            teams: [
              "https://cdn.balkan.app/shared/14.jpg",
              "https://cdn.balkan.app/shared/15.jpg",
              "https://cdn.balkan.app/shared/16.jpg",
              "https://cdn.balkan.app/shared/17.jpg",
              "https://cdn.balkan.app/shared/18.jpg",
              "https://cdn.balkan.app/shared/19.jpg",
              "https://cdn.balkan.app/shared/2.jpg",
              "https://cdn.balkan.app/shared/21.jpg",
              "https://cdn.balkan.app/shared/22.jpg",
            ],
          },
          {
            id: "9",
            name: "Prasanna",
            position: "Mobile App Developer",
            location: "Pune, Maharastra",
            department: "Procrument",
            img: "https://cdn.balkan.app/shared/10.jpg",
            teams: [
              "https://cdn.balkan.app/shared/14.jpg",
              "https://cdn.balkan.app/shared/15.jpg",
              "https://cdn.balkan.app/shared/16.jpg",
              "https://cdn.balkan.app/shared/17.jpg",
              "https://cdn.balkan.app/shared/18.jpg",
            ],
          },
        ],
      },
    ];
    generateSidebarCards(sidebarData);
    return updatedHirarchyData;
  } catch (error) {
    console.error("Error fetching org chart data:", error);
  }
}

// Generate cards in the sidebar
function generateSidebarCards(data) {
  const cardlists = document.getElementById("cardlists");

  data.forEach((node) => {
    const departmentDiv = document.createElement("div");
    departmentDiv.classList.add("department-container");
    departmentDiv.innerHTML = `<p class="department-name">
       <img src="./assets/department_icon.png" class="department-icon" alt="Department Icon"/> Department-${node.department}</p>`;
    const cardsDiv = document.createElement("div");
    cardsDiv.classList.add("cards-div");

    node.departmentData.forEach((innerNode) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.draggable = true;
      card.dataset.id = innerNode.id;
      card.innerHTML = `
        <div class="cardUpper">
        <img src="${innerNode.img}" class="employee-img" alt="${innerNode.name}">
        <div class="info">
          <div class="name">${innerNode.name}</div>
          <div class="position">${innerNode.position}</div>
          <div id="sidebar-card-department" class="department">${innerNode.department}</div>
          <div class="location">${innerNode.location}</div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical more-icon"></i>
        </div>
        <div class="team-members">
          <img src="./assets/teams_icon.png" class="teams-icon" alt="Teams Icon"/>
          <div id="teamMembers-${innerNode.id}" class="teamMembers-imgDivs"></div>
          <span>+10</span>
        </div>
      `;

      const teamMembersImgsDiv = card.querySelector(
        `#teamMembers-${innerNode.id}`
      );
      innerNode.teams.forEach((imgUrl) => {
        const teamImg = document.createElement("img");
        teamImg.src = imgUrl;
        teamImg.classList.add("teamsMember-img");
        teamImg.alt = "Team Member";
        teamMembersImgsDiv.appendChild(teamImg);
      });

      card.addEventListener("dragstart", handleDragStart);
      cardsDiv.appendChild(card);
    });

    departmentDiv.appendChild(cardsDiv);
    cardlists.appendChild(departmentDiv);
  });
}

function handleDragStart(e) {
  const cardData = {
    id: e.target.dataset.id,
    name: e.target.querySelector(".name").innerText,
    position: e.target.querySelector(".position").innerText,
    department: e.target.querySelector(".department").innerText,
    location: e.target.querySelector(".location").innerText,
    img: e.target.querySelector("img").src,
  };

  e.dataTransfer.setData("cardData", JSON.stringify(cardData));
}

function handleDrop(e) {
  e.preventDefault();

  const draggedCardData = JSON.parse(e.dataTransfer.getData("cardData"));
  const targetNode = e.target.closest("g.node");

  if (!targetNode) {
    console.error("Invalid drop target. No node found.");
    alert("Please drop the card on a valid node in the chart.");
    return;
  }

  const targetNodeId = targetNode.getAttribute("data-n-id");

  if (!targetNodeId) {
    console.error("No node ID found in the target node.");
    return;
  }

  // Create a new node object with the dragged card data and set its parent ID
  const newNode = {
    id: `${draggedCardData.id}`,
    pid: targetNodeId,
    name: draggedCardData.name,
    position: draggedCardData.position,
    department: draggedCardData.department,
    location: draggedCardData.location,
    img: draggedCardData.img,
    departmentColor: departmentColors[draggedCardData.department] || "#353c48",
  };

  chart.addNode(newNode);
  updateChart(newNode);
}

function handleDragOver(e) {
  e.preventDefault();
}

async function updateChart(node) {
  // console.log("updated node:", node);
  try {
    const response = await fetch("https://api.example.com/updateOrgChartNode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(node),
    });

    if (!response.ok) {
      console.error("Failed to update node:", await response.text());
    } else {
      console.log("Node updated successfully:", node);
    }
  } catch (error) {
    console.error("Error updating node:", error);
  }
}

function handleFile(event) {
  event.stopPropagation();
  alert("File clicked!");
}
function handleKraKpi(event) {
  event.stopPropagation();
  alert("KRA KPI clicked!");
}
function handleStats(event) {
  event.stopPropagation();
  alert("Stats clicked!");
}

OrgChart.templates.base = Object.assign({}, OrgChart.templates.base, {
  size: [240, 115],
  node: `<rect x="0" y="0" height="115" width="240" fill="#1A2024" stroke-width="1" stroke="#FFFFFF30" rx="2" ry="2" ></rect>`,
  field_0: `<text style="font-size: 16px; font-weight:500" fill="#ffffff" x="85" y="28" text-anchor="left">{val}</text>`,
  field_1: `<text style="font-size: 12px;" fill="#CDCDCD" x="85" y="46" text-anchor="left">{val}</text>`,
  field_4: `<g>
  <text style="font-size: 10px;" fill="#CDCDCD" x="120" y="46" text-anchor="left">{val}</text>
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" 
    fill="#FFD700" transform="translate(135, 38) scale(0.4)"></path>
</g>`,
  field_2: `<text style="font-size: 12px;" fill="#CDCDCD" x="85" y="65" text-anchor="left">{val}</text>`,
  custom_field_3: `<rect x="10" y="85" height="22" width="220" fill="{val}" rx="4" ry="4"></rect>`,
  field_3: `<text style="font-size: 14px;" fill="#ffffff" x="35" y="101" text-anchor="left">{val}</text>`,
  chart_icon: `<g><image xlink:href="./assets/department_icon.png" x="18" y="90" width="12" height="12"></image></g>`,
  img_0: `<clipPath id="ulaImg"><circle cx="45" cy="45" r="28"></circle></clipPath>
    <image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="15" y="15" width="60" height="60"></image>`,
  img_1: `<g style="cursor: pointer;" onclick="handleFile(event)">
  <image xlink:href="./assets/file.png" x="160" y="8" width="20" height="20"></image></g>`,
  img_2: `<g style="cursor: pointer;" onclick="handleKraKpi(event)">
  <image xlink:href="./assets/kra_kpi_cover.png" x="185" y="8" width="20" height="20"></image></g>`,
  img_3: `<g style="cursor: pointer;" onclick="handleStats(event)">
  <image xlink:href="./assets/stats.png" x="210" y="8" width="20" height="20"></image></g>`,
});

OrgChart.templates.base.ripple = {
  radius: 100,
  color: "#ffffff",
  rect: null,
};

OrgChart.templates.base.editFormHeaderColor = "#1A2024";

var chart = new OrgChart(document.getElementById("tree"), {
  template: "base",
  mouseScrool: OrgChart.action.none,
  enableDragDrop: true,
  editForm: {
    readOnly: true,
    buttons: {
      share: null,
      pdf: null,
      remove: {
        icon: OrgChart.icon.remove(24, 24, "#fff"),
        text: "Remove",
        hideIfDetailsMode: false,
      },
    },
  },
  nodeBinding: {
    field_0: "name",
    field_1: "position",
    field_2: "location",
    field_3: "department",
    field_4: "rating",
    custom_field_3: "departmentColor",
    img_0: "img",
    img_1: "img",
    img_2: "img",
    img_3: "img",
    chart_icon: "img",
  },
  nodes: [],
});

const treeContainer = document.getElementById("tree");

chart.on("click", function (sender, args) {
  const clickedNode = chart.get(args.node.id);
  console.log("Clicked Node Data:", clickedNode);
});

chart.on("update", function (sender, oldNode, newNode) {
  updateChart(newNode);
});

chart.on("remove", function (sender, nodeId) {
  const removedNode = chart.get(nodeId); // Get details of the removed node if needed
  console.log("removedNode", removedNode);

  const updatedData = { ...removedNode, pid: null };
  console.log("updatedData", updatedData);

  // const parentId = removedNode.pid;
  // if (parentId) {
  //   const parentNode = chart.get(parentId);
  //   console.log("Parent Node:", parentNode);

  //   const updateData = {
  //     id: parentNode.id,
  //     childRemoved: nodeId,
  //   };

  //   updateChart(updateData);
  // } else {
  //   console.log("Removed node had no parent.");
  // }

  // console.log(`Node with ID ${nodeId} removed.`);
});

OrgChart.templates.base.plus = "";
OrgChart.templates.base.minus = "";

treeContainer.addEventListener("drop", handleDrop);
treeContainer.addEventListener("dragover", handleDragOver);

fetchChartData();
