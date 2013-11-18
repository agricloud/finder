/*
 * File: app/view/BatchForm.js
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

Ext.define('foodprint.view.BatchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.batchform',

    requires: [
        'foodprint.view.CommonItemCombo',
        'foodprint.view.CommonSupplierCombo'
    ],

    itemId: 'batchForm',
    layout: {
        align: 'stretch',
        padding: 10,
        type: 'vbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
                    xtype: 'commonitemcombo'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'country',
                    name: 'country',
                    editable: false,
                    displayField: 'name',
                    store: 'CountryStore',
                    valueField: 'name'
                },
                {
                    xtype: 'commonsuppliercombo'
                },
                {
                    xtype: 'textfield',
                    disabled: true,
                    fieldLabel: 'supplier.title',
                    name: 'supplier.title'
                },
                {
                    xtype: 'datefield',
                    itemId: 'dueDate',
                    fieldLabel: 'dueDate',
                    name: 'dueDate'
                },
                {
                    xtype: 'numberfield',
                    itemId: 'expectQty',
                    fieldLabel: 'expectQty',
                    name: 'expectQty',
                    allowBlank: false
                }
            ]
        });

        me.processLocalized(me);
        me.callParent(arguments);
    },

    processLocalized: function(config) {

        return Utilities.processConfigBundle(config, 'batch');
    },

    doDisplay: function(record) {

        this.loadRecord(record);

    }

});