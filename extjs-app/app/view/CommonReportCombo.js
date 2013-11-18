/*
 * File: app/view/CommonReportCombo.js
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

Ext.define('foodprint.view.CommonReportCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.commonreportcombo',

    itemId: 'commonReportCombo',
    name: 'report.id',
    displayField: 'name',
    minChars: 0,
    queryParam: 'nameLike',
    store: 'WorkstationStore',
    valueField: 'id',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                render: {
                    fn: me.onCommonReportComboRender,
                    scope: me
                }
            }
        });

        me.processCommonReportCombo(me);
        me.callParent(arguments);
    },

    processCommonReportCombo: function(config) {
        config.fieldLabel=Utilities.getMsg('report.name.label');

        return config;
    },

    onCommonReportComboRender: function(component, eOpts) {
        component.getStore().load();
    }

});