/*
 * File: app/view/CommonParamCombo.js
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

Ext.define('foodprint.view.CommonParamCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.commonparamcombo',

    itemId: 'commonParamCombo',
    fieldLabel: 'Param.name',
    name: 'param.id',
    allowBlank: false,
    displayField: 'name',
    forceSelection: true,
    minChars: 0,
    queryParam: 'nameLike',
    store: 'ParamStore',
    valueField: 'id',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                select: {
                    fn: me.onCommonParamComboSelect,
                    scope: me
                },
                render: {
                    fn: me.onCommonParamComboRender,
                    scope: me
                }
            }
        });

        me.processCommonParamCombo(me);
        me.callParent(arguments);
    },

    processCommonParamCombo: function(config) {
        config.fieldLabel=Utilities.getMsg('param.name.label');

        return config;
    },

    onCommonParamComboSelect: function(combo, records, eOpts) {
        if(combo.up() && combo.up().getForm()){
            combo.up().getForm().setValues({

                'param.title':records[0].data['title']
            });
        }
    },

    onCommonParamComboRender: function(component, eOpts) {
        component.getStore().load();
    }

});