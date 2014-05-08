/*
 * File: app/view/CommonOperationCombo.js
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

Ext.define('foodprint.view.CommonOperationCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.commonoperationcombo',

    itemId: 'commonOperationCombo',
    fieldLabel: 'operation.name',
    name: 'operation.id',
    displayField: 'name',
    forceSelection: true,
    minChars: 0,
    queryParam: 'nameLike',
    store: 'OperationStore',
    valueField: 'id',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                select: {
                    fn: me.onCommonOperationComboSelect,
                    scope: me
                },
                render: {
                    fn: me.onCommonOperationComboRender,
                    scope: me
                }
            }
        });

        me.processCommonOperationCombo(me);
        me.callParent(arguments);
    },

    processCommonOperationCombo: function(config) {
        config.fieldLabel=Utilities.getMsg('operation.name.label');

        return config;
    },

    onCommonOperationComboSelect: function(combo, records, eOpts) {
        if(combo.up() && combo.up().getForm()){
            combo.up().getForm().setValues({

                'operation.title':records[0].data['title']
            });
        }
    },

    onCommonOperationComboRender: function(component, eOpts) {
        component.getStore().load();
    }

});