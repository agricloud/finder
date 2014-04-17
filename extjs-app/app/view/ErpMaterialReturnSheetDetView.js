/*
 * File: app/view/ErpMaterialReturnSheetDetView.js
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

Ext.define('foodprint.view.ErpMaterialReturnSheetDetView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.erpmaterialreturnsheetdetview',

    requires: [
        'foodprint.view.ErpMaterialReturnSheetGrid',
        'foodprint.view.CommonSelectBtn',
        'foodprint.view.CommonBatchCombo',
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
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'erpmaterialreturnsheetgrid',
                            itemId: 'masterGrid',
                            flex: 1
                        },
                        me.processGrid({
                            xtype: 'gridpanel',
                            flex: 1,
                            itemId: 'grid',
                            autoScroll: true,
                            title: 'ErpMaterialReturnSheetDet',
                            store: 'ErpMaterialReturnSheetDetStore',
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
                                    dataIndex: 'materialSheetDet.id',
                                    text: 'MaterialSheetDet.id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'materialSheetDet.typeName',
                                    text: 'materialSheetDet.typeName'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'materialSheetDet.name',
                                    text: 'materialSheetDet.name'
                                }
                            ],
                            listeners: {
                                beforerender: {
                                    fn: me.onGridBeforeRender,
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
                                type: 'vbox'
                            },
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    hidden: true,
                                    fieldLabel: 'materialReturnSheet.id',
                                    name: 'materialReturnSheet.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
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
                                    xtype: 'commonbatchcombo'
                                },
                                {
                                    xtype: 'numberfield',
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
                                    xtype: 'numberfield',
                                    fieldLabel: 'qty',
                                    name: 'qty'
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'materialSheetDet.id',
                                    name: 'materialSheetDet.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'materialSheetDet.typeName',
                                    name: 'materialSheetDet.typeName',
                                    readOnly: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'materialSheetDet.name',
                                    name: 'materialSheetDet.name',
                                    readOnly: true,
                                    allowBlank: false
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

    processGrid: function(config) {
        return Utilities.processConfigBundle(config, 'materialReturnSheetDet');
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'materialReturnSheetDet');
    },

    onGridBeforeRender: function(component, eOpts) {
        component.getStore().removeAll();
    }

});