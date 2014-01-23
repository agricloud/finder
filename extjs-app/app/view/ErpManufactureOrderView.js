/*
 * File: app/view/ErpManufactureOrderView.js
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

Ext.define('foodprint.view.ErpManufactureOrderView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.erpmanufactureorderview',

    requires: [
        'foodprint.view.CommonItemCombo',
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
                        me.processGrid({
                            xtype: 'gridpanel',
                            itemId: 'grid',
                            store: 'ErpManufactureOrderStore',
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    width: 360,
                                    displayInfo: true,
                                    store: 'ErpManufactureOrderStore'
                                }
                            ],
                            columns: [
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'id',
                                    text: 'Id'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'typeName',
                                    text: 'TypeName'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'item.id',
                                    text: 'Item.id',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'item.name',
                                    text: 'Item.name'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'batch.id',
                                    text: 'Batch.id'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'batch.name',
                                    text: 'Batch.name'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'qty',
                                    text: 'qty'
                                }
                            ],
                            listeners: {
                                afterrender: {
                                    fn: me.onGridAfterRender,
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
                        type: 'hbox'
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
                                    fieldLabel: 'name',
                                    name: 'name',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'typeName',
                                    name: 'typeName'
                                },
                                {
                                    xtype: 'commonitemcombo'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    itemId: 'item.title',
                                    fieldLabel: 'item.title',
                                    name: 'item.title'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    itemId: 'item.spec',
                                    fieldLabel: 'item.spec',
                                    name: 'item.spec'
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    itemId: 'item.unit',
                                    fieldLabel: 'item.unit',
                                    name: 'item.unit'
                                },
                                {
                                    xtype: 'textareafield',
                                    disabled: true,
                                    itemId: 'item.description',
                                    fieldLabel: 'item.description',
                                    name: 'item.description'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'batch.name',
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
                }
            ]
        });

        me.callParent(arguments);
    },

    processGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'manufactureOrder'));
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'manufactureOrder');
    },

    onGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});