/*
 * File: app/view/ErpAccountSheetView.js
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

Ext.define('foodprint.view.ErpAccountSheetView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.erpaccountsheetview',

    requires: [
        'foodprint.view.ErpAccountSheetGrid',
        'foodprint.view.CommonCustomerCombo',
        'foodprint.view.CommonSelectBtn',
        'foodprint.view.CommonCancelBtn',
        'foodprint.view.ErpSaleSheetGrid',
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
                            xtype: 'erpaccountsheetgrid',
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
                            maxHeight: 350,
                            autoScroll: true,
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
                                    xtype: 'commoncustomercombo'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'Customer.title',
                                    name: 'customer.title'
                                },
                                {
                                    xtype: 'datefield',
                                    disabled: true,
                                    fieldLabel: '單據日期',
                                    name: 'dateCreated',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: '簽核狀態',
                                    name: '',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'panel',
                                    border: false,
                                    itemId: 'collaspe',
                                    padding: '',
                                    layout: {
                                        autoWidth: false,
                                        titleCollapse: false,
                                        hideCollapseTool: false,
                                        collapseFirst: true,
                                        animate: false,
                                        sequence: false,
                                        activeOnTop: false,
                                        type: 'accordion'
                                    },
                                    bodyBorder: false,
                                    animCollapse: false,
                                    collapseFirst: false,
                                    hideCollapseTool: true,
                                    titleCollapse: true,
                                    items: [
                                        {
                                            xtype: 'form',
                                            border: false,
                                            padding: '',
                                            defaults: {
                                                anchor: '100%'
                                            },
                                            layout: {
                                                align: 'stretch',
                                                padding: 5,
                                                type: 'vbox'
                                            },
                                            bodyPadding: '',
                                            collapsed: false,
                                            collapsible: false,
                                            title: 'Account',
                                            items: [
                                                {
                                                    xtype: 'datefield',
                                                    itemId: 'accountDate',
                                                    padding: '',
                                                    fieldLabel: 'accountDate',
                                                    name: 'accountDate'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    itemId: 'rate',
                                                    fieldLabel: 'rate',
                                                    name: 'rate',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    itemId: 'anticipationDate',
                                                    padding: '',
                                                    width: 250,
                                                    fieldLabel: 'anticipationDate',
                                                    name: 'anticipationDate'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    itemId: 'originalReceived',
                                                    minWidth: 200,
                                                    padding: '',
                                                    width: 150,
                                                    fieldLabel: 'originalReceived',
                                                    labelWidth: 70,
                                                    name: 'originalReceived'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    itemId: 'received',
                                                    minWidth: 200,
                                                    padding: '',
                                                    width: 150,
                                                    fieldLabel: 'received',
                                                    labelWidth: 70,
                                                    name: 'received'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    itemId: 'subamounts',
                                                    padding: '',
                                                    width: 150,
                                                    fieldLabel: 'amounts',
                                                    labelWidth: 70,
                                                    name: 'subamounts',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    itemId: 'tax',
                                                    padding: '',
                                                    width: 150,
                                                    fieldLabel: 'tax',
                                                    labelWidth: 70,
                                                    name: 'tax',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    itemId: 'totalAmount',
                                                    padding: '',
                                                    width: 150,
                                                    fieldLabel: 'Total',
                                                    labelWidth: 70,
                                                    name: 'totalAmount',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'checkboxfield',
                                                    flex: 1,
                                                    disabled: true,
                                                    itemId: 'closedCode',
                                                    padding: '',
                                                    fieldLabel: 'closedCode',
                                                    labelWidth: 80,
                                                    name: 'closedCode',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    itemId: 'status',
                                                    padding: '',
                                                    width: 150,
                                                    fieldLabel: 'status',
                                                    labelWidth: 70,
                                                    name: 'status'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'form',
                                            border: false,
                                            disabled: true,
                                            padding: '',
                                            layout: {
                                                align: 'stretch',
                                                padding: 5,
                                                type: 'vbox'
                                            },
                                            bodyPadding: '',
                                            collapsed: false,
                                            collapsible: false,
                                            title: 'Invoice',
                                            items: [
                                                {
                                                    xtype: 'fieldcontainer',
                                                    disabled: true,
                                                    itemId: '',
                                                    layout: {
                                                        align: 'stretch',
                                                        type: 'hbox'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'numberfield',
                                                            hidden: true,
                                                            name: '',
                                                            readOnly: true
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            fieldLabel: '稅別碼',
                                                            name: '',
                                                            readOnly: true
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            name: '',
                                                            readOnly: true
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            fieldLabel: '發票聯數',
                                                            name: '',
                                                            readOnly: true
                                                        },
                                                        {
                                                            xtype: 'commonselectbtn',
                                                            margins: '1'
                                                        },
                                                        {
                                                            xtype: 'commoncancelbtn',
                                                            frame: false,
                                                            glyph: 0,
                                                            margins: '1'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    padding: '',
                                                    width: 250,
                                                    fieldLabel: '發票號碼'
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    itemId: 'Date',
                                                    padding: '',
                                                    fieldLabel: '申報年月',
                                                    name: ''
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    padding: '',
                                                    width: 250,
                                                    fieldLabel: '課稅別',
                                                    name: ''
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '營業稅率',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    padding: '',
                                                    width: 250,
                                                    fieldLabel: '發票日期'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '公司名稱',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    padding: '',
                                                    width: 250,
                                                    fieldLabel: '統一編號'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '發票貨款',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '發票稅額',
                                                    name: '',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '發票金額',
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    fieldLabel: '通關方式',
                                                    readOnly: true
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'form',
                                            border: false,
                                            disabled: true,
                                            padding: 3,
                                            layout: {
                                                align: 'stretch',
                                                padding: '',
                                                type: 'vbox'
                                            },
                                            bodyPadding: '',
                                            collapsed: false,
                                            collapsible: false,
                                            title: 'Other',
                                            items: [
                                                {
                                                    xtype: 'textareafield',
                                                    flex: 1,
                                                    fieldLabel: '備註'
                                                }
                                            ]
                                        }
                                    ]
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
                            minHeight: 250,
                            width: 150,
                            autoScroll: true,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
                                me.processDetailGrid({
                                    xtype: 'gridpanel',
                                    flex: 1,
                                    itemId: 'detailGrid',
                                    title: 'ErpAccountSheetDet',
                                    store: 'ErpAccountSheetDetStore',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            hidden: true,
                                            dataIndex: 'id',
                                            text: 'Id',
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
                                            xtype: 'gridcolumn',
                                            dataIndex: 'status',
                                            text: 'status',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'documentSource',
                                            text: 'documentSource',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'documentTypeName',
                                            text: 'documentTypeName',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'documentName',
                                            text: 'documentName',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'documentSequence',
                                            text: 'documentSequence',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            dataIndex: 'accountSheetDet.dateCreated',
                                            text: 'documentDateCreated',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            hidden: true,
                                            dataIndex: 'documentSource',
                                            text: 'name',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            hidden: true,
                                            dataIndex: 'typeName',
                                            text: 'typeName',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'subamounts',
                                            text: 'subamounts',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'tax',
                                            text: 'tax',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'totalAmount',
                                            text: 'totalAmount',
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
                                    fieldLabel: 'accountSheet.id',
                                    name: 'accountSheet.id',
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
                                    xtype: 'textfield',
                                    fieldLabel: 'Item.title',
                                    name: 'item.title',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'id',
                                    name: 'item.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Item.name',
                                    name: 'item.name',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Batch.name',
                                    name: 'batch.name',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'qty',
                                    name: 'qty'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '單價',
                                    name: 'price',
                                    readOnly: true
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'id',
                                    name: 'batch.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '貨款',
                                    name: 'subamounts',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '稅額',
                                    name: 'tax',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '金額',
                                    name: 'totalAmount',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '備註',
                                    name: 'remark',
                                    readOnly: true
                                }
                            ]
                        })
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'saleSheetDetIndex',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'erpsalesheetgrid',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'saleReturnSheetDetIndex',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'accountSheet');
    },

    processDetailGrid: function(config) {
        return Utilities.processConfigBundle(config, 'accountSheetDet');
    },

    processDetailForm: function(config) {
        return Utilities.processConfigBundle(config, 'accountSheetDet');
    },

    onGridBeforeRender1: function(component, eOpts) {
        component.getStore().removeAll();
    }

});