package foodprint


    /*
    * 記錄生產的 batch 是由哪些元物料的 batch 所組成
    */
class BatchSource {

	static belongsTo = [parentBatch: Batch]
	Batch batch

    static constraints = {
    	batch unique: 'parentBatch' 
    }
}
