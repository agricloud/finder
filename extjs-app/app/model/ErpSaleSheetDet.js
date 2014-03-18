/*
 * File: app/model/ErpSaleSheetDet.js
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

Ext.define('foodprint.model.ErpSaleSheetDet', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'saleSheetDet.id'
        },
        {
            name: 'id'
        },
        {
            name: 'typeName'
        },
        {
            name: 'name'
        },
        {
            name: 'sequence'
        },
        {
            name: 'customerOrderDet.id'
        },
        {
            name: 'customerOrderDet.typeName'
        },
        {
            name: 'customerOrderDet.name'
        },
        {
            name: 'customerOrderDet.sequence'
        },
        {
            name: 'warehouse.id'
        },
        {
            name: 'warehouse.name'
        },
        {
            name: 'warehouse.title'
        },
        {
            name: 'item.id'
        },
        {
            name: 'item.name'
        },
        {
            name: 'item.title'
        },
        {
            name: 'batch.id'
        },
        {
            name: 'batch.name'
        },
        {
            name: 'qty'
        }
    ],

    proxy: {
        type: 'rest',
        url: ' http://localhost:8180/saleSheetDet',
        reader: {
            type: 'json',
            root: 'data'
        }
    },

    constructor: function() {
        var me = this;
        me.processErpSaleSheetDet(me);
        me.callParent(arguments);
    },

    processErpSaleSheetDet: function(config) {

        config.proxy.url = Utilities.getSysConfig("foodpaintUrl")+"/saleSheetDet";
        return config;
    }

});