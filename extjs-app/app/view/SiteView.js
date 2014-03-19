/*
 * File: app/view/SiteView.js
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

Ext.define('foodprint.view.SiteView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.siteview',

    itemId: 'userEditorct',
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
                            store: 'SiteStore',
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
                                    dataIndex: 'description',
                                    text: 'description',
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
                                    store: 'UserStore'
                                }
                            ],
                            listeners: {
                                afterrender: {
                                    fn: me.onGridAfterRender,
                                    scope: me
                                }
                            }
                        })
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onIndexAfterRender,
                            scope: me
                        }
                    }
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
                                    xtype: 'numberfield',
                                    hidden: true,
                                    fieldLabel: 'ID',
                                    name: 'id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Name',
                                    name: 'name',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Title',
                                    name: 'title'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Description',
                                    name: 'description'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Address',
                                    name: 'address'
                                }
                            ]
                        })
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onShowAfterRender,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    processGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'site'));
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'site');
    },

    onGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    },

    onIndexAfterRender: function(component, eOpts) {
        component.down('commoncreatebtn').setVisible(false);
    },

    onShowAfterRender: function(component, eOpts) {
        component.down('commondeletebtn').setVisible(false);
    }

});