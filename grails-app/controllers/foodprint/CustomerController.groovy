package foodprint

import org.springframework.dao.DataIntegrityViolationException

class CustomerController {

    def domainService

    def index(params) {

        render (contentType: 'application/json') {
            [customerInstanceList: Customer.list(params), customerInstanceTotal: Customer.count()]
    
        }
        
    }

 
    def create(){

        def customerInstance=new Customer(params)
        
        render (contentType: 'application/json') {
            domainService.save(customerInstance)
        }
    }

    def update(){
        def  customerInstance = Customer.findById(params.id)
        customerInstance.properties=params
        render (contentType: 'application/json') {
            domainService.save(customerInstance)
        }         
    }


    def delete(){
        def  customerInstance = Customer.findById(params.id)
        render (contentType: 'application/json') {
            domainService.delete(customerInstance)
        }
    }
    
}
