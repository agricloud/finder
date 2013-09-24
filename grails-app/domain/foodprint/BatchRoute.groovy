package foodprint

class BatchRoute {

	static belongsTo=[batch:Batch]
	Workstation workstation
	Operation operation
	int sequence


    /*
    * 開始時間
    */
	Date startDate


    /*
    * 結束時間
    */
	Date endDate

    /**
     * 廠別
     */
    Site site

    /**
     * 修改者
     */
    String editor = ""

    /**
     * 建立者
     */
    String creator = ""

    /**
     * 建立日期（自動欄位）
     */
    Date dateCreated

    /**
     * 修改日期（自動欄位）
     */
    Date lastUpdated
	 

    static constraints = {
    	sequence unique:'batch'
    	startDate nullable:true
    	endDate nullable:true
        site nullable:true
    }
}
