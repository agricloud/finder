/*
 * File: app/controller/ErpSaleSheetController.js
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

Ext.define('foodprint.controller.ErpSaleSheetController', {
    extend: 'Ext.app.Controller',

    mixins: {
        commonController: 'foodprint.controller.CommonController'
    },

    models: [
        'ErpSaleSheet',
        'ErpSaleSheetDet',
        'Batch',
        'Customer',
        'Warehouse',
        'WarehouseLocation',
        'ErpCustomerOrder',
        'ErpCustomerOrderDet'
    ],
    stores: [
        'ErpSaleSheetStore',
        'ErpSaleSheetDetStore',
        'BatchStore',
        'CustomerStore',
        'WarehouseStore',
        'WarehouseLocationStore',
        'ErpCustomerOrderStore',
        'ErpCustomerOrderDetStore'
    ],
    views: [
        'ErpSaleSheetView'
    ],

    refs: [
        {
            ref: 'mainGrid',
            selector: 'erpsalesheetview #grid'
        },
        {
            ref: 'mainForm',
            selector: 'erpsalesheetview #form'
        },
        {
            ref: 'detailGrid',
            selector: 'erpsalesheetview #detailGrid'
        },
        {
            ref: 'detailForm',
            selector: 'erpsalesheetview #detailForm'
        }
    ],

    init: function(application) {
        this.control({
            'erpsalesheetview #index commonindextoolbar commoncreatebtn':{
                click:this.doCreateAndIndexDetail
            },
            'erpsalesheetview #index commonindextoolbar commonshowbtn':{
                click:this.doShowSaleSheet
            },
            'erpsalesheetview #show commonshowtoolbar commondeletebtn':{
                click:this.doDelete
            },
            'erpsalesheetview #show commonshowtoolbar commonsavebtn':{
                click:this.doSave
            },
            'erpsalesheetview #show commonshowtoolbar commoncancelbtn':{
                click:this.doCancel
            },
            'erpsalesheetview #grid':{
                select: this.enableShowBtn,
                deselect: this.disableShowBtn,
                itemdblclick: this.doShowSaleSheet
            },
            'erpsalesheetview #show commonindextoolbar commoncreatebtn':{
                click:this.doCreateDetail
            },
            'erpsalesheetview #show commonindextoolbar commonshowbtn':{
                click:this.doShowSaleSheetDet
            },
            'erpsalesheetview #showDetail commonshowtoolbar commondeletebtn':{
                click:this.doDeleteDetail
            },
            'erpsalesheetview #showDetail commonshowtoolbar commonsavebtn':{
                click:this.doSaveDetail
            },
            'erpsalesheetview #showDetail commonshowtoolbar commoncancelbtn':{
                click:this.doCancelDetail
            },
            'erpsalesheetview #detailGrid':{
                select: this.enableDetailShowBtn,
                deselect: this.disableDetailShowBtn,
                itemdblclick: this.doShowSaleSheetDet
            },
            'erpsalesheetview #showDetail #customerOrderDetContainer commonselectbtn':{
                click:this.activeCustomerOrderDetIndex
            },
            'erpsalesheetview #showDetail #customerOrderDetContainer commoncancelbtn':{
                click:this.doCancelCustomerOrderDet
            },
            'erpsalesheetview #showDetail commonitemcombo':{
                select:this.doCancelCustomerOrderDet
            },
            'erpsalesheetview #customerOrderDetIndex erpcustomerordergrid':{
                select: this.doIndexDetailCustomerOrder
            },
            'erpsalesheetview #customerOrderDetIndex erpcustomerorderdetgrid':{
                itemdblclick: this.doSelectCustomerOrderDet
            }

        });


        this.domainName = 'foodpaint';
        this.foodpaintController = 'saleSheet';
        this.foodpaintDetController = 'saleSheetDet';
        this.masterKey='saleSheet.id';
    },

    doIndexDetailCustomerOrder: function(obj, record, index, eOpts) {
        var grid = this.getMainGrid().up().up().down("panel[itemId=customerOrderDetIndex]").down("grid[itemId=erpCustomerOrderDetGrid]");

        grid.getStore().data.clear();

        var params = {}
        params["customerOrder.id"]=record.data.id;

        grid.getStore().getProxy().extraParams = params;
        grid.getStore().load();
    },

    doSelectCustomerOrderDet: function(obj, record, index, eOpts) {
        this.getDetailForm().getForm().setValues({

            'customerOrderDet.id':record.data['id'],
            'customerOrderDet.typeName':record.data['typeName'],
            'customerOrderDet.name':record.data['name'],
            'customerOrderDet.sequence':record.data['sequence'],
            'item.id':record.data['item.id'],
            'item.title':record.data['item.title'],
            'qty':record.data['qty']
        });
        this.reloadBatchComboByItem(record.data['item.id']);
        this.activeDetailEditor();
    },

    doCancelCustomerOrderDet: function() {

        this.getDetailForm().getForm().setValues({
            'customerOrderDet.id':null,
            'customerOrderDet.typeName':null,
            'customerOrderDet.name':null,
            'customerOrderDet.sequence':null
        });
    },

    reloadBatchComboByItem: function(itemId) {
        var combo = this.getDetailForm().down("combo[itemId=commonBatchCombo]");
        combo.getStore().load({
            url:'/batch/indexByItem',
            params: {'item.id': itemId}
        });
        //combo在remote模式下
        //設定第一次trigger時自動load
        //造成此處指定查詢的Batch結果會被覆蓋
        //給定lastQuery使系統默認為已load過
        combo.lastQuery='';
    },

    doShowSaleSheet: function() {
        this.doShowAndIndexDetail(function(success,form,action){
            //由於store設定load第1-50筆
            //導致doShow時若資料屬於第50筆之後無法正常顯示
            //在此使combo重新load store
            var cucombo=form.findField('customer.id');
            Utilities.comboReload(cucombo,action.result.data['customer.id'],action.result.data['customer.name']);

        });
    },

    doShowSaleSheetDet: function() {

        this.doShowDetail(function(success,form,action){
            //由於store設定load第1-50筆
            //導致doShow時若資料屬於第50筆之後無法正常顯示
            //在此使combo重新load store
            var whcombo=form.findField('warehouse.id');
            Utilities.comboReload(whcombo,action.result.data['warehouse.id'],action.result.data['warehouse.name']);
            var batchcombo=form.findField('batch.id');
            Utilities.comboReload(batchcombo,action.result.data['batch.id'],action.result.data['batch.name']);
            var itemcombo=form.findField('item.id');
            Utilities.comboReload(itemcombo,action.result.data['item.id'],action.result.data['item.name']);

            //warehouseLocation combo需指定warehouse id才可load
            var wlcombo=form.findField('warehouseLocation.id');
            Utilities.compositionComboReload(wlcombo, 'warehouse.id', action.result.data['warehouse.id'],action.result.data['warehouseLocation.id']);

        });
    }

});
