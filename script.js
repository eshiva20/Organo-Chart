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
        img: "https://cdn.balkan.app/shared/1.jpg",
      },
      {
        id: "2",
        pid: "1",
        name: "Jolly",
        position: "CEO",
        location: "UK, London",
        department: "Design",
        img: "https://cdn.balkan.app/shared/2.jpg",
      },
      {
        id: "3",
        pid: "1",
        name: "Lisa",
        position: "CEO",
        location: "UK, London",
        department: "Human Resources",
        img: "https://cdn.balkan.app/shared/3.jpg",
      },
      {
        id: "4",
        pid: "1",
        name: "Edward",
        position: "CEO",
        location: "UK, London",
        department: "Sales",
        img: "https://cdn.balkan.app/shared/4.jpg",
      },
      {
        id: "5",
        pid: "2",
        name: "Amin",
        position: "CEO",
        location: "UK, London",
        department: "Procrument",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: "25",
        pid: "2",
        name: "Sudarsan",
        position: "Sales",
        location: "Chembur,Mumbai",
        department: "Sales",
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

OrgChart.templates.base = Object.assign({}, OrgChart.templates.base, {
  size: [240, 110],
  node: `<rect x="0" y="0" height="110" width="240" fill="#1A2024" stroke-width="1" stroke="#FFFFFF30" rx="2" ry="2" ></rect>`,
  field_0: `<text style="font-size: 18px; font-weight:500" fill="#ffffff" x="90" y="30" text-anchor="left">{val}</text>`,
  field_1: `<text style="font-size: 14px;" fill="#CDCDCD" x="90" y="50" text-anchor="left">{val}</text>`,
  field_2: `<text style="font-size: 14px;" fill="#CDCDCD" x="90" y="70" text-anchor="left">{val}</text>`,
  custom_field_3: `<rect x="85" y="77" height="22" width="140" fill="{val}" rx="4" ry="4"></rect>`,
  field_3: `<text style="font-size: 14px;" fill="#ffffff" x="90" y="93" text-anchor="left">{val}</text>`,
  img_0: `<clipPath id="ulaImg"><circle cx="45" cy="55" r="35"></circle></clipPath>
    <image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="10" y="20" width="70" height="70"></image>`,
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
    custom_field_3: "departmentColor",
    img_0: "img",
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
