/*
 * File: app/model/ErpStockInSheet.js
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

Ext.define('foodprint.model.ErpStockInSheet', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id'
        },
        {
            name: 'name'
        },
        {
            name: 'typeName'
        },
        {
            name: 'workstation.id'
        },
        {
            name: 'workstation.name'
        },
        {
            name: 'workstation.title'
        },
        {
            name: 'stockInDate',
            type: 'date'
        }
    ],

    proxy: {
        type: 'rest',
        url: ' http://localhost:8180/stockInSheet',
        reader: {
            type: 'json',
            root: 'stockInSheetInstanceList',
            totalProperty: 'stockInSheetInstanceTotal'
        }
    },

    constructor: function() {
        var me = this;
        me.processErpStockInSheetDet(me);
        me.callParent(arguments);
    },

    processErpStockInSheetDet: function(config) {

        console.log(config.proxy.url);
        config.proxy.url = Utilities.getSysConfig("foodpaintUrl")+"/stockInSheet";
        return config;
    }

});