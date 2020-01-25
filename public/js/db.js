var idbPromised = idb.open("football", 1, function (upgradeDb) {
  if (!upgradeDb.objectStoreNames.contains("teams")) {
    var articlesObjectStore = upgradeDb.createObjectStore("teams", {
      keyPath: "id"
    });
  }
  articlesObjectStore.createIndex("name", "name", {
    unique: false
  });
});


function saveForLater(team) {
  idbPromised
    .then(function (db) {
      var tx = db.transaction("teams", "readwrite");
      var store = tx.objectStore("teams");
      console.log(team);
      store.put(team);
      return tx.complete;
    })
    .then(function () {
      M.toast({
        html: "Data berhasil disimpan"
      });
    })
}

function getAll() {
  return new Promise(function (resolve, reject) {
    idbPromised
      .then(db => {
        var tx = db.transaction("teams", "readonly");
        var store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(teams => {
        resolve(teams);
      });
  });
}

function deleteTeam(team) {
  idbPromised
    .then(function (db) {
      var tx = db.transaction("teams", "readwrite");
      var store = tx.objectStore("teams");
      console.log(team);
      store.delete(team);
      return tx.complete;
    })
    .then(function () {
      M.toast({
        html: "Data berhasil dihapus"
      });
    })
}