/*
 * File: app/view/UserView.js
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

Ext.define('foodprint.view.UserView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userview',

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
                            store: 'UserStore',
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
                                    dataIndex: 'username',
                                    text: 'username',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'password',
                                    text: 'password',
                                    flex: 1
                                },
                                {
                                    xtype: 'checkcolumn',
                                    disabled: true,
                                    dataIndex: 'enabled',
                                    text: 'emabled',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'site.id',
                                    text: 'site.id',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'site.name',
                                    text: 'site.name',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'site.title',
                                    text: 'site.title',
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
                    ]
                },
                me.processShow({
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
                                console.log("View-userForm.doDisplay");
                                this.loadRecord(record);
                            },
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
                                    fieldLabel: 'ID',
                                    name: 'id',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'User Name',
                                    name: 'username',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Full Name',
                                    name: 'fullName'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Password',
                                    name: 'password'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    fieldLabel: 'Enabled',
                                    name: 'enabled'
                                },
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    fieldLabel: 'Site_id',
                                    name: 'site.id'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Site_name',
                                    name: 'site.name'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Site_title',
                                    name: 'site.title'
                                }
                            ]
                        })
                    ]
                })
            ]
        });

        me.callParent(arguments);
    },

    processGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'user'));
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'user');
    },

    processShow: function(config) {
        return Utilities.processConfigBundle(config, 'user');
    },

    onGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});