/*
 * File: app/model/InventoryDetail.js
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

Ext.define('foodprint.model.InventoryDetail', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id'
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
            name: 'warehouseLocation.id'
        },
        {
            name: 'warehouseLocation.name'
        },
        {
            name: 'warehouseLocation.title'
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
            name: 'item.unit'
        },
        {
            name: 'batch.id'
        },
        {
            name: 'batch.name'
        },
        {
            name: 'batch.title'
        },
        {
            name: 'qty'
        },
        {
            name: 'lastInDate',
            type: 'date'
        },
        {
            name: 'lastOutDate',
            type: 'date'
        },
        {
            name: 'lastUpdated',
            type: 'date'
        }
    ],

    proxy: {
        type: 'rest',
        url: '/foodpaint?foodpaintController=inventoryDetail',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});