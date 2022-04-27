window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form1');
    const body = document.getElementById('body');
    
    function renderCard(name, position, teamName) {
        return `
	<div class="card">
		  <img src="https://placekitten.com/500/600" class="kitty">
		  <div class="bottom">
		    <div class="bottomleft">
		      <div class="name">
		        ${name}
	      	      </div>
		      <div class="position">
		        ${position}
	              </div>
:		    </div>
		    <div class="bottomright">
		      <div class="team">
		        ${teamName}
	              </div>
		    </div>
		  </div>
		</div>
		  `;
    }

    function cardSubmit(event) {
        body.insertAdjacentHTML(
            "beforeend",
            renderCard(
                form.name.value,
                form.position.value,
                form.team.value
            )
        )
        const cardObject = {
            name: form.name.value,
            position: form.position.value,
            teamName: form.team.value
        }
        localStorage.setItem(
            localStorage.length,
            JSON.stringify(cardObject)
        )
        event.preventDefault();
    };
    form.addEventListener('submit', cardSubmit);
});
