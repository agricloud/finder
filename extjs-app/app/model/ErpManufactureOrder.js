/*
 * File: app/model/ErpManufactureOrder.js
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

Ext.define('foodprint.model.ErpManufactureOrder', {
    extend: 'Ext.data.Model',

    fields: [
        {
            mapping: 'id',
            name: 'id'
        },
        {
            name: 'name'
        },
        {
            name: 'typeName'
        },
        {
            mapping: 'item.id',
            name: 'item.id'
        },
        {
            mapping: 'item.name',
            name: 'item.name'
        },
        {
            name: 'qty'
        },
        {
            mapping: 'batch.id',
            name: 'batch.id'
        },
        {
            mapping: 'batch.name',
            name: 'batch.name'
        }
    ],

    proxy: {
        type: 'rest',
        url: ' http://localhost:8180/manufactureOrder',
        reader: {
            type: 'json',
            root: 'manufactureOrderInstanceList',
            totalProperty: 'manufactureOrderInstanceTotal'
        }
    },

    constructor: function() {
        var me = this;
        me.processErpManufactureOrder(me);
        me.callParent(arguments);
    },

    processErpManufactureOrder: function(config) {
        console.log(config);
        console.log(config.proxy.url);
        config.proxy.url = Utilities.getSysConfig("foodpaintUrl")+"/manufactureOrder";
        return config;
    }

});