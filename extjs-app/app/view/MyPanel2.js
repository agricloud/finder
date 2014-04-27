/*
 * File: app/view/MyPanel2.js
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

Ext.define('foodprint.view.MyPanel2', {
    extend: 'Ext.panel.Panel',

    requires: [
        'foodprint.view.CommonReceivablesCombo',
        'foodprint.view.CommonSelectBtn',
        'foodprint.view.CommonCancelBtn'
    ],

    border: false,
    itemId: 'collapsepanel',
    layout: {
        autoWidth: false,
        titleCollapse: false,
        hideCollapseTool: false,
        collapseFirst: false,
        animate: false,
        sequence: false,
        activeOnTop: false,
        type: 'accordion'
    },
    bodyBorder: false,
    animCollapse: false,
    collapseFirst: false,
    titleCollapse: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    border: false,
                    padding: 10,
                    defaults: {
                        anchor: '100%'
                    },
                    layout: {
                        align: 'stretch',
                        padding: 10,
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    collapsed: false,
                    collapsible: false,
                    title: 'Account',
                    items: [
                        {
                            xtype: 'datefield',
                            flex: 1,
                            itemId: 'dateCreated',
                            padding: 3,
                            fieldLabel: 'dateCreated',
                            name: 'dateCreated'
                        },
                        {
                            xtype: 'commonreceivablescombo',
                            padding: 5,
                            width: 250,
                            fixed: true
                        },
                        {
                            xtype: 'numberfield',
                            disabled: true,
                            padding: 5,
                            fieldLabel: 'rate',
                            name: 'rate',
                            readOnly: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            disabled: true,
                            padding: 5,
                            width: 250,
                            fieldLabel: 'currency'
                        },
                        {
                            xtype: 'datefield',
                            itemId: 'accountDate',
                            padding: 5,
                            fieldLabel: 'accountDate',
                            name: 'accountDate'
                        },
                        {
                            xtype: 'datefield',
                            itemId: 'anticipationDate',
                            padding: 5,
                            width: 250,
                            fieldLabel: 'anticipationDate',
                            name: 'anticipationDate'
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'originalReceived',
                            minWidth: 200,
                            padding: 5,
                            width: 150,
                            fieldLabel: 'originalReceived',
                            labelWidth: 70,
                            name: 'originalReceived'
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'received',
                            minWidth: 200,
                            padding: 5,
                            width: 150,
                            fieldLabel: 'received',
                            labelWidth: 70,
                            name: 'received'
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'amounts',
                            padding: 5,
                            width: 150,
                            fieldLabel: 'amounts',
                            labelWidth: 70,
                            name: 'amounts'
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'tax',
                            padding: 5,
                            width: 150,
                            fieldLabel: 'tax',
                            labelWidth: 70,
                            name: 'tax'
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'totalAmount',
                            padding: 5,
                            width: 150,
                            fieldLabel: 'TotalAmount',
                            labelWidth: 70,
                            name: 'totalAmount'
                        },
                        {
                            xtype: 'checkboxfield',
                            flex: 1,
                            disabled: true,
                            itemId: 'closedCode',
                            padding: 5,
                            fieldLabel: 'closedCode',
                            labelWidth: 80,
                            name: 'closedCode'
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'status',
                            padding: 5,
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
                    padding: 10,
                    layout: {
                        align: 'stretch',
                        padding: 10,
                        type: 'vbox'
                    },
                    bodyPadding: 10,
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
                    padding: 10,
                    layout: {
                        align: 'stretch',
                        padding: 10,
                        type: 'vbox'
                    },
                    bodyPadding: 10,
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
        });

        me.callParent(arguments);
    }

});