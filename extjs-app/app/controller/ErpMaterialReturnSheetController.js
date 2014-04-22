/*
 * File: app/controller/ErpMaterialReturnSheetController.js
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

Ext.define('foodprint.controller.ErpMaterialReturnSheetController', {
    extend: 'Ext.app.Controller',

    mixins: {
        commonController: 'foodprint.controller.CommonController'
    },

    models: [
        'ErpMaterialReturnSheet'
    ],
    stores: [
        'ErpMaterialReturnSheetStore'
    ],
    views: [
        'ErpMaterialReturnSheetView'
    ],

    refs: [
        {
            ref: 'mainGrid',
            selector: 'erpmaterialreturnsheetview #grid'
        },
        {
            ref: 'mainForm',
            selector: 'erpmaterialreturnsheetview #form'
        },
        {
            ref: 'detailGrid',
            selector: 'erpmaterialreturnsheetview #detailGrid'
        },
        {
            ref: 'detailForm',
            selector: 'erpmaterialreturnsheetview #detailForm'
        }
    ],

    init: function(application) {
        this.control({
            'erpmaterialreturnsheetview #index commonindextoolbar commoncreatebtn':{
                click:this.doCreateAndIndexDetail
            },
            'erpmaterialreturnsheetview #index commonindextoolbar commonshowbtn':{
                click:this.doShowMaterialReturnSheet
            },
            'erpmaterialreturnsheetview #show commonshowtoolbar commondeletebtn':{
                click:this.doDelete
            },
            'erpmaterialreturnsheetview #show commonshowtoolbar commonsavebtn':{
                click:this.doSave
            },
            'erpmaterialreturnsheetview #show commonshowtoolbar commoncancelbtn':{
                click:this.doCancel
            },
            'erpmaterialreturnsheetview #grid':{
                select: this.enableShowBtn,
                deselect: this.disableShowBtn,
                itemdblclick: this.doShowMaterialReturnSheet
            },
            'erpmaterialreturnsheetview #show commonindextoolbar commoncreatebtn':{
                click:this.doCreateDetail
            },
            'erpmaterialreturnsheetview #show commonindextoolbar commonshowbtn':{
                click:this.doShowMaterialReturnSheetDet
            },
            'erpmaterialreturnsheetview #showDetail commonshowtoolbar commondeletebtn':{
                click:this.doDeleteDetail
            },
            'erpmaterialreturnsheetview #showDetail commonshowtoolbar commonsavebtn':{
                click:this.doSaveDetail
            },
            'erpmaterialreturnsheetview #showDetail commonshowtoolbar commoncancelbtn':{
                click:this.doCancelDetail
            },
            'erpmaterialreturnsheetview #detailGrid':{
                select: this.enableDetailShowBtn,
                deselect: this.disableDetailShowBtn
                //itemdblclick: this.doShowMaterialReturnSheetDet
            },
            'erpmaterialreturnsheetview #showDetail commonselectbtn':{
                click:this.activeMaterialSheetDetIndex
            },
            'erpmaterialreturnsheetview #materialSheetDetIndex erpmaterialsheetgrid':{
                select: this.doIndexDetailMaterialSheet
            },
            'erpmaterialreturnsheetview #materialSheetDetIndex erpmaterialsheetdetgrid #detailGrid':{
                itemdblclick: this.doSelectMaterialSheetDet
            }
            /*'erpmaterialreturnsheetview #showDetail #materialSheetDetContainer commoncancelbtn':{
            click:this.doCancelMaterialSheetDet
            },
            'erpmaterialreturnsheetview #showDetail commonitemcombo':{
            select:this.doCancelMaterialSheetDet
            }*/


        });


        this.domainName = 'foodpaint';
        this.foodpaintController = 'materialReturnSheet';
        this.foodpaintDetController = 'materialReturnSheetDet';
        this.masterKey='materialReturnSheet.id';
    },

    doSelectMaterialSheet: function(obj, record, index, eOpts) {
        this.getDetailForm().getForm().setValues({

            'materialSheet.id':record.data['id'],
            'materialSheet.typeName':record.data['typeName'],
            'materialSheet.name':record.data['name'],

            'manufactureOrder.id':record.data['manufactureOrder.id'],
            'manufactureOrder.typeName':record.data['manufactureOrder.typeName'],
            'manufactureOrder.name':record.data['manufactureOrder.name']

        });
        this.activeDetailEditor();
    },

    doSelectMaterialSheetDet: function(obj, record, index, eOpts) {
        this.getDetailForm().getForm().setValues({

            'materialSheetDet.id':record.data['id'],
            'materialSheetDet.typeName':record.data['typeName'],
            'materialSheetDet.name':record.data['name'],
            'materialSheetDet.sequence':record.data['sequence'],
            'item.id':record.data['item.id'],
            'item.name':record.data['item.name'],
            'item.title':record.data['item.title'],
            'warehouse.id':record.data['warehouse.id'],
            'warehouse.title':record.data['warehouse.title'],
            'warehouseLocation.id':record.data['warehouseLocation.id'],
            'warehouseLocation.title':record.data['warehouseLocation.title'],
            'batch.id':record.data['batch.id'],
            'batch.name':record.data['batch.name'],
            'manufactureOrder.id':record.data['manufactureOrder.id']
        });
        this.activeDetailEditor();
    },

    doIndexDetailMaterialSheet: function(obj, record, index, eOpts) {
        var grid = this.getMainGrid().up().up().down("panel[itemId=materialSheetDetIndex]").down("panel[itemId=erpMaterialSheetDetGrid]").down("grid[itemId=detailGrid]");
        console.log();
        var store=grid.getStore(grid);
        console.log(store);

        store.data.clear();

        var params = {};
        params["materialSheet.id"]=record.data.id;

        store.getProxy().extraParams = params;
        store.load();
    },

    doCancelMaterialSheetDet: function() {

        this.getDetailForm().getForm().setValues({
            'materialSheetDet.id':null,
            'materialSheetDet.typeName':null,
            'materialSheetDet.name':null,
            'materialSheetDet.sequence':null
        });
    },

    doShowMaterialReturnSheet: function() {
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

    doShowMaterialReturnSheetDet: function() {

    }

});