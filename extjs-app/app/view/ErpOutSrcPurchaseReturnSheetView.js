/*
 * File: app/view/ErpOutSrcPurchaseReturnSheetView.js
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

Ext.define('foodprint.view.ErpOutSrcPurchaseReturnSheetView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.erpoutsrcpurchasereturnsheetview',

    requires: [
        'foodprint.view.ErpOutSrcPurchaseReturnSheetGrid',
        'foodprint.view.CommonSupplierCombo',
        'foodprint.view.CommonSelectBtn',
        'foodprint.view.CommonWarehouseCombo',
        'foodprint.view.CommonStorageLocationCombo',
        'foodprint.view.ErpManufactureOrderGrid',
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
                        {
                            xtype: 'erpoutsrcpurchasereturnsheetgrid',
                            itemId: 'grid'
                        }
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
                                    title: 'ErpOutSrcPurchaseSheetDet',
                                    store: 'ErpOutSrcPurchaseSheetDetStore',
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
                                            dataIndex: 'manufactureOrder.id',
                                            text: 'ManufactureOrder.id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'manufactureOrder.typeName',
                                            text: 'ManufactureOrder.typeName',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'manufactureOrder.name',
                                            text: 'ManufactureOrder.name',
                                            flex: 1
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
                                            dataIndex: 'storageLocation.id',
                                            text: 'StorageLocation.id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'storageLocation.name',
                                            text: 'StorageLocation.name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'storageLocation.title',
                                            text: 'StorageLocation.title',
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
                                    fieldLabel: 'outSrcPurchaseSheet.id',
                                    name: 'outSrcPurchaseSheet.id',
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
                                {
                                    xtype: 'fieldcontainer',
                                    itemId: 'manufactureOrderContainer',
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            hidden: true,
                                            fieldLabel: 'ManufactureOrder.id',
                                            name: 'manufactureOrder.id',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'ManufactureOrder.sheetNum',
                                            name: 'manufactureOrder.typeName',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'manufactureOrder.name',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'commonselectbtn'
                                        }
                                    ]
                                },
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
                                    xtype: 'commonstoragelocationcombo'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'StorageLocation.title',
                                    name: 'storageLocation.title'
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'item.id',
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
                                    xtype: 'textfield',
                                    fieldLabel: 'Batch.name',
                                    name: 'batch.name'
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
                    itemId: 'manufactureOrderIndex',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'erpmanufactureordergrid',
                            title: 'manufactureOrder',
                            flex: 1
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'outSrcPurchaseSheet');
    },

    processDetailGrid: function(config) {
        return Utilities.processConfigBundle(config, 'outSrcPurchaseSheetDet');
    },

    processDetailForm: function(config) {
        return Utilities.processConfigBundle(config, 'outSrcPurchaseSheetDet');
    },

    onGridBeforeRender1: function(component, eOpts) {
        component.getStore().removeAll();
    }

});