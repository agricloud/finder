/*
 * File: app/model/ReportParams.js
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

Ext.define('foodprint.model.ReportParams', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id'
        },
        {
            name: 'report.id'
        },
        {
            name: 'report.name'
        },
        {
            name: 'param.id'
        },
        {
            name: 'param.name'
        },
        {
            name: 'param.title'
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
            name: 'workstation.id'
        },
        {
            name: 'workstation.name'
        },
        {
            name: 'workstation.title'
        },
        {
            name: 'operation.id'
        },
        {
            name: 'operation.name'
        },
        {
            name: 'operation.title'
        },
        {
            name: 'supplier.id'
        },
        {
            name: 'supplier.name'
        },
        {
            name: 'supplier.title'
        }
    ],

    proxy: {
        type: 'rest',
        url: '/reportParams',
        reader: {
            type: 'json',
            root: 'reportParamsInstanceList',
            totalProperty: 'reportParamsInstanceTotal'
        }
    }
});