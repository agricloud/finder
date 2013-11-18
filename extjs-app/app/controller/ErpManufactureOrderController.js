/*
 * File: app/controller/ErpManufactureOrderController.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('foodprint.controller.ErpManufactureOrderController', {
    extend: 'Ext.app.Controller',

    mixins: {
        commonController: 'foodprint.controller.CommonController'
    },

    models: [
        'ErpManufactureOrder'
    ],
    stores: [
        'ErpManufactureOrderStore'
    ],
    views: [
        'ErpManufactureOrderView'
    ],

    refs: [
        {
            ref: 'mainGrid',
            selector: 'erpmanufactureorderview #grid'
        },
        {
            ref: 'mainForm',
            selector: 'erpmanufactureorderview #form'
        }
    ],

    init: function(application) {
        this.control({
            'erpmanufactureorderview #index commonindextoolbar commoncreatebtn':{
                click:this.doCreate
            },
            'erpmanufactureorderview #index commonindextoolbar commonshowbtn':{
                click:this.doShow
            },
            'erpmanufactureorderview #show commonshowtoolbar commondeletebtn':{
                click:this.doDelete
            },
            'erpmanufactureorderview #show commonshowtoolbar commonsavebtn':{
                click:this.doSave
            },
            'erpmanufactureorderview #show commonshowtoolbar commoncancelbtn':{
                click:this.doCancel
            },
            'erpmanufactureorderview #grid':{
                select: this.enableShowBtn,
                deselect: this.disableShowBtn,
                itemdblclick: this.doShow,
                afterrender: this.doIndexFoodpaint
            }

        });


        this.domainName = 'manufactureOrder';
        this.isErpDomain = true;

    }

});