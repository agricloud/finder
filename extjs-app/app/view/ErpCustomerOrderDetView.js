/*
 * File: app/view/ErpCustomerOrderDetView.js
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

Ext.define('foodprint.view.ErpCustomerOrderDetView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.erpcustomerorderdetview',

    requires: [
        'foodprint.view.ErpCustomerOrderGrid',
        'foodprint.view.ErpCustomerOrderDetGrid',
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
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'erpcustomerordergrid',
                            itemId: 'masterGrid',
                            autoScroll: true,
                            flex: 1
                        },
                        {
                            xtype: 'erpcustomerorderdetgrid',
                            itemId: 'grid',
                            flex: 1
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
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            bodyPadding: 10,
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
                                    xtype: 'numberfield',
                                    hidden: true,
                                    fieldLabel: 'customerOrder.id',
                                    name: 'customerOrder.id',
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
                                    xtype: 'commonitemcombo',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    disabled: true,
                                    fieldLabel: 'Item.title',
                                    name: 'item.title'
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

    processForm: function(config) {
        return Utilities.processConfigBundle(config, 'customerOrderDet');
    }

});