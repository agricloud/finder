/*
 * File: app/view/BatchSourceView.js
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

Ext.define('foodprint.view.BatchSourceView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.batchsourceview',

    requires: [
        'foodprint.view.BatchGrid',
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
                            xtype: 'batchgrid',
                            itemId: 'masterGrid',
                            autoScroll: true,
                            flex: 1
                        },
                        me.processGrid({
                            xtype: 'gridpanel',
                            flex: 1,
                            itemId: 'grid',
                            title: 'BatchSource',
                            store: 'BatchSourceStore',
                            viewConfig: {
                                loadingText: 'Loading..'
                            },
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'id',
                                    text: 'Id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.name',
                                    text: 'Name',
                                    flex: 1.5
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'childBatch.item.id',
                                    text: 'Item_id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.item.name',
                                    text: 'Item_Name',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.item.title',
                                    text: 'Item_Title',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.item.spec',
                                    text: 'Item_Spec',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.item.unit',
                                    text: 'Item_Unit',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.item.description',
                                    text: 'Item_Description',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'childBatch.country',
                                    text: 'Country',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.countryTitle',
                                    text: 'CountryTitle',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'childBatch.supplier.id',
                                    text: 'Supplier_Id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'batch.supplier.name',
                                    text: 'Supplier_Name',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'childBatch.supplier.title',
                                    text: 'Supplier_Title',
                                    flex: 1
                                },
                                {
                                    xtype: 'datecolumn',
                                    hidden: true,
                                    dataIndex: 'childBatch.dueDate',
                                    text: 'DueDate',
                                    flex: 1,
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'childBatch.expectQty',
                                    text: 'ExpectQty',
                                    flex: 1
                                },
                                {
                                    xtype: 'datecolumn',
                                    hidden: true,
                                    dataIndex: 'childBatch.manufactureDate',
                                    text: 'ManufactureDate',
                                    flex: 1,
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'datecolumn',
                                    hidden: true,
                                    dataIndex: 'childBatch.expirationDate',
                                    text: 'ExpirationDate',
                                    flex: 1,
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'childBatch.remark',
                                    text: 'Remark',
                                    flex: 1
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    displayInfo: true,
                                    store: 'BatchStore'
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
                            items: [
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    fieldLabel: 'id',
                                    name: 'id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    fieldLabel: 'batch.id',
                                    name: 'batch.id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'batch.item.name',
                                    name: 'batch.item.name',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'batch.item.title',
                                    name: 'batch.item.title',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'batch.name',
                                    name: 'batch.name',
                                    readOnly: true
                                },
                                {
                                    xtype: 'commonbatchcombo',
                                    fieldLabel: 'childBatch.name',
                                    name: 'childBatch.id'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'childBatch.item.name',
                                    name: 'childBatch.item.name',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'childBatch.item.title',
                                    name: 'childBatch.item.title',
                                    readOnly: true
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

        config.text=Utilities.getMsg('default.message.load');
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'batchSource'));
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'batchSource');
    },

    onGridBeforeRender: function(component, eOpts) {
        component.getStore().removeAll();
    }

});