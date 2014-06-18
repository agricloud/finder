/*
 * File: app/view/SupplierView.js
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

Ext.define('foodprint.view.SupplierView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.supplierview',

    requires: [
        'foodprint.view.CommonCountryCombo'
    ],

    itemId: 'customerEditorCt',
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
                        me.processGrid({
                            xtype: 'gridpanel',
                            flex: 1,
                            itemId: 'grid',
                            manageHeight: false,
                            store: 'SupplierStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'id',
                                    text: 'id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: 'name',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'title',
                                    text: 'title',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'country',
                                    text: 'country',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'countryTitle',
                                    text: 'country.title',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'contact',
                                    text: 'contact',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'tel',
                                    text: 'tel',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'fax',
                                    text: 'fax',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'email',
                                    text: 'email',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'address',
                                    text: 'address',
                                    flex: 1
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    displayInfo: true,
                                    store: 'SupplierStore'
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
                        type: 'vbox'
                    },
                    items: [
                        me.processForm({
                            xtype: 'form',
                            doDisplay: function(record) {
                                console.log("View-customerForm.doDisplay");
                                this.loadRecord(record);
                            },
                            flex: 1,
                            itemId: 'form',
                            layout: {
                                align: 'stretch',
                                padding: 10,
                                type: 'vbox'
                            },
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
                                    fieldLabel: 'title',
                                    name: 'title'
                                },
                                {
                                    xtype: 'commoncountrycombo'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'contact',
                                    name: 'contact'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'tel',
                                    name: 'tel'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'fax',
                                    name: 'fax'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'email',
                                    name: 'email'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'address',
                                    name: 'address'
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

        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'supplier'));
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'supplier');
    },

    onGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});