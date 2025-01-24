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
// function handleStats(event) {
//   event.stopPropagation();
//   alert("Stats clicked!");
// }

function handleStats(event, target) {
  event.stopPropagation();

  const nodeElement = target.closest("g.node");
  const nodeId = nodeElement.getAttribute("data-n-id");
  console.log("nodeId", nodeId);

  // Create the modal HTML
  const modalHtml = `
      <div class="stats-header">
        <h2>Statistics</h2> 
        <i class="fa-solid fa-circle-xmark close-icon"></i>
      </div>`;

  // Create the modal element
  const modal = document.createElement("div");
  modal.classList.add("stats-modal");
  modal.innerHTML = modalHtml;
  document.body.appendChild(modal);

  window.addEventListener("click", function (event) {
    if (event.target !== modal && !modal.contains(event.target)) {
      modal.remove();
    }
  });

  // Add event listener to close the modal
  const closeBtn = modal.querySelector(".close-icon");
  closeBtn.addEventListener("click", () => {
    modal.remove();
  });
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
  img_3: `<g style="cursor: pointer;" onclick="handleStats(event,this)">
  <image xlink:href="./assets/stats.png" x="210" y="8" width="20" height="20"></image></g>`,
});

let editForm = function () {};

editForm.prototype.init = function (obj) {
  this.chart = obj;
};

editForm.prototype.show = function (nodeId) {
  this.hide();
  let node = this.chart.get(nodeId);

  // console.log("node", node);
  let editHtml = `
        <div>
         <div class="modal-actions">
          <i class="fa-solid fa-up-down-left-right modal-actions-icon"></i>
          <i class="fa-solid fa-up-right-and-down-left-from-center modal-actions-icon"></i>
          <i class="fa-solid fa-circle-xmark modal-actions-icon cross-icon"></i>
         </div>
         <div class="profile-details">
          <div class="profile-img">
            <img class="img" src="${node?.img}" />
            <div class="img-texts">
              <div class="text">
                <p>
                  <span>${node.rating}</span>
                  <i class="fa-solid fa-star star-icon"></i>
                </p>
                <p>${node.name}</p>
                <p>
                  <label>${node.position}</label>
                  <label>${node.location}</label>
                </p>
              </div>
              <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
            <div class="stats-container">
              <button class="stats-btn">
                <i class="fa-solid fa-chart-pie stats-icon"></i>
                <span>Statistics</span>
              </button>
            </div>
          </div>
          <div class="profile-details">
            <h2>About</h2>
            <div class="about-details">
              <div>
                <label>Company</label>
                <p>HBL pvt. ltd</p>
              </div>
              <div>
                <label>Department</label>
                <p class="department">
                  <img src="./assets/department_icon.png" alt="Department_Icon" class="department-icon"/>
                  <label>${node.department}</label>
                </p>
              </div>
              <div>
                <label>Reporting to</label>
                <p>Jaydeep Das</p>
              </div>
              <div>
                <label>Team size</label>
                <p>18</p>
              </div>
              <div>
                <label>Direct reporting</label>
                <p>Gaurav Chawla</p>
              </div>
              <div>
                <label>Contact Info.</label>
                <p>+93 123456789</p>
              </div>
              <div>
                <label>DOJ</label>
                <p>1 Jan,2025</p>
              </div>
              <div>
                <label>Skills & Certification</label>
                <p>Master in Excel</p>
              </div>
          </div>
          <div>
            <p>Team Members</p>
            <div class="team-members">
              <img src="./assets/teams_icon.png" class="teams-icon" alt="Teams Icon"/>
              <div class="teamMembers-lists">
              ${[...Array(6)].map((_) => {
                return `<img class="teamsMember-img " src="https://cdn.balkan.app/shared/2.jpg"/>`;
              })}
              </div>
              <span>+10</span>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <section class="kra-kpi-container">
        <div class="kraKpi-card kra-card">
            <h2>KRA</h2>
            <div class="kraKpi-actions">
              <button>
                <img src="./assets/dots.png"/>
                <span>Move one by one</span>
              </button>
              <button>
                <input type="checkbox"/>
                <span>Move one by one</span>
              </button>
            </div>
            <div class="kra-items">
             ${[...Array(5)]
               .map((_, id) => {
                 return `<div key=${id} class="kra-item">
                <img src="./assets/dots.png" class="dot-icon"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>`;
               })
               .join("")}
            </div>
            
        </div>
        <div class="kraKpi-card kpi-card">
            <h2>KPI</h2>
            <div class="kraKpi-actions">
              <button>
                <img src="./assets/dots.png"/>
                <span>Move one by one</span>
              </button>
              <button>
                <input type="checkbox"/>
                <span>Move one by one</span>
              </button>
            </div>
            <div class="kpi-items">
             ${[...Array(5)]
               .map((_, id) => {
                 return `<div key=${id} class="kpi-item">
                <input type="checkbox" class="kpi-checkbox"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>`;
               })
               .join("")}
            </div>
           
        </div>
      </section>
    </div>`;

  let div = document.createElement("div");
  div.id = "edit-form";
  div.innerHTML = editHtml;
  div.classList.add("employee-details");
  this.chart.element.appendChild(div);

  const crossIcon = div.querySelector(".modal-actions-icon.cross-icon");
  crossIcon.addEventListener("click", () => {
    this.hide();
  });

  OrgChart.animate(
    div,
    { opacity: 0, right: -100 },
    { opacity: 1, right: 10 },
    300,
    OrgChart.anim.outSin
  );
};

editForm.prototype.hide = function (showldUpdateTheNode) {
  let form = this.chart.element.querySelector("#edit-form");
  if (form) {
    form.parentNode.removeChild(form);
  }
};

// OrgChart.templates.base.ripple = {
//   radius: 100,
//   color: "#ffffff",
//   rect: null,
// };

OrgChart.templates.base.editFormHeaderColor = "#1A2024";

var chart = new OrgChart(document.getElementById("tree"), {
  template: "base",
  mouseScrool: OrgChart.action.none,
  enableDragDrop: true,
  editUI: new editForm(),
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

chart.on("init", function (sender) {
  sender.editUI.show(0);
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
