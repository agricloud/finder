package foodprint


    /*
    * 客戶訂單
    */
class CustomerOrder {


    /*
    * 訂單單別
    */
	String nameType

	/*
	* 訂單編號
	*/
	String name
	/*
	* 客戶編號
	*/
	Customer customer

	/*
	* 到期日
	*/
	Date dueDate=new Date()

	/*
	* 多個訂單單身 
	*/

	static hasMany=[details:CustomerOrderDet]


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
    	name unique:"nameType"
    	dueDate nullable:true
    	customer nullable:true
    	site nullable:true
    }
}
