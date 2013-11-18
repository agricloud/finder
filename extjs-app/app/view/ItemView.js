/*
 * File: app/view/ItemView.js
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

Ext.define('foodprint.view.ItemView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.itemview',

    requires: [
        'foodprint.view.ItemGrid',
        'foodprint.view.CommonImageUploader',
        'foodprint.view.CommonIndexToolbar',
        'foodprint.view.CommonShowToolbar'
    ],

    itemId: 'itemEditorCt',
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
                            xtype: 'itemgrid',
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
                                    fieldLabel: 'title',
                                    name: 'title'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'spec',
                                    name: 'spec'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'unit',
                                    name: 'unit'
                                },
                                {
                                    xtype: 'textareafield',
                                    fieldLabel: 'description',
                                    name: 'description'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'dueDays',
                                    name: 'dueDays'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'effectStartDate',
                                    name: 'effectStartDate'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'effectEndDate',
                                    name: 'effectEndDate'
                                }
                            ]
                        }),
                        {
                            xtype: 'commonimageuploader',
                            domainName: 'item',
                            width: 250
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onItemEditorCtAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'item');
    },

    onItemEditorCtAfterRender: function(component, eOpts) {
        component.down("commonimageuploader").showToolbar();
    }

});