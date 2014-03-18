/*
 * File: app/model/Inventory.js
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

Ext.define('foodprint.model.Inventory', {
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
            name: 'item.id'
        },
        {
            name: 'item.name'
        },
        {
            name: 'item.title'
        },
        {
            name: 'qty'
        }
    ],

    proxy: {
        type: 'rest',
        extraParams: {
            foodpaintController: 'inventory'
        },
        url: '/foodpaint',
        reader: {
            type: 'json',
            root: 'inventoryInstanceList',
            totalProperty: 'inventoryInstanceTotal'
        }
    }
});