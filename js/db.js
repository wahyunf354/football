var dbPromised = idb.open("football", 1, function (upgradeDb) {
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
  dbPromised
    .then(function (db) {
      var tx = db.transaction("teams", "readwrite");
      var store = tx.objectStore("teams");
      console.log(team);
      store.add(team);
      return tx.complete;
    })
    .then(function () {
      console.log("detail berhasil si disimpan");
    })
}