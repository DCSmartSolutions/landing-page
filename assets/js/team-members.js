const teamMembers = [
    { name: 'Edgar Malca', imgSrc: 'assets/img/team-members/Edgar.png' },
    { name: 'Lucas Ruiz', imgSrc: 'assets/img/team-members/Lucas.png' },
    { name: 'Dominik Mendoza', imgSrc: 'assets/img/team-members/Dominik.png' },
    { name: 'Josué Ramos', imgSrc: 'assets/img/team-members/Josue.png' },
    { name: 'Oliver Tuesta', imgSrc: 'assets/img/team-members/Oliver.png' }
];

const teamMembersRow = document.getElementById('team-members-row');

teamMembers.forEach(member => {
    const memberHtml = `
    <div class="col-lg-2 col-md-3 mt-5 mt-lg-0 mx-auto">
      <div class="member" data-aos="zoom-in" data-aos-delay="100">
        <div class="pic"><img src="${member.imgSrc}" class="img-fluid" alt="${member.name}"></div>
        <div class="member-info">
          <h4>${member.name}</h4>
        </div>
      </div>
    </div>
  `;
    teamMembersRow.insertAdjacentHTML('beforeend', memberHtml);
});