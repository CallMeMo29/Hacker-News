




fetch("data.json")
  .then((antwortvondatajson) => {
    return antwortvondatajson.json();
  })
  .then((alleusersdatenausdatajson) => {
    const container = document.getElementById("users");
    alleusersdatenausdatajson.forEach((ergeabnisderforeache) => {
      const tmpl = document
        .getElementById("userCardTemplate")
        .content.cloneNode(true);
      tmpl.querySelector(".fullname").innerText = ergeabnisderforeache.fullname;
      tmpl.querySelector(".profession").innerText = ergeabnisderforeache.profession;
      tmpl.querySelector(".description").innerText = ergeabnisderforeache.description;
      tmpl.querySelector("img").setAttribute("src", ergeabnisderforeache.avatar);
      container.appendChild(tmpl);
    });
  });
