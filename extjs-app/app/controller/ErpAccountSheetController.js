/*
 * File: app/controller/ErpAccountSheetController.js
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

Ext.define('foodprint.controller.ErpAccountSheetController', {
    extend: 'Ext.app.Controller',

    mixins: {
        commonController: 'foodprint.controller.CommonController'
    },

    models: [
        'ErpAccountSheetDet',
        'ErpAccountSheet',
        'Customer',
        'ErpSaleSheet',
        'ErpSaleSheetDet',
        'ErpSaleReturnSheet',
        'ErpSaleReturnSheetDet'
    ],
    stores: [
        'ErpAccountSheetDetStore',
        'ErpAccountSheetStore',
        'CustomerStore',
        'ErpSaleSheetStore',
        'ErpSaleSheetDetStore',
        'ErpSaleReturnSheetStore',
        'ErpSaleReturnSheetDetStore'
    ],
    views: [
        'ErpAccountSheetView'
    ],

    refs: [
        {
            ref: 'mainGrid',
            selector: 'erpaccountsheetview #grid'
        },
        {
            ref: 'mainForm',
            selector: 'erpaccountsheetview #form'
        },
        {
            ref: 'detailGrid',
            selector: 'erpaccountsheetview #detailGrid'
        },
        {
            ref: 'detailForm',
            selector: 'erpaccountsheetview #detailForm'
        }
    ],

    init: function(application) {
        this.control({
            'erpaccountsheetview #index commonindextoolbar commoncreatebtn':{
                click:this.doCreateAndIndexDetail
            },
            'erpaccountsheetview #index commonindextoolbar commonshowbtn':{
                click:this.doShowAccountSheet
            },
            'erpaccountsheetview #show commonshowtoolbar commondeletebtn':{
                click:this.doDelete
            },
            'erpaccountsheetview #show commonshowtoolbar commonsavebtn':{
                click:this.doSave
            },
            'erpaccountsheetview #show commonshowtoolbar commoncancelbtn':{
                click:this.doCancel
            },
            'erpaccountsheetview #grid':{
                select: this.enableShowBtn,
                deselect: this.disableShowBtn,
                itemdblclick: this.doShowAccountSheet
            },
            'erpaccountsheetview #show commonindextoolbar commoncreatebtn':{
                click:this.doCreateDetail
            },
            'erpaccountsheetview #show commonindextoolbar commonshowbtn':{
                click:this.doShowAccountSheetDet
            },
            'erpaccountsheetview #showDetail commonshowtoolbar commondeletebtn':{
                click:this.doDeleteDetail
            },
            'erpaccountsheetview #showDetail #sourceSheetContainer commonselectbtn':{
                click:this.doShowSourceSheetDetIndex
            },
            'erpaccountsheetview #showDetail commonshowtoolbar commonsavebtn':{
                click:this.doSaveDetail
            },
            'erpaccountsheetview #showDetail commonshowtoolbar commoncancelbtn':{
                click:this.doCancelDetail
            },
            'erpaccountsheetview #detailGrid':{
                select: this.enableDetailShowBtn,
                deselect: this.disableDetailShowBtn,
                itemdblclick: this.doShowAccountSheetDet
            },
            'erpaccountsheetview #saleSheetDetIndex erpsalesheetgrid':{
                select: this.doIndexDetailSaleSheet
            },
            'erpaccountsheetview #saleReturnSheetDetIndex erpsalereturnsheetgrid':{
                select: this.doIndexDetailSaleReturnSheet
            },
            'erpaccountsheetview #saleReturnSheetDetIndex erpsalereturnsheetdetgrid':{
                itemdblclick: this.doSelectSaleReturnSheetDet
            },
            'erpaccountsheetview #saleSheetDetIndex erpsalesheetdetgrid':{
                itemdblclick: this.doSelectSaleSheetDet
            },
        });


        this.domainName = 'foodpaint';
        this.foodpaintController = 'accountSheet';
        this.foodpaintDetController = 'accountSheetDet';
        this.masterKey='accountSheet.id';
    },

    doIndexDetailSaleSheet: function(obj, record, index, eOpts) {
        var grid = this.getMainGrid().up().up().down("panel[itemId=saleSheetDetIndex]").down("grid[itemId=erpSaleSheetDetGrid]");

        grid.getStore().data.clear();

        var params = {}
        params["saleSheet.id"]=record.data.id;

        grid.getStore().getProxy().extraParams = params;
        grid.getStore().load();

    },

    doIndexDetailSaleReturnSheet: function(obj, record, index, eOpts) {

        var grid = this.getMainGrid().up().up().down("panel[itemId=saleReturnSheetDetIndex]").down("grid[itemId=erpSaleReturnSheetDetGrid]");

        grid.getStore().data.clear();

        var params = {}
        params["saleReturnSheet.id"]=record.data.id;

        grid.getStore().getProxy().extraParams = params;
        grid.getStore().load();

    },

    doSelectSaleSheetDet: function(obj, record, index, eOpts) {

        this.getDetailForm().getForm().setValues({

            'sourceDocumentName':record.data['id'],
            'documentTypeName':record.data['typeName'],
            'documentName':record.data['name'],
            'documentSequence':record.data['sequence'],
            'warehouse.id':record.data['warehouse.id'],
            'warehouse.title':record.data['warehouse.title'],
            'warehouseLocation.id':record.data['warehouseLocation.id'], 
            'warehouseLocation.title':record.data['warehouseLocation.title'],  
            'item.id':record.data['item.id'], 
            'item.name':record.data['item.name'],
            'item.title':record.data['item.title'],
            'batch.id':record.data['batch.id'],
            'batch.name':record.data['batch.name'],    
            'qty':record.data['qty'],
            'price':record.data['price'],    
            'tax':record.data['tax'],
            'totalAmount':record.data['totalAmount'],
            'subamounts':record.data['subamounts'],

        });


        this.activeDetailEditor();
    },

    doSelectSaleReturnSheetDet: function(obj, record, index, eOpts) {

        this.getDetailForm().getForm().setValues({

            'sourceDocumentName':record.data['id'],
            'documentTypeName':record.data['typeName'],
            'documentName':record.data['name'],
            'documentSequence':record.data['sequence'],
            'warehouse.id':record.data['warehouse.id'],
            'warehouse.title':record.data['warehouse.title'],
            'warehouseLocation.id':record.data['warehouseLocation.id'], 
            'warehouseLocation.title':record.data['warehouseLocation.title'],  
            'item.id':record.data['item.id'], 
            'item.name':record.data['item.name'],
            'item.title':record.data['item.title'],
            'batch.id':record.data['batch.id'],
            'batch.name':record.data['batch.name'],    
            'qty':record.data['qty'],
            'price':record.data['price'],    
            'tax':record.data['tax'],
            'totalAmount':record.data['totalAmount'],
            'subamounts':record.data['subamounts'],


        });


        this.activeDetailEditor();
    },

    doShowSourceSheetDetIndex: function() {
        var source=this.getDetailForm().down('combo[itemId=documentSource]').getValue()

        if(source=='銷貨單'){
            this.getMainForm().up('panel[itemId=show]').up().getLayout().setActiveItem(this.getMainGrid().up().up().down("panel[itemId=saleSheetDetIndex]"));
            var saleSheetDetGrid=this.getMainGrid().up().up().down("panel[itemId=saleSheetDetIndex]").down("grid[itemId=saleSheetDetGrid]");
        }


        if(source=='銷退單'){
            this.getMainForm().up('panel[itemId=show]').up().getLayout().setActiveItem(this.getMainGrid().up().up().down("panel[itemId=saleReturnSheetDetIndex]"));
            var saleReturnSheetDetGrid=this.getMainGrid().up().up().down("panel[itemId=saleReturnSheetDetIndex]").down("grid[itemId=saleReturnSheetDetGrid]");
        }

    },

    doShowAccountSheet: function() {
        this.doShowAndIndexDetail(function(success,form,action){
            //由於store設定load第1-50筆
            //導致doShow時若資料屬於第50筆之後無法正常顯示
            //在此使combo重新load store
            var cucombo=form.findField('customer.id');
            Utilities.comboReload(cucombo,action.result.data['customer.id'],action.result.data['customer.name']);

        });
    },

    doShowAccountSheetDet: function() {

        this.doShowDetail(function(success,form,action){
            //由於store設定load第1-50筆
            //導致doShow時若資料屬於第50筆之後無法正常顯示
            //在此使combo重新load store

        });
    }

});