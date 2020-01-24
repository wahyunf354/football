const API_KEY = "57640f1171c54b158124f551330405a4";
const BASE_URL = "https://api.football-data.org/v2/";

const LEAGUE_ID = 2001;

const ENDPOINT_COMPETITION = `${BASE_URL}competitions/${LEAGUE_ID}/standings`;

const ENDPOINT_TEAM = `${BASE_URL}competitions/${LEAGUE_ID}/teams`;

const ENDPOINT_TEAM_DETAIL = `${BASE_URL}teams/`;

const fetchAPI = url => {
    return fetch(url, {
            headers: {
                'X-Auth-Token': API_KEY
            }
        })
        .then(res => {
            if (res.status !== 200) {
                console.log("Error: " + res.status);
                return Promise.reject(new Error(res.statusText))
            } else {
                return Promise.resolve(res)
            }
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};

function getAllStandings() {
    if ("caches" in window) {
        caches.match(ENDPOINT_COMPETITION).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log("Copetition Data: " + data);
                    showStanding(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT_COMPETITION)
        .then(data => {
            showStanding(data);
        })
        .catch(error => {
            console.log(error)
        })
}


function showStanding(data) {

    let standingElement = document.getElementById("homeStandingA");
    console.log(data.standings.length);
    let tablesTeam = '';
    for (let i = 0; i < data.standings.length; i++) {
        if (i == 0 || i % 3 == 0) {
            let standingA = "";
            let group = data.standings[i].group;
            data.standings[i].table.forEach(function (standing) {
                standingA += `
            <tr>
                <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
                <td>${standing.team.name}</td>
                <td>${standing.won}</td>
                <td>${standing.draw}</td>
                <td>${standing.lost}</td>
                <td>${standing.points}</td>
                <td>${standing.goalsFor}</td>
                <td>${standing.goalsAgainst}</td>
                <td>${standing.goalDifference}</td>
            </tr>
            `;
            });
            tablesTeam += `${tables(standingA, group)}`
        } else {}
    }
    standingElement.innerHTML = tablesTeam;
}

function tables(table, group) {
    return `<div class="card" style="padding-left: 24px; padding-right: 24px; margin-top: 30px;">

    <table class="striped responsive-table">
        <thead>
            <tr>
                <th>${group}</th>
                <th>Team Name</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>P</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
            </tr>
         </thead>
        <tbody id="standings">
            ${table}
        </tbody>
    </table>
    
    </div>`
}

function getAllTeams() {
    if ("caches" in window) {
        caches.match(ENDPOINT_COMPETITION).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log("TEAM Data: " + data);
                    showTeams(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT_TEAM)
        .then(team => {
            showTeams(team);
        })
        .catch(error => {
            console.log(error)
        })
}

function showTeams(data) {
    let dataTeams = "";
    let dataTeamsEl = document.getElementById('teams');
    console.log(data);
    data.teams.forEach(function (team) {
        let img = '';
        if (team.crestUrl == null) {
            img += "../icon/icon-192.png";
        } else if (team.crestUrl == 'https://upload.wikimedia.org/wikipedia/en/7/78/Nkmaribor_2013.png') {
            img += "../icon/icon-192.png";
        } else if (team.crestUrl == 'https://upload.wikimedia.org/wikipedia/en/0/06/APOELnew.png') {
            img += "../icon/icon-192.png";
        } else if (team.crestUrl == 'https://upload.wikimedia.org/wikipedia/en/b/b0/Riga_FC_logo.png') {
            img += "../icon/icon-192.png";
        } else {
            img += team.crestUrl.replace(/^http:\/\//i, 'https://')
        }
        dataTeams += `
        <div class="col s12 m3">
                <div class="card">
                <div class="card-image">
                <a href="./detail.html?id=${team.id}">
                    <img src="${img}">
                </a>
                </div>
                <div class="card-content">
                    <span class="card-title black-text">${team.name}</span>
                    <p>Found    :${team.founded}</p>
                    <p>Address  :${team.area.name}</p>
                </div>
                </div>
        </div>
        `;
        dataTeamsEl.innerHTML = dataTeams;
    });
}

function getTeamsDetail() {
    return new Promise(function (resolve, reject) {
        if ("caches" in window) {
            caches.match(ENDPOINT_COMPETITION).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        console.log("Detail Data: " + data);
                        showTeamsDetail(data);
                        resolve(data);
                    })
                }
            })
        }

        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.get("id");

        fetchAPI(ENDPOINT_TEAM_DETAIL + idParam)
            .then(data => {
                showTeamsDetail(data);
                resolve(data);
            })
            .catch(error => {
                console.log(error)
            })
    });
}

function showTeamsDetail(data) {
    console.log(data);

    let competitionsAc = ``;
    let squads = ``;

    data.activeCompetitions.forEach(function (com) {
        competitionsAc += `
            <li>${com.name}</li>
        `;
    });

    data.squad.forEach(function (sq) {
        squads += `
        <div class="col s12 m4">     
            <div class="card mg1">
            <h6>${sq.name}</h6>
                <ul>
                <li>Position: ${sq.position}</li>
                <li>Country Of Birth: ${sq.countryOfBirth}</li>
                <li>Nationality: ${sq.nationality}</li>
                <li>shirtNumber: ${sq.shirtNumber}</li>
                </ul>
            </div>
        </div>
        `;
    });


    let detail = `
    <div class="row mg">
      <div class="col s12 m4">
        <img src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" class="responsive-img">
      </div>
      <div class="col s12 m4">
        <h3>${data.name}</h3>
        <ul>
          <li>Address: ${data.address}</li>
          <li>Club Colors: ${data.clubColors}</li>
          <li>Founded: ${data.founded}</li>
          <li><a href="${data.website}"></a>Website: ${data.website}</li>
        </ul>
      </div>
      <div class="col s12 m4">
        <h5>Active Competitions</h5>
        <ul>
          ${competitionsAc}
        </ul>
      </div>
    </div>
    <div class="row">
    <h5>Squad ${data.name}</h5>
        ${squads}
    </div>
    `;
    document.getElementById("body-content").innerHTML = detail;
}

function getSavedTeams() {
    getAll()
        .then(teams => {
            console.log(teams);
            let teamHtml = '';
            teams.forEach(team => {
                let img = '';
                if (team.crestUrl == null) {
                    img += "../icon/icon-192.png";
                } else if (team.crestUrl == 'https://upload.wikimedia.org/wikipedia/en/7/78/Nkmaribor_2013.png') {
                    img += 'https://upload.wikimedia.org/wikipedia/en/7/78/Nkmaribor_2013.png';
                } else if (team.crestUrl == 'https://upload.wikimedia.org/wikipedia/en/0/06/APOELnew.png') {
                    img += 'https://upload.wikimedia.org/wikipedia/en/0/06/APOELnew.png';
                } else if (team.crestUrl == 'https://upload.wikimedia.org/wikipedia/en/b/b0/Riga_FC_logo.png') {
                    img += 'https://upload.wikimedia.org/wikipedia/en/b/b0/Riga_FC_logo.png';
                } else {
                    img += team.crestUrl.replace(/^http:\/\//i, 'https://')
                }
                teamHtml += `
                <div class="col s12 m3">
                <div class="card">
                <div class="card-image">
                <a href="./detail.html?id=${team.id}&saved=true">
                    <img src="${img}">
                </a>
                </div>
                <div class="card-content">
                    <span class="card-title black-text">${team.name}</span>
                    <p>Found    :${team.founded}</p>
                    <p>Address  :${team.area.name}</p>
                </div>
                </div>
                </div>
                `;
            });
            document.getElementById("body-content").innerHTML = teamHtml;
        })
}

function getSavedTeamDetail() {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    getAll()
        .then(function (data) {
            console.log(data);
            for (let i = 0; i <= data.length; i++) {
                if (data[i].id == idParam) {
                    let competitionsAc = ``;
                    let squads = ``;

                    data[i].activeCompetitions.forEach(function (com) {
                        competitionsAc += `
                            <li>${com.name}</li>
                        `;
                    });

                    data[i].squad.forEach(function (sq) {
                        squads += `
                        <div class="col s12 m4">     
                            <div class="card mg1">
                            <h6>${sq.name}</h6>
                                <ul>
                                <li>Position: ${sq.position}</li>
                                <li>Country Of Birth: ${sq.countryOfBirth}</li>
                                <li>Nationality: ${sq.nationality}</li>
                                <li>shirtNumber: ${sq.shirtNumber}</li>
                                </ul>
                            </div>
                        </div>
                        `;
                    });


                    let detail = `
                    <div class="row mg">
                      <div class="col s12 m4">
                        <img src="${data[i].crestUrl.replace(/^http:\/\//i, 'https://')}" class="responsive-img">
                      </div>
                      <div class="col s12 m4">
                        <h3>${data[i].name}</h3>
                        <ul>
                          <li>Address: ${data[i].address}</li>
                          <li>Club Colors: ${data[i].clubColors}</li>
                          <li>Founded: ${data[i].founded}</li>
                          <li><a href="${data[i].website}"></a>Website: ${data[i].website}</li>
                        </ul>
                      </div>
                      <div class="col s12 m4">
                        <h5>Active Competitions</h5>
                        <ul>
                          ${competitionsAc}
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                    <h5>Squad ${data[i].name}</h5>
                        ${squads}
                    </div>
                    `;
                    document.getElementById("body-content").innerHTML = detail;
                    break;
                }
            }

        })

}