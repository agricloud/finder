/*
 * File: app/controller/ErpMaterialSheetController.js
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

Ext.define('foodprint.controller.ErpMaterialSheetController', {
    extend: 'Ext.app.Controller',

    mixins: {
        commonController: 'foodprint.controller.CommonController'
    },

    models: [
        'ErpMaterialSheet',
        'ErpMaterialSheetDet',
        'Workstation',
        'Supplier',
        'Warehouse',
        'WarehouseLocation',
        'Batch',
        'ErpManufactureOrder'
    ],
    stores: [
        'ErpMaterialSheetStore',
        'ErpMaterialSheetDetStore',
        'WorkstationStore',
        'SupplierStore',
        'WarehouseStore',
        'WarehouseLocationStore',
        'BatchStore',
        'ErpManufactureOrderStore'
    ],
    views: [
        'ErpMaterialSheetView'
    ],

    refs: [
        {
            ref: 'mainGrid',
            selector: 'erpmaterialsheetview #grid'
        },
        {
            ref: 'mainForm',
            selector: 'erpmaterialsheetview #form'
        },
        {
            ref: 'detailGrid',
            selector: 'erpmaterialsheetview #detailGrid'
        },
        {
            ref: 'detailForm',
            selector: 'erpmaterialsheetview #detailForm'
        }
    ],

    init: function(application) {
        this.control({
            'erpmaterialsheetview #index commonindextoolbar commoncreatebtn':{
                click:this.doCreateAndIndexDetail
            },
            'erpmaterialsheetview #index commonindextoolbar commonshowbtn':{
                click:this.doShowMaterialSheet
            },
            'erpmaterialsheetview #show commonshowtoolbar commondeletebtn':{
                click:this.doDelete
            },
            'erpmaterialsheetview #show commonshowtoolbar commonsavebtn':{
                click:this.doSave
            },
            'erpmaterialsheetview #show commonshowtoolbar commoncancelbtn':{
                click:this.doCancel
            },
            'erpmaterialsheetview #show commonshowtoolbar commonprintbtn':{
                click:this.doPrint
            },
            'erpmaterialsheetview #grid':{
                select: this.enableShowBtn,
                deselect: this.disableShowBtn,
                itemdblclick: this.doShowMaterialSheet
            },
            'erpmaterialsheetview #show commonindextoolbar commoncreatebtn':{
                click:this.doCreateDetail
            },
            'erpmaterialsheetview #show commonindextoolbar commonshowbtn':{
                click:this.doShowMaterialSheetDet
            },
            'erpmaterialsheetview #showDetail commonshowtoolbar commondeletebtn':{
                click:this.doDeleteDetail
            },
            'erpmaterialsheetview #showDetail commonshowtoolbar commonsavebtn':{
                click:this.doSaveDetail
            },
            'erpmaterialsheetview #showDetail commonshowtoolbar commoncancelbtn':{
                click:this.doCancelDetail
            },
            'erpmaterialsheetview #detailGrid':{
                select: this.enableDetailShowBtn,
                deselect: this.disableDetailShowBtn,
                itemdblclick: this.doShowMaterialSheetDet
            },
            'erpmaterialsheetview #showDetail commonitemcombo':{
                select:this.doReloadBatchComboByItem
            },
            'erpmaterialsheetview #showDetail commonselectbtn':{
                click:this.activeManufactureOrderIndex
            },
            'erpmaterialsheetview #manufactureOrderIndex erpmanufactureordergrid':{
                itemdblclick: this.doSelectManufactureOrder
            }

        });


        this.domainName = 'foodpaint';
        this.foodpaintController = 'materialSheet';
        this.foodpaintDetController = 'materialSheetDet';
        this.masterKey='materialSheet.id';
    },

    doSelectManufactureOrder: function(obj, record, index, eOpts) {
        this.getDetailForm().getForm().setValues({

            'manufactureOrder.id':record.data['id'],
            'manufactureOrder.typeName':record.data['typeName'],
            'manufactureOrder.name':record.data['name']
        });

        this.activeDetailEditor();
    },

    doShowMaterialSheet: function() {
        this.doShowAndIndexDetail(function(success,form,action){
            //由於store設定load第1-50筆
            //導致doShow時若資料屬於第50筆之後無法正常顯示
            //在此使combo重新load store
            var wscombo=form.findField('workstation.id');
            Utilities.comboReload(wscombo,action.result.data['workstation.id'],action.result.data['workstation.name']);
            var spcombo=form.findField('supplier.id');
            Utilities.comboReload(spcombo,action.result.data['supplier.id'],action.result.data['supplier.name']);
        });
    },

    doShowMaterialSheetDet: function() {

        this.doShowDetail(function(success,form,action){
            //由於store設定load第1-50筆
            //導致doShow時若資料屬於第50筆之後無法正常顯示
            //在此使combo重新load store
            var itemcombo=form.findField('item.id');
            Utilities.comboReload(itemcombo,action.result.data['item.id'],action.result.data['item.name']);
            var batchcombo=form.findField('batch.id');
            Utilities.comboReload(batchcombo,action.result.data['batch.id'],action.result.data['batch.name']);

            var whcombo=form.findField('warehouse.id');
            Utilities.comboReload(whcombo,action.result.data['warehouse.id'],action.result.data['warehouse.name']);

            //warehouseLocation combo需指定warehouse id才可load
            var wlcombo=form.findField('warehouseLocation.id');
            Utilities.compositionComboReload(wlcombo, 'warehouse.id', action.result.data['warehouse.id'],action.result.data['warehouseLocation.id']);
        });
    },

    doReloadBatchComboByItem: function(combo, records, eOpts) {
        this.reloadBatchComboByItem(records[0].data.id);
    }

});
