/*
 * File: app/view/CommonErpManufactureOrderCombo.js
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

Ext.define('foodprint.view.CommonErpManufactureOrderCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.commonerpmanufactureordercombo',

    itemId: 'commonErpManufactureOrderCombo',
    fieldLabel: 'ManufactureOrder.typeName+name',
    name: 'manufactureOrder.id',
    selectOnFocus: true,
    displayField: 'name',
    forceSelection: true,
    minChars: 0,
    queryParam: 'nameLike',
    store: 'ErpManufactureOrderStore',
    valueField: 'id',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                render: {
                    fn: me.onCommonErpManufactureOrderComboRender,
                    scope: me
                },
                select: {
                    fn: me.onCommonErpManufactureOrderComboSelect,
                    scope: me
                }
            }
        });

        me.processCommonErpManufactureOrderCombo(me);
        me.callParent(arguments);
    },

    processCommonErpManufactureOrderCombo: function(config) {
        config.fieldLabel=Utilities.getMsg('common.manufactureOrder.name.label');

        return config;
    },

    onCommonErpManufactureOrderComboRender: function(component, eOpts) {
        component.getStore().load();
    },

    onCommonErpManufactureOrderComboSelect: function(combo, records, eOpts) {
        if(combo.up() && combo.up().getForm()){
            combo.up().getForm().setValues({
                'item.id':records[0].data['item.id'],
                'item.name':records[0].data['item.name'],
                'item.title':records[0].data['item.title'],
                'batch.name':records[0].data['batch.name']
            });
        }
    }

});