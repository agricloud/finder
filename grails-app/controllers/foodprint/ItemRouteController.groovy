package foodprint

import org.springframework.dao.DataIntegrityViolationException
import grails.converters.JSON

class ItemRouteController {

    static allowedMethods = [create: "POST", update: "PUT", delete: "DELETE"]
    def messageSource

    def index() {
        redirect(action: "list", params: params)
    }
    
    def list(Integer max) {
        // find itemForm id
        def itemRoute=Item.findById(params.item.id).itemRoutes
        // findAllByItem use item
        //def itemRoute=ItemRoute.findAllByItem(item)
        // return array
        [itemRouteInstanceList:itemRoute.collect(), itemRouteInstanceTotal: itemRoute.size()]
    }

    def show() {
        log.debug "${controllerName}-${actionName}"
    }

    /*
    def list(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        [itemRouteInstanceList: ItemRoute.list(params), itemRouteInstanceTotal: ItemRoute.count()]
    }
    */
    def listJson(Integer max) {
        log.debug "${controllerName}-${actionName}"
        JSON.use('deep')
        def converter=list(max) as JSON
        converter.render(response)
        /*
        render (contentType: 'text/json') {
            list(max)        
        }
        */
    }
    /*
    def listJson(Integer max) {
        render (contentType: 'text/json') {
            list(max)        
        }
    }
    */

    def create(){
        log.debug "${controllerName}-${actionName}"
        def itemRouteInstance= new ItemRoute(params)
        println params.itemid
        println params["operation.id"]
        println params["workstation.id"]
        itemRouteInstance.item=Item.findById(params.itemid)
        itemRouteInstance.operation=Operation.findById(params["operation.id"])
        itemRouteInstance.workstation=Workstation.findById(params["workstation.id"])
        render (contentType: 'text/json') {
            save(itemRouteInstance)
        }
    }

    def save(ItemRoute itemRouteInstance) {
        log.debug "${controllerName}-${actionName}"
        def errorsMsg=[]
        // def locale = Locale.getDefault()
        if(!itemRouteInstance.validate()) { // validate id

            itemRouteInstance.errors.allErrors.each{ 
                println it as JSON
                errorsMsg << messageSource.getMessage(it, Locale.getDefault())
            }
            return [success: false,
                    message: errorsMsg.join('<br>')]
        }

        // 未完成範例，勿刪
        // if(!itemRouteInstance.validate()) { // validate id

        //     itemRouteInstance.errors.allErrors.each{ 
        //         def error=[:]
        //         error.message= messageSource.getMessage(it, Locale.getDefault())
        //         error.field=it.field


        //         errors << error
        //     }
        //     return [success: false,
        //             errors: errors,
        //             message: '更新失敗']
        // }




        if (!itemRouteInstance.save(failOnError: true)) {
            return [success: false]
        }

        else{
            // 顯示儲存後，傳入的 workstation_id
            //println "saved workstation_id: "+itemRouteInstance.workstation.id
            return [success:true]
        }
    }
    /*
    def create() { // origin
        [itemRouteInstance: new ItemRoute(params)]
    }

    def save() { // origin
        def itemRouteInstance = new ItemRoute(params)
        if (!itemRouteInstance.save(flush: true)) {
            render(view: "create", model: [itemRouteInstance: itemRouteInstance])
            return
        }

        flash.message = message(code: 'default.created.message', args: [message(code: 'item.label', default: 'ItemRoute'), itemRouteInstance.id])
        redirect(action: "show", id: itemRouteInstance.id)
    }
    */

    /*
    def show(Long id) {
        def itemRouteInstance = ItemRoute.get(id)
        if (!itemRouteInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'item.label', default: 'ItemRoute'), id])
            redirect(action: "list")
            return
        }

        [itemRouteInstance: itemRouteInstance]
    }
    */

    def edit(Long id) {
        def itemRouteInstance = ItemRoute.get(id)
        if (!itemRouteInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'item.label', default: 'ItemRoute'), id])
            redirect(action: "list")
            return
        }
        [itemRouteInstance: itemRouteInstance]
    }

     def update(){
        log.debug "${controllerName}-${actionName}"
        def itemRouteInstance=ItemRoute.findById(params.id)
        //def itemRouteInstance=ItemRoute.get(params.id)
        if(!itemRouteInstance) {
            log.warning "${controllerName}-${actionName}-itemRouteInstance not found"
            return render (contentType: 'text/json') {
                [success:false]
            }
        }
        itemRouteInstance.properties = params
        // log.debug "sequence = ${itemRouteInstance.sequence}"
        //  顯示儲存前，傳入的 workstation_id
        // println "input workstation_id: "+params.workstation_id
       // itemRouteInstance.workstation=Workstation.findById(params.workstation.id)
        render (contentType: 'text/json') {
            save(itemRouteInstance)
        }
    }

    
    /*
    def update(Long id, Long version) {
        def itemRouteInstance = ItemRoute.get(id)
        if (!itemRouteInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'item.label', default: 'ItemRoute'), id])
            redirect(action: "list")
            return
        }

        if (version != null) {
            if (itemRouteInstance.version > version) {
                itemRouteInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'item.label', default: 'ItemRoute')] as Object[],
                          "Another user has updated this ItemRoute while you were editing")
                render(view: "edit", model: [itemRouteInstance: itemRouteInstance])
                return
            }
        }

        itemRouteInstance.properties = params

        if (!itemRouteInstance.save(flush: true)) {
            render(view: "edit", model: [itemRouteInstance: itemRouteInstance])
            return
        }

        flash.message = message(code: 'default.updated.message', args: [message(code: 'item.label', default: 'ItemRoute'), itemRouteInstance.id])
        redirect(action: "show", id: itemRouteInstance.id)
    }
    */
  def delete(){
        println"ItemRouteController--delete"
        println params
        def itemRouteInstance= ItemRoute.get(params.id)
        
        if (!itemRouteInstance) {
            println"ItemRouteController--delete--Cant find itemRouteInstance"
            render (contentType: 'text/json') {
                return [success:false]
            }
        }
        try {
            itemRouteInstance.delete()
            render (contentType: 'text/json') {
                return [success:true]
            }
        }
        catch (e) {
            render (contentType: 'text/json') {
                return [success:false]
            }
        }

    }

/*
     def delete() {
        log.debug "${controllerName}-${actionName}"
        println params.id
        println params.itemid
        def itemRouteInstance = ItemRoute.get(params.id)
        if (!itemRouteInstance) {
            log.warning "${controllerName}-${actionName}-Cant find itemRouteInstance"
            render(contentType: 'text/json') {
                return [success: false]
            }
        }
        itemRouteInstance.delete(failOnError: true)
            render(contentType: 'text/json') {
                return [success: true]
            }
        try {
            itemRouteInstance.delete(failOnError: true)
            render(contentType: 'text/json') {
                return [success: true]
            }
        }
        catch (e) {
            render (contentType: 'text/json') {
                return [success: false]
            }
        }
    }
*/

    /*
    def delete(Long id) { // origin
        def itemRouteInstance = ItemRoute.get(id)
        if (!itemRouteInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'item.label', default: 'ItemRoute'), id])
            redirect(action: "list")
            return
        }

        try {
            itemRouteInstance.delete(flush: true)
            flash.message = message(code: 'default.deleted.message', args: [message(code: 'item.label', default: 'ItemRoute'), id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
            flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'item.label', default: 'ItemRoute'), id])
            redirect(action: "show", id: id)
        }
    }
    */
}
