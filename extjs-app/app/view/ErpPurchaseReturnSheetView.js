/*
 * File: app/view/ErpPurchaseReturnSheetView.js
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

Ext.define('foodprint.view.ErpPurchaseReturnSheetView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.erppurchasereturnsheetview',

    requires: [
        'foodprint.view.CommonSupplierCombo',
        'foodprint.view.CommonSelectBtn',
        'foodprint.view.CommonWarehouseCombo',
        'foodprint.view.CommonWarehouseLocationCombo',
        'foodprint.view.ErpPurchaseSheetGrid',
        'foodprint.view.ErpPurchaseSheetDetGrid',
        'foodprint.view.CommonIndexToolbar',
        'foodprint.view.CommonShowToolbar'
    ],

    layout: {
        type: 'card'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    tbar: {
                        xtype: 'commonindextoolbar'
                    },
                    itemId: 'index',
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        me.processErpPurchaseReturnSheetGrid({
                            xtype: 'gridpanel',
                            itemId: 'grid',
                            store: 'ErpPurchaseReturnSheetStore',
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    width: 360,
                                    displayInfo: true,
                                    store: 'ErpPurchaseSheetStore'
                                }
                            ],
                            columns: [
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'id',
                                    text: 'Id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'typeName',
                                    text: 'TypeName',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: 'Name',
                                    flex: 1
                                },
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'supplier.id',
                                    text: 'Supplier.Id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'supplier.name',
                                    text: 'Supplier.Name',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'supplier.title',
                                    text: 'Supplier.Title',
                                    flex: 1
                                }
                            ],
                            listeners: {
                                afterrender: {
                                    fn: me.onErpPurchaseReturnSheetGridAfterRender,
                                    scope: me
                                }
                            }
                        })
                    ]
                },
                {
                    xtype: 'panel',
                    tbar: {
                        xtype: 'commonshowtoolbar'
                    },
                    itemId: 'show',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        me.processForm({
                            xtype: 'form',
                            flex: 1,
                            itemId: 'form',
                            layout: {
                                align: 'stretch',
                                padding: 10,
                                type: 'vbox'
                            },
                            title: '',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    hidden: true,
                                    fieldLabel: 'id',
                                    name: 'id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'typeName',
                                    name: 'typeName',
                                    readOnly: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'name',
                                    name: 'name',
                                    readOnly: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'commonsuppliercombo'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'Supplier.title',
                                    name: 'supplier.title'
                                }
                            ]
                        }),
                        {
                            xtype: 'panel',
                            tbar: {
                                xtype: 'commonindextoolbar'
                            },
                            flex: 1,
                            itemId: 'indexDetail',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
                                me.processDetailGrid({
                                    xtype: 'gridpanel',
                                    flex: 1,
                                    itemId: 'detailGrid',
                                    autoScroll: true,
                                    title: 'ErpPurchaseSheetDet',
                                    store: 'ErpPurchaseReturnSheetDetStore',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            hidden: true,
                                            dataIndex: 'id',
                                            text: 'Id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            hidden: true,
                                            dataIndex: 'typeName',
                                            text: 'TypeName',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            hidden: true,
                                            dataIndex: 'name',
                                            text: 'Name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'sequence',
                                            text: 'Sequence',
                                            flex: 1,
                                            format: '0,000'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            hidden: true,
                                            dataIndex: 'warehouse.id',
                                            text: 'Warehouse.id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'warehouse.name',
                                            text: 'Warehouse.name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'warehouse.title',
                                            text: 'Warehouse.title',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            hidden: true,
                                            dataIndex: 'warehouseLocation.id',
                                            text: 'WarehouseLocation.id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'warehouseLocation.name',
                                            text: 'WarehouseLocation.name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'warehouseLocation.title',
                                            text: 'WarehouseLocation.title',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            hidden: true,
                                            dataIndex: 'batch.id',
                                            text: 'Batch.id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'batch.name',
                                            text: 'Batch.name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            hidden: true,
                                            dataIndex: 'item.id',
                                            text: 'Item.id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'item.name',
                                            text: 'Item.name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'item.title',
                                            text: 'Item.title',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'qty',
                                            text: 'qty',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            hidden: true,
                                            dataIndex: 'purchaseSheetDet.id',
                                            text: 'PurchaseSheetDet.id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'purchaseSheetDet.typeName',
                                            text: 'PurchaseSheetDet.typeName',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'purchaseSheetDet.name',
                                            text: 'PurchaseSheetDet.name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'purchaseSheetDet.sequence',
                                            text: 'PurchaseSheetDet.sequence',
                                            flex: 1
                                        }
                                    ],
                                    listeners: {
                                        beforerender: {
                                            fn: me.onGridBeforeRender1,
                                            scope: me
                                        }
                                    }
                                })
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    tbar: {
                        xtype: 'commonshowtoolbar'
                    },
                    itemId: 'showDetail',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        me.processDetailForm({
                            xtype: 'form',
                            flex: 1,
                            itemId: 'detailForm',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'purchaseReturnSheet.id',
                                    name: 'purchaseReturnSheet.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    hidden: true,
                                    fieldLabel: 'id',
                                    name: 'id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'typeName',
                                    name: 'typeName',
                                    readOnly: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'name',
                                    name: 'name',
                                    readOnly: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'sequence',
                                    name: 'sequence',
                                    readOnly: true,
                                    allowBlank: false
                                },
                                me.processPurchaseSheetDetContainer({
                                    xtype: 'fieldcontainer',
                                    itemId: 'purchaseSheetDetContainer',
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            hidden: true,
                                            fieldLabel: 'PurchaseSheetDet.id',
                                            name: 'purchaseSheetDet.id',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'purchaseSheetDet.typeName',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'purchaseSheetDet.name',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'purchaseSheetDet.sequence',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'commonselectbtn',
                                            margins: '1'
                                        }
                                    ]
                                }),
                                {
                                    xtype: 'commonwarehousecombo'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'Warehouse.title',
                                    name: 'warehouse.title'
                                },
                                {
                                    xtype: 'commonwarehouselocationcombo'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'WarehouseLocation.title',
                                    name: 'warehouseLocation.title'
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'Batch.id',
                                    name: 'batch.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'Batch.name',
                                    name: 'batch.name'
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'Item.id',
                                    name: 'item.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'Item.name',
                                    name: 'item.name'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'Item.title',
                                    name: 'item.title'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'qty',
                                    name: 'qty'
                                }
                            ]
                        })
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'purchaseSheetDetIndex',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'erppurchasesheetgrid',
                            flex: 1
                        },
                        {
                            xtype: 'erppurchasesheetdetgrid',
                            flex: 1
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processErpPurchaseReturnSheetGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'purchaseReturnSheet'));
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'purchaseSheet');
    },

    processDetailGrid: function(config) {
        return Utilities.processConfigBundle(config, 'purchaseReturnSheetDet');
    },

    processPurchaseSheetDetContainer: function(config) {

        return Utilities.processConfigBundle(config, 'purchaseSheetDet.sheetNum');
    },

    processDetailForm: function(config) {
        return Utilities.processConfigBundle(config, 'purchaseReturnSheetDet');
    },

    onErpPurchaseReturnSheetGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    },

    onGridBeforeRender1: function(component, eOpts) {
        component.getStore().removeAll();
    }

});