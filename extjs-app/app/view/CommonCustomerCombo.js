/*
 * File: app/view/CommonCustomerCombo.js
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

Ext.define('foodprint.view.CommonCustomerCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.commoncustomercombo',

    itemId: 'commonCustomerCombo',
    fieldLabel: 'customer.name',
    name: 'customer.id',
    displayField: 'name',
    forceSelection: true,
    minChars: 0,
    queryParam: 'nameLike',
    store: 'CustomerStore',
    valueField: 'id',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                select: {
                    fn: me.onCommonCustomerComboSelect,
                    scope: me
                },
                render: {
                    fn: me.onCommonCustomerComboRender,
                    scope: me
                }
            }
        });

        me.processCommonCustomerCombo(me);
        me.callParent(arguments);
    },

    processCommonCustomerCombo: function(config) {
        config.fieldLabel=Utilities.getMsg('customer.name.label');

        return config;
    },

    onCommonCustomerComboSelect: function(combo, records, eOpts) {
        if(combo.up() && combo.up().getForm()){
            combo.up().getForm().setValues({

                'customer.title':records[0].data['title']
            });
        }
    },

    onCommonCustomerComboRender: function(component, eOpts) {
        component.getStore().load();
    }

});