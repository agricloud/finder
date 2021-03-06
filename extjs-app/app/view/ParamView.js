/*
 * File: app/view/ParamView.js
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

Ext.define('foodprint.view.ParamView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.paramview',

    itemId: 'paramEditorct',
    autoScroll: true,
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
                    autoScroll: true,
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        me.processGrid({
                            xtype: 'gridpanel',
                            loadStore: function() {
                                console.log("View-paramGrid.loadStore");

                                this.getStore().load();//對應ref
                            },
                            itemId: 'grid',
                            autoScroll: true,
                            manageHeight: false,
                            store: 'ParamStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: 'Name',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'title',
                                    text: 'Title',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'defaultValue',
                                    text: 'DefaultValue',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'paramType',
                                    text: 'ParamType',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'paramTypeTitle',
                                    text: 'ParamType.Title',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'description',
                                    text: 'Description',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'lower',
                                    text: 'lower',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'upper',
                                    text: 'upper',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'unit',
                                    text: 'unit',
                                    flex: 1
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    displayInfo: true,
                                    store: 'ParamStore'
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
                    autoScroll: true,
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        {
                            xtype: 'form',
                            itemId: 'form',
                            autoScroll: true,
                            layout: {
                                type: 'fit'
                            },
                            items: [
                                me.processParamForm({
                                    xtype: 'form',
                                    doDisplay: function(record) {
                                        console.log("View-paramForm.doDisplay");
                                        this.loadRecord(record);
                                    },
                                    itemId: 'paramForm',
                                    layout: {
                                        align: 'stretch',
                                        padding: 10,
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
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
                                            fieldLabel: 'title',
                                            name: 'title',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'defaultValue',
                                            name: 'defaultValue'
                                        },
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: 'paramType',
                                            name: 'paramType',
                                            allowBlank: false,
                                            editable: false,
                                            displayField: 'title',
                                            store: 'ParamTypeStore',
                                            valueField: 'paramType',
                                            listeners: {
                                                render: {
                                                    fn: me.onComboboxRender,
                                                    scope: me
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'description',
                                            name: 'description'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'lower',
                                            name: 'lower'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'upper',
                                            name: 'upper'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'unit',
                                            name: 'unit'
                                        }
                                    ]
                                })
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'param'));
    },

    processParamForm: function(config) {
        return Utilities.processConfigBundle(config, 'param');
    },

    onGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    },

    onComboboxRender: function(component, eOpts) {
        component.getStore().load();
    }

});