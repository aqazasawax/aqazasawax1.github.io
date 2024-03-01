var player;

function startPlayer() {
  return {
    time: Date.now(),
    timePlayed: 0,
    points: new Decimal(10),
    tree1: {
      active: true,
      upgrades: [],
    }
  }
}

function save() {
	localStorage.setItem("save-file", btoa(JSON.stringify(player)))
}

function load() {
	let get = localStorage.getItem("save-file");
	if (get===null||get===undefined) player = startPlayer()
	else player = JSON.parse(atob(get))
	player.time = Date.now()
}
