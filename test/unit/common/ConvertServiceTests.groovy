package common

import grails.test.mixin.*
import org.junit.*
import foodprint.*
import grails.converters.JSON
/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(ConvertService)
@Mock([Batch, Item, User,
	Customer,Supplier,Workstation,Operation,
	BatchRoute,ItemRoute,
	Param,Report,ReportParams,BatchReportDet,EnumService,TestService])

class ConvertServiceTests {

	void testItemJsonConvert() {

    	def item = new Item(name: 'item1').save()

		JSON.registerObjectMarshaller(Item) {
		    service.itemParseJson(it)
		}

		assert item as JSON 
    }
    void testBatchJsonConvert() {
    	messageSource.addMessage("country.TAIWAN.label", Locale.getDefault(), "台灣")

    	def item = new Item(name: 'item1').save()
    	def batch = new Batch(name:'batch1', item: item, expectQty:10).save()

		JSON.registerObjectMarshaller(Batch) {
		    service.batchParseJson(it)
		}

		JSON.registerObjectMarshaller(Item) {
		    service.itemParseJson(it)
		}

		assert batch as JSON 
    }

    void testBatchRouteJsonConvert() {
    	def item = new Item(name: 'item1',title:'品項1').save()
    	def ws = new Workstation(name: 'workstation1',title:'生產線1').save()
    	def sp = [:];//new Supplier(name: 'supplier1',title:'供應商1').save()
    	sp.id=null
    	def op = new Operation(name: 'operation1',title:'製程1').save()
    	def batch = new Batch(name:'batch1', item: item, expectQty:10).save()
    	def batchRoute = new BatchRoute(batch:batch,sequence:1,workstation:ws,supplier:sp,operation:op).save()

		JSON.registerObjectMarshaller(BatchRoute) {
		    service.batchRouteParseJson(it)
		}
		JSON.registerObjectMarshaller(Batch) {
		    service.batchParseJson(it)
		}
		JSON.registerObjectMarshaller(Item) {
		    service.itemParseJson(it)
		}
		JSON.registerObjectMarshaller(Workstation) {
		    service.workstationParseJson(it)
		}
		JSON.registerObjectMarshaller(Supplier) {
		    service.supplierParseJson(it)
		}
		JSON.registerObjectMarshaller(Operation) {
		    service.operationParseJson(it)
		}

		assert batchRoute as JSON
    }

    void testItemRouteJsonConvert() {
    	def testService = new TestService()
    	testService.createStdTestData()
    	testService.createExtraRouteData()

		JSON.registerObjectMarshaller(ItemRoute) {
		    service.itemRouteParseJson(it)
		}
		JSON.registerObjectMarshaller(Item) {
		    service.itemParseJson(it)
		}
		JSON.registerObjectMarshaller(Workstation) {
		    service.workstationParseJson(it)
		}
		JSON.registerObjectMarshaller(Operation) {
		    service.operationParseJson(it)
		}

		assert ItemRoute.list() as JSON
    }

    void testUserJsonConvert() {

    	def user = new User( username:"admin",password:"admin", enabled: true).save()

		JSON.registerObjectMarshaller(User) {
		    service.userParseJson(it)
		}

		assert user as JSON 
    }

    void testCustomerJsonConvert() {

    	def customer = new Customer(name:"cutstomer",title:"客戶Ａ").save()

		JSON.registerObjectMarshaller(Customer) {
		    service.customerParseJson(it)
		}

		assert customer as JSON 
    }

    void testSupplierJsonConvert() {
    	messageSource.addMessage("country.TAIWAN.label", Locale.getDefault(), "台灣")

    	def supplier = new Supplier(name:"supplier",title:"供應商Ａ").save()

		JSON.registerObjectMarshaller(Supplier) {
		    service.supplierParseJson(it)
		}

		assert supplier as JSON 
    }

    void testOperationJsonConvert() {

    	def operation = new Operation(name: 'operation1',title:'製程1').save()

		JSON.registerObjectMarshaller(Operation) {
		    service.operationParseJson(it)
		}

		assert operation as JSON 
    }

    void testWorkstationJsonConvert() {

    	def workstation = new Workstation(name: 'workstation1',title:'製程1').save()

		JSON.registerObjectMarshaller(Workstation) {
		    service.workstationParseJson(it)
		}

		assert workstation as JSON 
    }

    void testParamJsonConvert(){

    	messageSource.addMessage("paramType.INTEGER.label", Locale.getDefault(), "整數")

	    def param = new Param(name:"A",title:"益多松",defaultValue:"0.0",paramType:ParamType.INTEGER).save()

		JSON.registerObjectMarshaller(Param) {
		    service.paramParseJson(it)
		}


		assert param as JSON
	}

    void testReportJsonConvert(){

    	messageSource.addMessage("reportType.INSPECT.label", Locale.getDefault(), "檢驗")

	    def report=new Report(name:"report",title:"成品檢驗報告集", reportType: ReportType.INSPECT).save()

		JSON.registerObjectMarshaller(Report) {
		    service.reportParseJson(it)
		}

		assert report as JSON
	}

	void testReportParamsJsonConvert(){
	    def item = new Item(name: 'item1',title:'品項1').save()
	    def param = new Param(name:"A",title:"益多松",defaultValue:"0.0",paramType:ParamType.INTEGER).save()
	    def report=new Report(name:"report",title:"成品檢驗報告集", reportType: ReportType.INSPECT).save()
	    def ws = new Workstation(name: 'workstation1',title:'生產線1').save()
	    def sp = [:];//new Supplier(name: 'supplier1',title:'供應商1').save()
	    sp.id=null
	    def op = new Operation(name: 'operation1',title:'製程1').save()
		def reportparams=new  ReportParams (report:report,param:param,workstation:ws,supplier:sp,operation:op,item:item).save()


		JSON.registerObjectMarshaller(Item) {
		    service.itemParseJson(it)
		}
		JSON.registerObjectMarshaller(Workstation) {
		    service.workstationParseJson(it)
		}
		JSON.registerObjectMarshaller(Supplier) {
		    service.supplierParseJson(it)
		}
		JSON.registerObjectMarshaller(Operation) {
		    service.operationParseJson(it)
		}
		JSON.registerObjectMarshaller(Param) {
		    service.paramParseJson(it)
		}
		JSON.registerObjectMarshaller(Report) {
		    service.reportParseJson(it)
		}
		JSON.registerObjectMarshaller(ReportParams) {
		    service.reportParamsParseJson(it)
		}

		assert reportparams as JSON
	}

    void testBatchReportDetJsonConvert(){
	    def item = new Item(name: 'item1',title:'品項1').save()
	    def batch = new Batch(name:'batch1', item: item, expectQty:10).save()
	    def param = new Param(name:"A",title:"益多松",defaultValue:"0.0",paramType:ParamType.INTEGER).save()
	    def report=new Report(name:"report3",title:"成品檢驗報告集", reportType: ReportType.INSPECT).save()
	    def ws = new Workstation(name: 'workstation1',title:'生產線1').save()
	    def sp = [:];//new Supplier(name: 'supplier1',title:'供應商1').save()
	    sp.id=null
	    def op = new Operation(name: 'operation1',title:'製程1').save()
		def reportparams=new  ReportParams (report:report,param:param,workstation:ws,supplier:sp,operation:op,item:item).save()
		
	    def brd = new BatchReportDet(batch:batch,reportParams:reportparams,value:"20").save()

		JSON.registerObjectMarshaller(Batch) {
		    service.batchParseJson(it)
		}
		JSON.registerObjectMarshaller(BatchRoute) {
		    service.batchRouteParseJson(it)
		}
		JSON.registerObjectMarshaller(Item) {
		    service.itemParseJson(it)
		}
		JSON.registerObjectMarshaller(Workstation) {
		    service.workstationParseJson(it)
		}
		JSON.registerObjectMarshaller(Supplier) {
		    service.supplierParseJson(it)
		}
		JSON.registerObjectMarshaller(Operation) {
		    service.operationParseJson(it)
		}
		JSON.registerObjectMarshaller(Param) {
		    service.paramParseJson(it)
		}
		JSON.registerObjectMarshaller(Report) {
		    service.reportParseJson(it)
		}
		JSON.registerObjectMarshaller(ReportParams) {
		    service.reportParamsParseJson(it)
		}
		JSON.registerObjectMarshaller(BatchReportDet) {
		    service.batchReportDetParseJson(it)
		}

		assert brd as JSON
	}
}

