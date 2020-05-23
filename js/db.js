const dbPromised = idb.open("db-footbal", 1, function(upgradeDb) {
	if(!upgradeDb.objectStoreNames.contains('competitions')){
		upgradeDb.createObjectStore("competitions",{keyPath : "id"});
	}
});



const dbGetAllCompetitions = () =>{
	return new Promise((resolve, reject)=>{
		dbPromised.then(db =>{
			const transaction = db.transaction("competitions", `readonly`);
			return transaction.objectStore("competitions").getAll();
		}).then(data =>{
			if(data!==undefined){
				resolve(data)
			}else{
				reject(new Error("Favorite Not Found"))
			}
		})
	})
}

const checkFavoriteCompetitions = id =>{
	return new Promise((resolve, reject)=>{
		dbPromised.then(db =>{
			const transaction = db.transaction("competitions", `readonly`);
			return transaction.objectStore("competitions").get(id);
		}).then(data =>{
			if(data!==undefined){
				resolve(true)
			}else{
				resolve(false)
			}
		})
	})
}

const dbInsertCompetitions = competition =>{
	return new Promise((resolve, reject)=>{
		dbPromised.then(db =>{
			const transaction = db.transaction("competitions", `readwrite`);
			transaction.objectStore("competitions")
			.add(competition);
			return transaction;
		}).then(transaction =>{
			if(transaction.complete){
				resolve(true)
			}else{
				reject(new Error(transaction.onerror))
			}
		})
	})
}
const dbDeleteCompetitions = id =>{
	return new Promise((resolve, reject)=>{
		dbPromised.then(db =>{
			const transaction = db.transaction("competitions", `readwrite`);
			transaction.objectStore("competitions").delete(id);
			return transaction;
		}).then(transaction =>{
			if(transaction.complete){
				resolve(true)
			}else{
				reject(new Error(transaction.onerror))
			}
		})
	})
}