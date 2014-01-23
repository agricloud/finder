/*
 * File: app/view/ErpSaleSheetDetView.js
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

Ext.define('foodprint.view.ErpSaleSheetDetView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.erpsalesheetdetview',

    requires: [
        'foodprint.view.ErpSaleSheetGrid',
        'foodprint.view.CommonErpCustomerOrderCombo',
        'foodprint.view.CommonErpCustomerOrderDetCombo',
        'foodprint.view.CommonBatchCombo',
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
                            xtype: 'erpsalesheetgrid',
                            flex: 1,
                            itemId: 'masterGrid'
                        },
                        me.processGrid({
                            xtype: 'gridpanel',
                            flex: 1,
                            itemId: 'grid',
                            autoScroll: true,
                            title: 'ErpSaleSheetDet',
                            store: 'ErpSaleSheetDetStore',
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
                                    dataIndex: 'customerOrderDet.id',
                                    text: 'CustomerOrderDet.id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'customerOrderDet.typeName',
                                    text: 'CustomerOrderDet.typeName',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'customerOrderDet.name',
                                    text: 'CustomerOrderDet.name',
                                    flex: 1
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'customerOrderDet.sequence',
                                    text: 'CustomerOrderDet.sequence',
                                    flex: 1,
                                    format: '0,000'
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
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'saleSheet.id',
                                    name: 'saleSheet.id',
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
                                    xtype: 'commonerpcustomerordercombo'
                                },
                                {
                                    xtype: 'commonerpcustomerorderdetcombo'
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
                                    xtype: 'commonbatchcombo'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'qty',
                                    name: 'qty'
                                }
                            ]
                        })
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processGrid: function(config) {
        return Utilities.processConfigBundle(config, 'outSrcPurchaseSheetDet');
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'saleSheetDet');
    },

    onGridBeforeRender: function(component, eOpts) {
        component.getStore().removeAll();
    }

});