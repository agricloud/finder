/*
 * File: app/view/CommonShowBtn.js
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

Ext.define('foodprint.view.CommonShowBtn', {
    extend: 'Ext.button.Button',
    alias: 'widget.commonshowbtn',

    itemId: 'commonShowBtn',
    style: 'font-family:Pictos;',
    glyph: 88,
    text: 'Show',

    initComponent: function() {
        var me = this;

        me.processCommonShowBtn(me);
        me.callParent(arguments);
    },

    processCommonShowBtn: function(config) {
        config.text=Utilities.getMsg('common.showBtn.label');

        return config;
    }

});